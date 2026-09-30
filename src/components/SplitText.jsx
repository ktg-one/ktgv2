import { memo, useMemo } from "react";

/**
 * Word + character spans for GSAP stagger (no @gsap/splittext Club plugin).
 * Pass a plain string as children only.
 *
 * OPTIMIZATION: Memoized with React.memo and useMemo for word/char parsing.
 * Prevents expensive regex splits (\s+) and character array allocations on parent
 * re-renders (e.g. during GSAP scroll scrub cycles or layout updates).
 */
export const SplitText = memo(function SplitText({
  children,
  className = "",
  wordClass = "split-word",
  charClass = "split-char",
}) {
  const text = typeof children === "string" ? children : String(children ?? "");

  const parsedWords = useMemo(() => {
    if (!text.trim()) return [];
    return text
      .split(/\s+/)
      .filter(Boolean)
      .map((word) => ({
        word,
        chars: word.split(""),
      }));
  }, [text]);

  if (parsedWords.length === 0) return null;

  return (
    <span className={className}>
      {parsedWords.map(({ chars }, wordIndex) => (
        <span
          key={wordIndex}
          className={`${wordClass} inline-block whitespace-nowrap`}
          style={{
            marginRight: "0.25em",
            display: "inline-block",
            verticalAlign: "middle",
          }}
        >
          {chars.map((char, charIndex) => (
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

SplitText.displayName = "SplitText";
