import { memo, useMemo } from "react";

// OPTIMIZATION: Extract static style objects to module constants to prevent
// object allocation on every word and character on every render pass.
const WORD_STYLE = {
  marginRight: "0.25em",
  display: "inline-block",
  verticalAlign: "middle",
};

const CHAR_STYLE = {
  display: "inline-block",
};

/**
 * Word + character spans for GSAP stagger (no @gsap/splittext Club plugin).
 * Pass a plain string as children only.
 *
 * OPTIMIZATION: Memoized component and parsed word/character structure to prevent
 * redundant string splitting regexes and array allocations on parent re-renders.
 */
export const SplitText = memo(function SplitText({
  children,
  className = "",
  wordClass = "split-word",
  charClass = "split-char",
}) {
  const text = typeof children === "string" ? children : String(children ?? "");

  // OPTIMIZATION: Memoize string splitting so regex splitting runs only when text changes
  const words = useMemo(() => {
    if (!text.trim()) return [];
    return text.split(/\s+/).filter(Boolean).map((word) => ({
      word,
      chars: word.split(""),
    }));
  }, [text]);

  if (words.length === 0) return null;

  return (
    <span className={className}>
      {words.map(({ word, chars }, wordIndex) => (
        <span
          key={wordIndex}
          className={`${wordClass} inline-block whitespace-nowrap`}
          style={WORD_STYLE}
        >
          {chars.map((char, charIndex) => (
            <span
              key={charIndex}
              className={`${charClass} inline-block`}
              style={CHAR_STYLE}
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </span>
  );
});
