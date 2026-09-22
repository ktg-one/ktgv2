'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export function CursorDot() {
  const containerRef = useRef(null)
  const dotsRef = useRef([])
  
  // Configuration: How many dots and how fast they follow
  const DOT_COUNT = 12
  const LAG_FACTOR = 0.2 // Lower = slower/floatier, Higher = tighter
  
  useGSAP(() => {
    // 1. Initial Setup: Hide all dots initially and set transform origin
    gsap.set(dotsRef.current, { 
      xPercent: -50, 
      yPercent: -50,
      opacity: 0,
      scale: 0,
      x: -1000, // Start off-screen
      y: -1000
    })

    // OPTIMIZATION: Pre-create fast setters for x and y properties on all dot elements.
    // Calling gsap.quickSetter avoids GSAP object instantiation and property parsing overhead
    // on every frame (eliminating 12x gsap.set allocations per RAF tick ~720-1440/sec).
    const xSetters = dotsRef.current.map((el) => (el ? gsap.quickSetter(el, "x", "px") : null))
    const ySetters = dotsRef.current.map((el) => (el ? gsap.quickSetter(el, "y", "px") : null))

    // 2. State to track mouse and dot positions
    const mouse = { x: 0, y: 0 }
    // Initialize dots at a far position so they're not visible initially
    const dots = dotsRef.current.map(() => ({ x: -1000, y: -1000 }))
    let isMoving = false
    let timeoutId = null
    let rafId = null

    // 3. The Animation Loop (Using requestAnimationFrame for better sync with browser)
    const render = () => {
      // Optimization: track whether any dot actually moved significantly in this frame
      // to avoid redundant gsap.set DOM style mutations when stationary.
      let hasSignificantMovement = false
      const MOVEMENT_THRESHOLD = 0.05 // pixels

      // Calculate position for the first dot (Leader)
      const targetLeaderX = dots[0].x + (mouse.x - dots[0].x) * 0.95
      const targetLeaderY = dots[0].y + (mouse.y - dots[0].y) * 0.95

      if (Math.abs(targetLeaderX - dots[0].x) > MOVEMENT_THRESHOLD || Math.abs(targetLeaderY - dots[0].y) > MOVEMENT_THRESHOLD) {
        hasSignificantMovement = true
      }

      dots[0].x = targetLeaderX
      dots[0].y = targetLeaderY

      // Move the Leader Dot immediately using quickSetter
      if (xSetters[0] && ySetters[0]) {
        xSetters[0](dots[0].x)
        ySetters[0](dots[0].y)
      }

      // Calculate positions for the followers (The Tail)
      for (let i = 1; i < DOT_COUNT; i++) {
        const prev = dots[i - 1]
        const curr = dots[i]
        
        const nextX = curr.x + (prev.x - curr.x) * LAG_FACTOR
        const nextY = curr.y + (prev.y - curr.y) * LAG_FACTOR

        if (Math.abs(nextX - curr.x) > MOVEMENT_THRESHOLD || Math.abs(nextY - curr.y) > MOVEMENT_THRESHOLD) {
          hasSignificantMovement = true
        }

        curr.x = nextX
        curr.y = nextY

        // Apply movement immediately using quickSetter
        if (xSetters[i] && ySetters[i]) {
          xSetters[i](curr.x)
          ySetters[i](curr.y)
        }
      }
      
      // Continue animation loop only if moving or trail is still settling
      if (isMoving || hasSignificantMovement) {
        rafId = requestAnimationFrame(render)
      }
    }

    // 4. Mouse Event Listeners
    const onMouseMove = (e) => {
      // Update mouse position immediately
      mouse.x = e.clientX
      mouse.y = e.clientY
      
      // If this is the first movement, initialize leader dot at mouse position
      if (!isMoving) {
        dots[0].x = mouse.x
        dots[0].y = mouse.y
        // Initialize all dots at mouse position for instant appearance
        dots.forEach((dot, i) => {
          dot.x = mouse.x
          dot.y = mouse.y
        })
        isMoving = true
        rafId = requestAnimationFrame(render)
        // Fade in dots
        gsap.to(dotsRef.current, { 
          opacity: (i) => 1 - (i / DOT_COUNT), // Head is bright, tail fades
          scale: (i) => 1 - (i / DOT_COUNT) * 0.5, // Tail shrinks
          duration: 0.3 
        })
      }

      // Hide trail when mouse stops moving for a bit
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        if (rafId) cancelAnimationFrame(rafId)
        isMoving = false
        gsap.to(dotsRef.current, { opacity: 0, scale: 0, duration: 0.5 })
      }, 2000) // Keep visible for 2s after stop
    }

    // Use passive event listener to avoid blocking main thread scrolling and input rendering
    window.addEventListener('mousemove', onMouseMove, { passive: true })
    
    // Cleanup
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      if (rafId) cancelAnimationFrame(rafId)
      clearTimeout(timeoutId)
    }
  }, { scope: containerRef })

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden"
      style={{ isolation: 'isolate' }}
    >
      {[...Array(DOT_COUNT)].map((_, i) => (
        <div
          key={i}
          ref={(el) => (dotsRef.current[i] = el)}
          className="pointer-events-none absolute w-3 h-3 bg-white rounded-full mix-blend-difference will-change-transform"
          style={{ 
            opacity: 0, // Handled by GSAP
            // Use 'mix-blend-difference' to invert colors over white backgrounds, 
            // making it visible everywhere.
          }}
        />
      ))}
    </div>
  )
}