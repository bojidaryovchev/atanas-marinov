"use client";

import type React from "react";
import { type PropsWithChildren, useEffect, useState } from "react";

const HeroClient: React.FC<PropsWithChildren> = ({ children }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
    >
      {children}
    </div>
  );
};

export default HeroClient;
