import { Minus, Plus } from "lucide-react";
import { HTMLAttributes, useState } from "react";

interface props extends HTMLAttributes<HTMLDivElement> {
  question: string;
  answer: string;
}
const FAQItem = ({ question, answer, ...props }: props) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  return (
    <div {...props}>
      <div className="flex justify-between sm:gap-[9.125rem] sm:px-0 px-2">
        <h1 className="font-manrope font-semibold text-xl text-[#1C1C1C] ">
          {question}
        </h1>
        {isSelected ? (
          <Minus
            onClick={() => {
              setIsSelected((prev) => !prev);
            }}
            className="cursor-pointer size-6 shrink-0"
          />
        ) : (
          <Plus
            onClick={() => {
              setIsSelected((prev) => !prev);
            }}
            className="cursor-pointer size-6 shrink-0"
          />
        )}
      </div>
      {isSelected && (
        <p className="font-manrope font-normal text-[0.9375rem] leading-6 text-[#617275] my-6 sm:px-0 px-2">
          {answer}
        </p>
      )}
      <div className="border-[#D7D7D7] border my-6 sm:mx-0 mx-2 "></div>
    </div>
  );
};

export default FAQItem;
