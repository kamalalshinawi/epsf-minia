import type { ButtonHTMLAttributes, ReactNode } from "react";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
export const Button = ({
  children,
  className = "",
  ...props
}: ButtonProps): React.JSX.Element => (
  <button
    className={`rounded-md bg-minia-blue px-4 py-2 font-medium text-white transition hover:bg-blue-800 ${className}`}
    {...props}
  >
    {children}
  </button>
);
