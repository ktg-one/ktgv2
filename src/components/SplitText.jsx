import { memo, useMemo } from "react";

/**
 * Word + character spans for GSAP stagger (no @gsap/splittext Club plugin).
 * Pass a plain string as children only.
 *
 * OPTIMIZATIONS:
 * 1. Extracted static style objects (WORD_STYLE, CHAR_STYLE) to module scope to avoid
 *    allocating new JavaScript objects on every word/character on every render tick.
 * 2. Wrapped in React.memo to prevent re-renders when parent component props remain unchanged.
 * 3. Wrapped word-splitting regex operations in useMemo so string parsing only occurs
 *    when the input text changes.
 */

const WORD_STYLE = {
  marginRight: "0.25em",
  display: "inline-block",
  verticalAlign: "middle",
};

const CHAR_STYLE = {
  display: "inline-block",
};

export const SplitText = memo(function SplitText({
  children,
  className = "",
  wordClass = "split-word",
  charClass = "split-char",
}) {
  const text = typeof children === "string" ? children : String(children ?? "");

  const words = useMemo(() => {
    if (!text.trim()) return [];
    return text.split(/\s+/).filter(Boolean);
  }, [text]);

  if (words.length === 0) return null;

  return (
    <span className={className}>
      {words.map((word, wordIndex) => (
        <span
          key={wordIndex}
          className={`${wordClass} inline-block whitespace-nowrap`}
          style={WORD_STYLE}
        >
          {word.split("").map((char, charIndex) => (
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
