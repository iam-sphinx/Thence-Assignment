import { X } from "lucide-react";
import { Link } from "react-router-dom";
import RegisterForm from "../components/forms/register/RegisterForm";

const RegisterPage = () => {

  return (
    <main className="min-h-screen bg-white/80 p-6 flex flex-col flex-1">
      <div className="flex justify-between px-[3.25rem] h-16">
        <img src="/logo.svg" alt="logo"/>

        <Link
          to="/"
          className="size-16 rounded-full flex items-center justify-center border border-[#CACACA]"
        >
          <X />
        </Link>
      </div>

      <div className="flex flex-col mt-[2.8125rem] w-fit mx-auto items-center">
        <span className="font-grace font-normal text-[2.25rem] leading-[2.475rem] tracking-[-2%] text-[#2DA950]">
          Registration Form
        </span>
        <span className="font-manrope font-semibold text-[3.5rem] leading-[4.2rem] tracking-[-2%] text-center text-[#1C1C1C] w-[36.75rem]">
          Start your success Journey here!
        </span>
      </div>

      <RegisterForm/>
    </main>
  );
};

export default RegisterPage;
