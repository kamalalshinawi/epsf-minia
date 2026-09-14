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
    className={`rounded-md bg-[#0047ba] px-4 py-2 font-medium text-white transition hover:opacity-90 ${className}`}
    {...props}
  >
    {children}
  </button>
);
