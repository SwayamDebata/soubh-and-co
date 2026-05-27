import { cn } from "@/lib/utils";
import React from "react";

export const AuroraBackground = ({ className, children, ...props }) => {
  return (
    <div
      className={cn(
        "relative flex flex-col min-h-screen w-full overflow-hidden bg-background",
        className
      )}
      {...props}
    >
      {/* Aurora gradient layers */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Primary soft gradient blob */}
        <div
          className="absolute -top-[20%] -right-[10%] h-[600px] w-[600px] rounded-full opacity-50 blur-[100px]"
          style={{
            background: "radial-gradient(circle, #08608f 0%, transparent 70%)",
          }}
        />
        {/* Secondary accent blob */}
        <div
          className="absolute -bottom-[10%] -left-[10%] h-[500px] w-[500px] rounded-full opacity-50 blur-[80px]"
          style={{
            background: "radial-gradient(circle, #08608f 0%, transparent 70%)",
          }}
        />
        {/* Animated center glow */}
        <div
          className="absolute top-[30%] left-[40%] h-[400px] w-[400px] rounded-full opacity-50 blur-[100px] animate-pulse"
          style={{
            background: "radial-gradient(circle, #08608f 0%, transparent 60%)",
            animationDuration: "4s",
          }}
        />
      </div>
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
