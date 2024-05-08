import { useForm } from "react-hook-form";
import { FormData, UserSchema } from "../../../types/FormType";
import { zodResolver } from "@hookform/resolvers/zod";
import FormField from "./FormField";
import { CircleAlert } from "lucide-react";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(UserSchema),
  });

  const onSubmit = async (data: FormData) => {
    console.log("SUCCESS", data);
    navigate("/register/success");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="sm:w-[26.0625rem] mx-auto mt-[3.875rem] mb-[5.4238rem]"
    >
      <FormField
        type="email"
        placeholder="Email"
        name="email"
        register={register}
      />

      <FormField
        type="password"
        placeholder="Password"
        name="password"
        register={register}
      />

      {errors.email && (
        <span className="font-manrope font-medium text-base leading-[1.3662rem] text-[#FF0808] flex items-center gap-[0.4375rem]">
          <CircleAlert className="text-white fill-[#FF0808] size-3.5" />
          {errors.email?.message}
        </span>
      )}

      {errors.password && (
        <span className="font-manrope font-medium text-base leading-[1.3662rem] text-[#FF0808] flex items-center gap-[0.4375rem]">
          <CircleAlert className="text-white fill-[#FF0808] size-3.5" />
          {errors.password?.message}
        </span>
      )}

      <Button
        type="submit"
        className="w-full sm:py-[1.6319rem] py-[1.6319rem] mt-[2.9375rem]"
      >
        Submit
      </Button>
    </form>
  );
};

export default RegisterForm;
