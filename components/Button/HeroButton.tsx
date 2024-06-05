import React, { ReactElement } from "react";

interface HeroButtonProps {
  icon: ReactElement;
  onClick?: () => void;
  label: string;
}

const HeroButton: React.FC<HeroButtonProps> = ({
  icon: Icon,
  onClick,
  label,
}) => {
  return (
    <button className="bg-primary gap-4 flex shadow-lg px-6 p-4 rounded-full items-center uppercase font-sriracha hover:scale-105 duration-700 transition">
      {label}
      {Icon}
    </button>
  );
};

export default HeroButton;
