import { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../utils/cn";

interface props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}
const Card = ({ children, className, ...props }: props) => {
  return (
    <div
      {...props}
      className={cn("hover:shadow-custom p-[1.875rem]", className)}
    >
      {children}
    </div>
  );
};

export default Card;
