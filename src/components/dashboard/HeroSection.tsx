import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";
import Card from "../ui/Card";
import Carousel from "../ui/Carousel";
import { carouselList } from "../../data/CarouselList";

const HeroSection = () => {
  return (
    <section className="py-[4.9375rem] pl-[2.375rem] pr-[9.0625rem] mb-[3.875rem] relative overflow-hidden">
      {/* Grid background */}
      <div className="w-[35.75rem] h-[36.875rem] absolute top-[16.5625rem] -right-[4.3125rem]">
        <img src="/grid.svg" alt="grid icon" className="size-full" />
      </div>

      {/* Heading */}
      <div className="flex flex-col items-center w-fit mx-auto max-w-2xl">
        <span className="font-grace font-normal text-4xl tracking-[-2%] text-[#2DA950]">
          Success stories
        </span>
        <p className="font-manrope font-semibold text-[#1C1C1C]  text-[3.5rem] leading-[4.2rem] tracking-[-2%] text-center ">
          Every success journey we&#8217;ve encountered.
        </p>
      </div>

      {/* Card and Carousel Section */}
      <div className="flex  justify-between mt-[7rem]">
        <div className="w-[45.4681rem] h-[37.25rem] relative">
          <div className="h-[34.1419rem] w-[31.6863rem] rounded-[3.1688rem] overflow-hidden absolute right-[4.7387rem]">
            <img
              src="/hero.svg"
              alt="user"
              className="size-full object-cover select-none"
            />
          </div>

          <Card className="p-[0.0737rem] rounded-[1.7725rem] absolute right-0 bottom-0 bg-gradient-to-b from-[#3D3D3D] to-transparent">
            <div className="pt-[2.0513rem] pb-[2.4263rem] pr-[1.8013rem] pl-[2.1763rem] bg-[#002E18] rounded-[1.7725rem]">
              <h1 className="font-switzer font-medium text-[3.9606rem] leading-[4.7531rem] tracking-[-3%] text-white">
                $0.5{" "}
                <span className="text-[1.4256rem] leading-[1.9963rem] tracking-[1%] text-[#A6A3A0] uppercase">
                  million
                </span>
              </h1>
              <p className="max-w-[224.49px] font-manrope font-medium text-lg leading-[1.4625rem] text-[#CCCCCC]">
                Reduced client expenses by saving on hiring and employee costs.
              </p>
            </div>
          </Card>

          <Card className="w-[16.7387rem] h-[14.9375rem] bg-white rounded-[1.6944rem] absolute top-[7.125rem] left-0">
            <div>
              <img
                src="/spark.svg"
                alt="icon"
                className="w-[4.8856rem] h-[4.905rem] absolute left-2 -top-2"
              />
              <h1 className="font-switzer font-semibold text-[4rem] leading-[4.8rem] tracking-[-3%]">
                40%
              </h1>
              <p className="mt-2.5 font-manrope font-medium text-lg leading-[23.4px] text-[#828282]">
                Achieved reduction in project execution time by optimising team
                availability
              </p>
            </div>
          </Card>

          <Card className="w-[15.3125rem] h-[5.5rem] bg-white rounded-full absolute left-[5.3869rem] bottom-[5.9556rem] flex items-center p-4 pr-8">
            <div className="flex items-center gap-3.5">
              <div className="size-[3.25rem] rounded-full bg-[#DDEFE039] flex items-center justify-center">
                <img
                  src="/rocket.svg"
                  alt="deploy icon"
                  className="size-8 select-none"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-manrope font-bold text-2xl text-[#1C1C1C]">
                  10 DAYS
                </span>
                <span className="font-manrope font-medium text-base leading-[20.8px] text-[#828282]">
                  Staff Deployment
                </span>
              </div>
            </div>
          </Card>
        </div>

        {/* Carousel Section */}
        <div className="relative z-10 mt-[4.4375rem]">
          <Carousel>
            {carouselList?.map((item, idx) => {
              return (
                <p
                  key={idx}
                  className="font-manrope shrink-0 w-full font-semibold text-[2.5rem] leading-[3rem] tracking-[-2%] text-[#1C1C1C]"
                >
                  {item}
                </p>
              );
            })}
          </Carousel>
          <Button className="py-[1.9375rem] px-10 font-manrope font-semibold text-[1.25rem] leading-[1.7075rem] flex items-center gap-4">
            Explore More <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
