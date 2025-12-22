import { motion } from "framer-motion";
import Button from "../common/Button";
import { FiArrowUp } from "react-icons/fi";
import { SOCIALLINKS } from "../constants/SocialLinks";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-4">
              Let's Work Together
            </h3>
            <p className="text-muted-foreground text-center max-w-md">
              I'm currently open to new opportunities. Whether you have a
              question or just want to say hi, I'll do my best to get back to
              you!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-4 mb-8"
          >
            {SOCIALLINKS.map((link) => (
              <Button
                key={link.label}
                size="icon"
                variant="outline"
                className="h-9 w-9"
                onClick={() => {
                  if (link.href.startsWith("mailto:")) {
                    window.location.href = link.href;
                  } else {
                    window.open(link.href, "_blank");
                  }
                }}
                data-testid={`button-footer-${link.label.toLowerCase()}`}
              >
                <link.icon className="h-5 w-5" />
              </Button>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <p className="text-sm text-muted-foreground mb-4">
              Designed & Built with care
            </p>
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Prem Patel. All rights reserved.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8"
          >
            <Button
              size="icon"
              variant="ghost"
              onClick={scrollToTop}
              className="rounded-full"
              data-testid="button-scroll-to-top"
            >
              <FiArrowUp className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
