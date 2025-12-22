import { motion } from "framer-motion";
import Card from "../Common/Card";
import Badge from "../Common/Badge";
import { SKILLS, SKILLCATEGORIES } from "../Constants/SkillsConstants";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-32 relative bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">
            02. Skills & Technologies
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What I know</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* <div className="flex flex-row justify-center align-center gap-6 flex-wrap"> */}
          {SKILLCATEGORIES.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card
                interactive="true"
                className="p-6 hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <category.icon className={`h-5 w-5 ${category.color}`} />
                  </div>
                  <h4 className="font-semibold">{category.title}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
