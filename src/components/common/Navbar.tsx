import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="h-[6.9481rem] w-full rounded-full border border-[#EAEAEA] flex justify-between items-center px-[1.3056rem]">
      <div className="w-[7.9962rem] h-[2.9619rem] pl-[0.4238rem] ml-[1.9581rem]">
        <img src="/logo.svg" alt="logo" className="size-full object-contain" />
      </div>

      <div className="flex gap-[0.9794rem]">
        <Button
          onClick={() => navigate("/register")}
          className="py-[26.11px] pr-[49.61px] pl-[41.78px]"
          variant="secondary"
        >
          Get Projects
        </Button>
        <Button
          onClick={() => console.log("hi")}
          className="py-[26.11px] pr-[49.61px] pl-[41.78px]"
        >
          Onboard Talent
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
