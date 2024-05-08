import React, {
  Children,
  HTMLAttributes,
  ReactNode,
  useState,
} from "react";
import { cn } from "../../utils/cn";

interface props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}
const Carousel = ({ children, className, ...props }: props) => {
  const [curr, setCurr] = useState<number>(0);
 

  return (
    <>
      <div className=" max-w-[24.875rem] overflow-hidden">
        <div
          className={cn(
            "flex transition-transform ease-out duration-500",
            className
          )}
          style={{ transform: `translateX(-${curr * 100}%)` }}
          {...props}
        >
          {children}
        </div>
      </div>

      {/* carousel navigation */}
      <div className="flex gap-3 mt-[3.4375rem] mb-[8.1406rem]">
        {Children.map(children, (_, idx) => {
          return (
            <button
              key={idx}
              className={cn(
                "size-[0.6719rem] rounded-full bg-[#2DA950]",
                idx == curr ? "bg-[#2DA950]" : "bg-[#E4E3E3]"
              )}
              onClick={() => setCurr(idx)}
            ></button>
          );
        })}
      </div>
    </>
  );
};

export default Carousel;
