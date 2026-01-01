import { useEffect, useRef, useState, ReactNode } from "react";

interface AnimateOnScrollProps {
  children: ReactNode;
  animation?: "fade-in-up" | "fade-in-down" | "slide-in-left" | "slide-in-right" | "scale-in" | "fade-in";
  delay?: number;
  threshold?: number;
  className?: string;
}

export const AnimateOnScroll = ({
  children,
  animation = "fade-in-up",
  delay = 0,
  threshold = 0.1,
  className = "",
}: AnimateOnScrollProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  const animationClass = {
    "fade-in-up": "animate-fade-in-up",
    "fade-in-down": "animate-fade-in-down",
    "slide-in-left": "animate-slide-in-left",
    "slide-in-right": "animate-slide-in-right",
    "scale-in": "animate-scale-in",
    "fade-in": "animate-fade-in",
  }[animation];

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? animationClass : "opacity-0"}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
