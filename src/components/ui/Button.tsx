import { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../utils/cn";

// defining types of variants
type Variant = "primary" | "secondary";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  variant?: Variant;
  type?: "button" | "submit" | "reset";
}

const Button = ({
  className,
  children,
  variant = "primary",
  ...props
}: Props) => {
  // variant styles
  const variantStyles = {
    primary: "bg-[#1C1C1C] hover:bg-[#4E4E4E] text-white",
    secondary:
      "bg-inherit hover:bg-[#F1F1F1] border-[0.0819rem] border-[#EAEAEA] text-black",
  };

  return (
    <button
      className={cn(
        "rounded-full py-2 px-4 font-manrope font-semibold  text-xl text-center",
        variantStyles[variant], // Apply variant specific styles
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
