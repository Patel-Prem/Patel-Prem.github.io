import { motion } from "framer-motion";
import Badge from "../common/Badge";
import Button from "../common/Button";
import Card from "../common/Card";
import { FiExternalLink, FiGithub, FiFolder } from "react-icons/fi";
import { PROJECTS } from "../constants/ProjectConstants";

export default function ProjectsSection() {

  const otherProjects = PROJECTS.filter((p) => !p.featured);
  return (
    <section id="projects" className="py-20 md:py-32 relative bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">
            04. Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What I've Built
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.filter((p) => p.featured).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  interactive="true"
                  className="h-full flex flex-col overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
                  data-testid={`card-project-${project.id}`}
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <FiFolder className="h-16 w-16 text-primary/40 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="mb-2">
                      <p className="text-sm text-primary font-semibold">
                        {project.category}
                      </p>
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <div className="flex items-center gap-2">
                        {project.github && (
                          <Button
                            size="icon"
                            variant="ghost"
                            className="rounded-md"
                            onClick={() =>
                              window.open(project.github, "_blank")
                            }
                            data-testid={`button-project-github-${project.id}`}
                          >
                            <FiGithub className="h-4 w-4" />
                          </Button>
                        )}
                        {project.live && (
                          <Button
                            size="icon"
                            variant="ghost"
                            className="rounded-md"
                            onClick={() => window.open(project.live, "_blank")}
                            data-testid={`button-project-live-${project.id}`}
                          >
                            <FiExternalLink className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm flex-1 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {otherProjects.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-center mb-8">
                Other Projects
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {PROJECTS.filter((p) => !p.featured).map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card
                      interactive="true"
                      className="p-6 h-full flex flex-col hover:-translate-y-1 transition-transform duration-300"
                      data-testid={`card-other-project-${project.id}`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <FiFolder className="h-10 w-10 text-primary" />
                        <div className="flex items-center gap-2">
                          {project.github && (
                            <Button
                              size="icon"
                              variant="ghost"
                              onClick={() =>
                                window.open(project.github, "_blank")
                              }
                            >
                              <FiGithub className="h-4 w-4" />
                            </Button>
                          )}
                          {project.live && (
                            <Button
                              size="icon"
                              variant="ghost"
                              onClick={() =>
                                window.open(project.live, "_blank")
                              }
                            >
                              <FiExternalLink className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </div>
                      <h4 className="text-lg font-bold mb-2">
                        {project.title}
                      </h4>
                      <p className="text-muted-foreground text-sm flex-1 mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs text-muted-foreground font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
