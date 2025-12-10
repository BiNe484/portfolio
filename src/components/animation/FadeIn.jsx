import { useEffect, useRef, useState, cloneElement } from "react";

export default function FadeIn({
  children,
  direction = "up",
  duration = 700,
  delay = 0,
}) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  const directionClass = {
    up: "fade-translate-up",
    down: "fade-translate-down",
    left: "fade-translate-left",
    right: "fade-translate-right",
  };

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setTimeout(() => setShow(true), delay);
        observer.disconnect();
      }
    });

    observer.observe(ref.current);
  }, [delay]);

  return cloneElement(children, {
    ref: ref,
    style: {
      ...(children.props.style || {}),
      transitionDelay: `${delay}ms`,
      transitionDuration: `${duration}ms`,
    },
    className: `
        ${children.props.className || ""}
        opacity-0 transition-all ease-out
        ${directionClass[direction]}
        ${show ? "opacity-100 fade-reset" : ""}
    `,
  });
}
