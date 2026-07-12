import "./Button.css";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  download?: boolean;
}

const Button = ({
  children,
  href,
  onClick,
  variant = "primary",
  download = false,
}: ButtonProps) => {
  const className = `btn btn-${variant}`;

  if (href) {
    return (
      <a
        href={href}
        download={download}
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;