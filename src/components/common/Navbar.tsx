import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="h-20 sm:h-[6.9481rem] w-full rounded-full border border-[#EAEAEA] flex justify-between items-center sm:px-[1.3056rem] px-1">
      <div className="size-20 sm:w-[7.9962rem] sm:h-[2.9619rem] pl-[0.4238rem] sm:ml-[1.9581rem]">
        <img src="/logo.svg" alt="logo" className="size-full object-contain" />
      </div>

      <div className="flex sm:gap-[0.9794rem] gap-1 mr-3 sm:m-0">
        <Button
          onClick={() => navigate("/register")}
          className="sm:py-[26.11px] sm:pr-[49.61px] sm:pl-[41.78px] px-4 py-3"
          variant="secondary"
        >
          Get Projects
        </Button>
        <Button
          onClick={() => console.log("hi")}
          className="sm:py-[26.11px] sm:pr-[49.61px] sm:pl-[41.78px] px-4 py-3"
        >
          Onboard Talent
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
