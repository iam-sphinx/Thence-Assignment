import { HTMLAttributes } from "react";
import { cn } from "../../utils/cn";
import FAQItem from "./FAQItem";
import { faq } from "../../data/FAQListQuestion";

interface props extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const FAQCard = ({ className, ...props }: props) => {
  return (
    <div {...props} className={cn("sm:w-[36.3125rem] mt-[3.5625rem]", className)}>
      {faq?.map((item, idx) => {
        return <FAQItem key={idx} {...item} />;
      })}
    </div>
  );
};

export default FAQCard;
