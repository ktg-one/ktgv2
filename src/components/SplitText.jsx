import { memo, useMemo } from "react";

// OPTIMIZATION: Extract static inline styles to constants outside render loop
// to prevent object allocation overhead on every word and character span per render tick.
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
 * OPTIMIZATION: Memoized with React.memo and useMemo to prevent unnecessary
 * string splitting, array allocations, and DOM element tree re-creations when
 * parent components (e.g. PhilosophySection) re-render.
 */
export const SplitText = memo(function SplitText({
  children,
  className = "",
  wordClass = "split-word",
  charClass = "split-char",
}) {
  const text = typeof children === "string" ? children : String(children ?? "");

  // OPTIMIZATION: Cache parsed word and character arrays based on input string
  const parsedWords = useMemo(() => {
    if (!text.trim()) return [];
    return text.split(/\s+/).filter(Boolean).map(word => ({
      raw: word,
      chars: word.split("")
    }));
  }, [text]);

  if (parsedWords.length === 0) return null;

  return (
    <span className={className}>
      {parsedWords.map((wordObj, wordIndex) => (
        <span
          key={wordIndex}
          className={`${wordClass} inline-block whitespace-nowrap`}
          style={WORD_STYLE}
        >
          {wordObj.chars.map((char, charIndex) => (
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
