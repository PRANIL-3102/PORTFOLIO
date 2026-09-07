import { useEffect, useState } from "react";

const greetings = [
  { text: "Hello", language: "English" },
  { text: "नमस्ते", language: "Hindi" },
  { text: "নমস্কার", language: "Bengali" },
  { text: "வணக்கம்", language: "Tamil" },
  { text: "నమస్కారం", language: "Telugu" },
  { text: "ನಮಸ್ಕಾರ", language: "Kannada" },
  { text: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ", language: "Punjabi" },
  { text: "નમસ્તે", language: "Gujarati" },
  { text: "നമസ്കാരം", language: "Malayalam" },
];

function Intro({ onFinish }) {
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const [visible, setVisible] = useState(true);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    let isActive = true;

    const greetingInterval = setInterval(() => {
      if (!isActive) return;

      // Fade out
      setVisible(false);

      // Change greeting after fade out
      setTimeout(() => {
        if (!isActive) return;

        setCurrentGreeting((prev) =>
          (prev + 1) % greetings.length
        );

        // Fade in
        setVisible(true);
      }, 120);
    }, 500);

    // Start intro exit
    const hideTimer = setTimeout(() => {
      clearInterval(greetingInterval);
      setHide(true);
    }, 4000);

    // Remove intro after fade animation
    const finishTimer = setTimeout(() => {
      onFinish();
    }, 5000);

    return () => {
      isActive = false;
      clearInterval(greetingInterval);
      clearTimeout(hideTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  const greeting = greetings[currentGreeting];

  return (
    <div className={`intro ${hide ? "intro-hide" : ""}`}>
      <div className="intro-background" />

      <div className="intro-top">
        <span className="intro-country">INDIA</span>

        <span className="intro-line" />

        <span className="intro-message">
          ONE COUNTRY · MANY LANGUAGES
        </span>
      </div>

      <div className="intro-content">
        <p className="intro-small-title">
          GREETINGS FROM INDIA
        </p>

        <div
          className={`intro-greeting ${
            visible ? "greeting-visible" : "greeting-hidden"
          }`}
        >
          <span>{greeting.text}</span>
        </div>

        <div
          className={`intro-language ${
            visible ? "greeting-visible" : "greeting-hidden"
          }`}
        >
          {greeting.language.toUpperCase()}
        </div>

        <div className="intro-progress">
          <span className="intro-progress-fill" />
        </div>

        <p className="intro-loading">
          WELCOMING YOU...
        </p>
      </div>

      <div className="intro-bottom">
        <span>PRANIL SINGHA MAHAPATRA</span>
      </div>
    </div>
  );
}

export default Intro;