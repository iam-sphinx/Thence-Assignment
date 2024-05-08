import FAQCard from "./FAQCard";

const FAQSection = () => {
  return (
    <section className="py-8 mb-5">
      <div className="bg-[#E8EEE7] rounded-[2.5rem] pt-20  sm:pr-[4.625rem] flex flex-col sm:flex-row justify-between flex-1">
        <div>
          <div className="sm:ml-[5.9063rem] sm:mb-[5.1875rem] m-6">
            <h1 className="font-grace font-normal text-[2rem] leading-[2.2rem] tracking-[-2%] text-[#9E9D9D]">
              What's on your mind
            </h1>
            <h1 className="font-manrope font-semibold text-[3.75rem] leading-[4.125rem] tracking-[-1%] text-[#1C1C1C]">
              Ask Questions
            </h1>
          </div>
          <img src="/Union.svg" alt="not found" className="hidden sm:block" />
        </div>
        <FAQCard />
      </div>
    </section>
  );
};

export default FAQSection;
