'use client'

import { useEffect } from "react";
import { Button } from "../ui/button";
import { scrollToElement } from "  @/hooks/ScrollElement";


const ScrollButton = ({ variant, className, targetId, children, childclassName }) => {

  useEffect(() => {
    // Ensure the target element exists after component mount
    const target = document.getElementById(targetId);
    if (!target) {
      console.warn(`Target element with id "${targetId}" not found.`);
    }
  }, [targetId]);

  return (
    <Button
      variant={variant}
      className={className}
      onClick={() => scrollToElement(targetId)}
    >
  {children} 
    </Button>
  );
};

export default ScrollButton;