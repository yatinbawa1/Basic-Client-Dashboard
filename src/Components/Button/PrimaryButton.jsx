import React from "react";

function PrimaryButton({
  Icon,
  text,
  onClick,
  color = "#03632c",
  iconPosition = "left",
  bold = true,
  size = "md",
  className,
  collapsable,
}) {
  const sizeClasses = {
    sm: "p-2 sm:text-sm md:text-base",
    md: "p-4 sm:text-lg md:text-2xl",
    lg: "p-6 sm:text-xl md:text-3xl",
  };

  const fontWeight = bold ? "font-bold" : "font-normal";

  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className={`${className} flex gap-2 rounded-md ${sizeClasses[size]} ${fontWeight} text-white transition-all duration-200 hover:-translate-y-1 hover:cursor-pointer hover:shadow-xl active:-translate-y-0.5`}
    >
      {iconPosition === "left" && Icon && <Icon fontSize="1" />}
      <div className={collapsable ? "hidden sm:block" : "block"}>{text}</div>
      {iconPosition === "right" && Icon && <Icon fontSize="1" />}
    </button>
  );
}

export default PrimaryButton;
