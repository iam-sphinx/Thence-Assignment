import { FormFieldProps } from "../../../types/FormType";

const FormField: React.FC<FormFieldProps> = ({
  type,
  placeholder,
  name,
  register,
  valueAsNumber,
}) => (
  <>
    <input
      type={type}
      className="w-full h-[4.6875rem] px-9 py-6 text-ellipsis bg-[#F5F8FF] focus-within:bg-[#EFEFEF] border focus-within:border-[#00000005] rounded-full border-[#537FF1] mb-6"
      placeholder={placeholder}
      {...register(name, { valueAsNumber })}
    />
  </>
);
export default FormField;
