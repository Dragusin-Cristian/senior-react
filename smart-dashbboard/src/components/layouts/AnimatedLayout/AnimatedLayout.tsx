import React, { useRef, useLayoutEffect, useState } from "react";
import { AnimatedConatiner } from "./AnimatedLayout.styles";

type Props = {
  children: React.ReactNode;
};

const AnimatedLayout: React.FC<Props> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [animate, setAnimate] = useState(false);

  useLayoutEffect(() => {
    requestAnimationFrame(() => {
      setAnimate(true);
    });
  }, []);

  return (
    <AnimatedConatiner ref={containerRef} animate={animate}>
      {children}
    </AnimatedConatiner>
  );
};

export default AnimatedLayout;
