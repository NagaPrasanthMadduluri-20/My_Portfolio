import About from "./components/About";
import Footer from "./components/footer";
import HeroSection from "./components/herosection";
import Projects from "./components/projects";
import WorkExperience from "./components/workexperience";

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <WorkExperience />
      <Projects/>
      <Footer/>
    </>
  );
}
