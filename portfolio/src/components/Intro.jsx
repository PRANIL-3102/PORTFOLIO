import { useEffect, useState } from "react";

function Intro({ onFinish }) {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const startHide = setTimeout(() => {
      setHide(true);
    }, 1400);

    const finish = setTimeout(() => {
      onFinish();
    }, 2200);

    return () => {
      clearTimeout(startHide);
      clearTimeout(finish);
    };
  }, [onFinish]);

  return (
    <div className={`intro ${hide ? "hide" : ""}`}>
      <h1 className="intro-logo">
        Pranil<span>.</span>
      </h1>
    </div>
  );
}

export default Intro;