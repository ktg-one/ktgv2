import { memo } from "react";

/**
 * Word + character spans for GSAP stagger (no @gsap/splittext Club plugin).
 * Pass a plain string as children only.
 *
 * OPTIMIZATION: Memoized with React.memo to prevent expensive re-splitting of string
 * into nested word/char DOM elements on parent component re-renders (e.g. state updates in PhilosophySection).
 */
export const SplitText = memo(function SplitText({
  children,
  className = "",
  wordClass = "split-word",
  charClass = "split-char",
}) {
  const text = typeof children === "string" ? children : String(children ?? "");
  if (!text.trim()) return null;

  const words = text.split(/\s+/).filter(Boolean);

  return (
    <span className={className}>
      {words.map((word, wordIndex) => (
        <span
          key={wordIndex}
          className={`${wordClass} inline-block whitespace-nowrap`}
          style={{
            marginRight: "0.25em",
            display: "inline-block",
            verticalAlign: "middle",
          }}
        >
          {word.split("").map((char, charIndex) => (
            <span
              key={charIndex}
              className={`${charClass} inline-block`}
              style={{ display: "inline-block" }}
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </span>
  );
});
