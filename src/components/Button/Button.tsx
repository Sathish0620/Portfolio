import "./Button.css";

import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  download?: boolean;
  target?: "_blank" | "_self";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button = ({
  children,
  href,
  onClick,
  variant = "primary",
  download = false,
  target = "_self",
  type = "button",
}: ButtonProps) => {
  const className = `btn btn-${variant}`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        download={download}
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;