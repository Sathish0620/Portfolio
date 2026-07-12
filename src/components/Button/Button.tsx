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
  if (href) {
    return (
      <a
        href={href}
        download={download}
        className={`btn btn-${variant}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={`btn btn-${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;