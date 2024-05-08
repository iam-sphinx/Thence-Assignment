import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import FAQSection from "../components/dashboard/FAQSection";
import HeroSection from "../components/dashboard/HeroSection";

const DashboardPage = () => {
  return (
    <main className="min-h-screen bg-white/80 sm:p-6 p-2 flex flex-col flex-1">
      <Navbar />
      <HeroSection />
      <FAQSection/>
      <Footer/>
    </main>
  );
};

export default DashboardPage;
