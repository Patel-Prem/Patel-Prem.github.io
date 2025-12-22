import Hero from "../components/Home/Hero";
import AboutSection from "../components/About/AboutSection";
import Skills from "../components/Skills/SkillsSection";
import Experience from "../components/Experience/ExperienceSection";
import Projects from "../components/Projects/ProjectsSection";
import EducationCard from "../components/Education/EducationCard";
import ContactForm from "../components/Contact/ContactSection";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const HomePage = () => {
  return (
    // <div className="min-h-screen bg-white dark:bg-dark-bg">
    //   <Navbar />
    //   <Hero />
    //   <AboutSection />
    //   <Skills />
    //   <Timeline />
    //   <Projects />
    //   <EducationCard />
    //   <ContactForm />
    //   <Footer />
    // </div>
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <Skills />
        <Experience />
        <Projects />
        <EducationCard />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
