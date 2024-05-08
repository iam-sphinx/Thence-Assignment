import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterSuccessPage = () => {
  const [timer, setTimer] = useState<number>(5);
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 1) {
          clearInterval(intervalId);
          navigate("/");
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [navigate]);

  return (
    <main className="min-h-screen bg-white/80 p-6 flex flex-col flex-1">
      <div className="sm:px-[3.25rem] sm:h-16 h-10 flex items-center">
        <img src="/logo.svg" alt="Logo" />
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="sm:w-[44.875rem] sm:min-h-[22.3125rem] bg-white">
          <div className="sm:size-20 size-16 mx-auto mb-[2.5625rem]">
            <img
              src="/success.svg"
              alt="Success"
              className="size-full object-cover"
            />
          </div>
          <div className="flex flex-col items-center">
            <span className="font-grace font-normal sm:text-[2.25rem] sm:leading-[2.475rem] text-2xl tracking-[-2%] text-[#2DA950] mb-4">
              Success Submitted
            </span>
            <h1 className="font-manrope font-semibold sm:text-[3.5rem] sm:leading-[4.2rem] text-5xl tracking-[-2%] text-center text-[#1C1C1C] mb-5">
              Congratulations
            </h1>
            <p className="font-manrope font-medium sm:text-[1.6875rem] sm:leading-[2.1938rem] text-base text-center text-[#727272]">
              Your request has been successfully submitted to us. We will
              validate your information and reach out to you shortly with
              updates.
            </p>
          </div>
        </div>
      </div>

      <h1 className="text-center font-manrope font-normal sm:text-[1.25rem] sm:leading-[1.625rem] text-base text-[#727272]">
        Redirecting you to Homepage in{" "}
        <span className="font-bold text-[#1C1C1C]">{timer} Seconds</span>
      </h1>
    </main>
  );
};

export default RegisterSuccessPage;
