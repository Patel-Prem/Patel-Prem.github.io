import { motion } from "framer-motion";
import Badge from "../common/Badge";
import Card from "../common/Card";
import { LuGraduationCap, LuAward, LuCalendar } from "react-icons/lu";
import { EDUCTION, CERTIFICATIONS } from "../constants/EductionConstants";

export default function EducationSection() {
  return (
    <section id="education" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">
            05. Education
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Academic Background
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {EDUCTION.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className="p-6 h-full hover:-translate-y-1 transition-transform duration-300"
                data-testid={`card-education-${edu.id}`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <LuGraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">
                      {edu.institution}
                    </h3>
                    <p className="text-primary font-medium">{edu.degree}</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <LuCalendar className="h-4 w-4" />
                    <span>{edu.period}</span>
                  </div>
                  <span>•</span>
                  <span>{edu.location}</span>
                  <span>•</span>
                  <Badge variant="secondary" className="text-xs">
                    GPA: {edu.gpa}
                  </Badge>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                    <LuAward className="h-4 w-4 text-primary" />
                    Honors & Awards
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.honors.map((honor) => (
                      <Badge key={honor} variant="outline" className="text-xs">
                        {honor}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold mb-2">
                    Relevant Coursework
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {CERTIFICATIONS.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-center mb-8">
              Certifications
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {CERTIFICATIONS.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    className="p-6 text-center hover:-translate-y-1 transition-transform duration-300"
                    data-testid={`card-certification-${cert.id}`}
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <LuAward className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-bold mb-1">{cert.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {cert.issuer}
                    </p>
                    <Badge variant="secondary" className="mt-3 text-xs">
                      {cert.year}
                    </Badge>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
