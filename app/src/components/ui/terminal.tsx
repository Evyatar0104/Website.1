"use client";

import { cn } from "@/lib/utils";
import { motion, MotionProps } from "framer-motion";
import React, { useEffect, useState } from "react";

interface TypingAnimationProps {
  children: string;
  className?: string;
  duration?: number;
  delay?: number;
  as?: React.ElementType;
}

export const TypingAnimation = ({
  children,
  className,
  duration = 60,
  delay = 0,
  as: Component = "span",
}: TypingAnimationProps) => {
  const [displayedText, setDisplayedText] = useState<string>("");

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      let i = 0;
      const typingEffect = setInterval(() => {
        if (i < children.length) {
          setDisplayedText(children.substring(0, i + 1));
          i++;
        } else {
          clearInterval(typingEffect);
        }
      }, duration);

      return () => {
        clearInterval(typingEffect);
      };
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [children, duration, delay]);

  return (
    <Component className={cn("font-mono text-sm", className)}>
      {displayedText}
    </Component>
  );
};

interface AnimatedSpanProps extends MotionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const AnimatedSpan = ({
  children,
  delay = 0,
  className,
  ...props
}: AnimatedSpanProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: delay / 1000, ease: "easeOut" }}
      className={cn("grid grid-cols-[auto_1fr] gap-x-2 font-mono text-sm", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};

interface TerminalProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

interface TerminalChildProps {
  children?: React.ReactNode;
  duration?: number;
  delay?: number;
}

export const Terminal = ({ children, className, style }: TerminalProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  let runningDelay = 0;

  const childrenWithDelay = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      const props = child.props as TerminalChildProps;
      const { children: textContent, duration = 60, delay: userDelay = 0 } = props;

      const componentDelay = runningDelay + userDelay;

      // Estimate duration for TypingAnimation
      let componentDuration = 0;
      if (child.type === TypingAnimation && typeof textContent === 'string') {
        componentDuration = textContent.length * duration;
      } else if (child.type === AnimatedSpan) {
        componentDuration = 200; // Fixed small buffer for span appearance
      }

      // eslint-disable-next-line
      runningDelay += componentDuration + 100; // Add small buffer

      return React.cloneElement(child, {
        delay: componentDelay,
      } as TerminalChildProps);
    }
    return child;
  });

  return (
    <div
      className={cn(
        "z-0 h-full w-full rounded-xl border border-border bg-background font-mono text-sm shadow-sm",
        className,
      )}
      style={style}
    >
      <div className="flex items-center gap-x-2 border-b border-border p-4 bg-muted/50 rounded-t-xl">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
      </div>
      <div className="p-4 flex flex-col gap-y-2 whitespace-pre-wrap overflow-hidden">
        {childrenWithDelay}
      </div>
    </div>
  );
};
