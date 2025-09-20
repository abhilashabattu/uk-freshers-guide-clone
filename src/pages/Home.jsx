import HeroSection from "../components/Hero-Section/HeroSection";
import StudentTrusted from "../components/Student-Trusted/StudentTrusted";
import UniversitySection from "../components/Choose-University/UniversitySection";
import WhyChooseSection from "../components/Why-Choose/WhyChooseSection";
import BottomSection from "../components/Bottom-Section/BottomSection";
import Footer from "../components/Footer/Footer";
import FloatingIcons from "../components/FloatingIcons/FloatingIcons";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StudentTrusted />
      <UniversitySection />
      <WhyChooseSection />
      <BottomSection />
      <Footer />
      <FloatingIcons />
    </>
  );
}
