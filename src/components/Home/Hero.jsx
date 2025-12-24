import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import ParticleBackground from "./ParticleBackground";
import Button from "../Common/Button";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden scroll-mt-24"
    >
      <ParticleBackground />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10"></div>

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-20 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold border border-primary/20">
              Available for work
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="text-foreground">
              Hi{" "}
              <span
                className="inline-block text-5xl lg:text-7xl"
                style={{
                  transformOrigin: "70% 70%",
                  animation: "wave 2.5s infinite",
                }}
              >
                👋
              </span>
              , I'm{" "}
            </span>
            <span className="text-primary">Prem Patel</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Full Stack Developer & Creative Problem Solver crafting elegant
            solutions with modern technologies. Passionate about building
            exceptional digital experiences.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button
              onClick={scrollToProjects}
              variant="primary"
              size="lg"
              className="min-h-10 px-8"
            >
              What I've Built
            </Button>
            <Button
              onClick={scrollToAbout}
              variant="outline"
              size="lg"
              className="min-h-10 px-8"
            >
              About Me
            </Button>
          </motion.div>

          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              size="icon"
              variant="ghost"
              className="rounded-md"
              onClick={() =>
                window.open("https://github.com/Patel-Prem", "_blank")
              }
            >
              <FiGithub />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="rounded-md"
              onClick={() =>
                window.open("https://linkedin.com/in/premkumarpatel", "_blank")
              }
              data-testid="button-linkedin"
            >
              <FiLinkedin className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="rounded-md"
              onClick={() =>
                (window.location.href = "mailto:work.prempatel@gmail.com")
              }
              data-testid="button-email"
            >
              <FiMail className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hi, I'm <span className="text-accent-primary">Your Name</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Full Stack Developer & Creative Problem Solver
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button onClick={scrollToProjects} size="lg">
              View My Work
            </Button>
            <Button onClick={scrollToContact} variant="outline" size="lg">
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>
      </div> */}
    </section>
  );
};

export default Hero;
