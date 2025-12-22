
import { motion } from "framer-motion";
import { Badge } from "../common/Badge";
import { Card } from "../common/Card";
import { LuBuilding2, LuCalendar } from "react-icons/lu";
import { EXPERIENCES } from "../constants/ExperienceConstants"

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">
            03. Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Where I've Worked
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="hidden md:block absolute left-1/2 top-8 w-4 h-4 bg-primary rounded-full -translate-x-1/2 border-4 z-10" />

                <div className="pl-8 md:pl-0 md:w-1/2">
                  <div
                    // className={`${
                    //   index % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"
                    // }`}
                  >
                    <Card
                      className="p-6 hover:-translate-y-1 transition-transform duration-300"
                      data-testid={`card-experience-${exp.id}`}
                    >
                      <div
                        // className={`flex items-center gap-3 mb-4 ${
                        //   index % 2 === 0 ? "" : "md:justify-end"
                        // }`}
                        className="flex items-center gap-3 mb-4"
                      >
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <LuBuilding2 className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">{exp.role}</h3>
                          <p className="text-primary font-medium">
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      <div
                        // className={`flex items-center gap-2 text-sm text-muted-foreground mb-4 ${
                        //   index % 2 === 0 ? "" : "md:justify-end"
                        // }`}
                        className="flex items-center gap-2 text-sm text-muted-foreground mb-4"
                      >
                        <LuCalendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                        <span>•</span>
                        <span>{exp.location}</span>
                      </div>

                      <p className="text-muted-foreground mb-4">
                        {exp.description}
                      </p>

                      <ul
                        // className={`space-y-2 mb-4 ${
                        //   index % 2 === 0 ? "" : "md:text-left"
                        // }`}
                        className="space-y-2 mb-4"
                      >
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm"
                          >
                            <span className="text-primary mt-1">▹</span>
                            <span className="text-muted-foreground">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <div
                        // className={`flex flex-wrap gap-2 ${
                        //   index % 2 === 0 ? "" : "md:justify-end"
                        // }`}
                        className="flex flex-wrap gap-2"
                      >
                        {exp.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </Card>
                  </div>
                </div>

                <div className="hidden md:block md:w-1/2" />

                <div className="absolute left-0 top-6 w-3 h-3 bg-primary rounded-full md:hidden border-2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}