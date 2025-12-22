import { motion } from "framer-motion";
import Button from "../common/Button";
import { FiDownload } from "react-icons/fi";

export default function AboutSection() {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Prem-Patel-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">
            01. About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Who I Am</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-full aspect-square max-w-md mx-auto lg:mx-0 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden border border-primary/20">
                <div className="text-8xl font-bold text-primary/30">Prem</div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/5 rounded-2xl -z-10" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-lg text-justify text-muted-foreground leading-relaxed">
              I'm a passionate Full Stack Developer with 1+ year of experience
              building web applications that combine beautiful design with
              robust functionality. I love turning complex problems into simple,
              elegant solutions.
            </p>
            <p className="text-lg text-justify text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies.
              {/* , contributing to open-source projects, or sharing knowledge through
              technical writing and mentoring. */}
            </p>
            <p className="text-lg text-justify text-muted-foreground leading-relaxed">
              My approach focuses on writing clean, maintainable code while
              delivering exceptional user experiences. I believe in continuous
              learning and staying updated with the latest industry trends.
            </p>

            <Button
              variant="primary"
              className="min-h-10 px-8"
              size="lg"
              onClick={downloadResume}
            >
              <FiDownload />
              My Resume
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
