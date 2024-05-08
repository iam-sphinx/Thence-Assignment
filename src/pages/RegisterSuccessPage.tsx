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
      <div className="px-[3.25rem] h-16 flex items-center">
        <img src="/logo.svg" alt="Logo" />
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="w-[44.875rem] min-h-[22.3125rem] bg-white">
          <div className="size-20 mx-auto mb-[2.5625rem]">
            <img
              src="/success.svg"
              alt="Success"
              className="size-full object-cover"
            />
          </div>
          <div className="flex flex-col items-center">
            <span className="font-grace font-normal text-[2.25rem] leading-[2.475rem] tracking-[-2%] text-[#2DA950] mb-4">
              Success Submitted
            </span>
            <h1 className="font-manrope font-semibold text-[3.5rem] leading-[4.2rem] tracking-[-2%] text-center text-[#1C1C1C] mb-5">
              Congratulations
            </h1>
            <p className="font-manrope font-medium text-[1.6875rem] leading-[2.1938rem] text-center text-[#727272]">
              Your request has been successfully submitted to us. We will
              validate your information and reach out to you shortly with
              updates.
            </p>
          </div>
        </div>
      </div>

      <h1 className="text-center font-manrope font-normal text-[1.25rem] leading-[1.625rem] text-[#727272]">
        Redirecting you to Homepage in{" "}
        <span className="font-bold text-[#1C1C1C]">{timer} Seconds</span>
      </h1>
    </main>
  );
};

export default RegisterSuccessPage;
