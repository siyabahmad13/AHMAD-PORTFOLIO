"use client";

import React, { useState, useEffect } from "react";

const phrases = [
  "I build AI-powered products.",
  "I build software that solves real problems.",
  "I turn ideas into working products.",
  "I design. I build. I ship."
];

export function Typewriter() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  // Subtle cursor blink
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 550);
    return () => clearInterval(blinkInterval);
  }, []);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting && text === currentPhrase) {
      // Pause at complete phrase
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2600);
    } else if (isDeleting && text === "") {
      // Pause briefly before typing next phrase
      timer = setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }, 400);
    } else {
      // Smooth typing and deleting
      const delta = isDeleting ? 28 : 55;
      timer = setTimeout(() => {
        setText((current) =>
          isDeleting
            ? currentPhrase.substring(0, current.length - 1)
            : currentPhrase.substring(0, current.length + 1)
        );
      }, delta);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex]);

  return (
    <div className="text-[17px] sm:text-[19px] md:text-[20px] font-mono-meta font-medium tracking-tight text-[var(--accent)] min-h-[30px] flex items-center">
      <span>{text}</span>
      <span
        className={`inline-block w-[2px] h-[19px] bg-[var(--accent)] ml-1.5 transition-opacity duration-200 ${
          cursorVisible ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
