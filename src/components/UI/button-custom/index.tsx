import { ButtonHTMLAttributes } from "react";

type ButtonType = "error" | "warning" | "success" | "default";

type Props = {
  onClick?: () => void;
  children: React.ReactNode;
  buttonType?: ButtonType;
  type?: "button" | "submit" | "reset";
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const functionTypeButton = (btn: ButtonType) => {
  return btn === "error"
    ? "bg-red-500"
    : btn === "warning"
    ? "bg-yellow-500"
    : btn === "success"
    ? "bg-green-500"
    : btn === "default"
    ? "bg-blue-500"
    : "bg-gray-200";
};

const Button = ({
  onClick,
  children,
  buttonType,
  type,
  className,
  ...props
}: Props) => {
  return (
    <button
      {...props}
      type={type}
      className={`  text-white py-1 px-3 rounded-lg ${functionTypeButton(
        buttonType!
      )} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
