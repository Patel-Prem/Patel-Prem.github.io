// src/pages/ComponentPreview.jsx
import { FiCode, FiBriefcase, FiStar, FiTool } from "react-icons/fi";
import {
  Card,
  CardMeta,
  CardDescription,
  CardList,
  CardBadges,
} from "../components/common/Card";
import Badge, { BadgeGroup } from "../components/common/Badge";

export default function ComponentPreview() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Badge Preview */}
        <section>
          <h1 className="text-3xl font-bold mb-6">Badge Component</h1>

          <div className="space-y-6">
            {/* Default Badges */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Default</h3>
              <BadgeGroup>
                <Badge>React</Badge>
                <Badge>TypeScript</Badge>
                <Badge>Tailwind CSS</Badge>
                <Badge>Node.js</Badge>
              </BadgeGroup>
            </div>

            {/* Badge Variants */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Variants</h3>
              <BadgeGroup>
                <Badge variant="default">Default</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="error">Error</Badge>
                <Badge variant="info">Info</Badge>
              </BadgeGroup>
            </div>

            {/* Badge Sizes */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Sizes</h3>
              <BadgeGroup>
                <Badge size="sm">Small</Badge>
                <Badge size="md">Medium</Badge>
                <Badge size="lg">Large</Badge>
              </BadgeGroup>
            </div>

            {/* Dot Badges */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Dot Badges</h3>
              <BadgeGroup>
                <Badge variant="dot" dotColor="green">
                  Online
                </Badge>
                <Badge variant="dot" dotColor="red">
                  Offline
                </Badge>
                <Badge variant="dot" dotColor="yellow">
                  Away
                </Badge>
                <Badge variant="dot" dotColor="blue">
                  In Meeting
                </Badge>
              </BadgeGroup>
            </div>

            {/* Interactive Badges */}
            <div>
              <h3 className="text-lg font-semibold mb-3">
                Interactive (hover me)
              </h3>
              <BadgeGroup>
                <Badge interactive variant="success">
                  Clickable
                </Badge>
                <Badge interactive variant="info">
                  Hover Effect
                </Badge>
                <Badge interactive>Animated</Badge>
              </BadgeGroup>
            </div>
          </div>
        </section>

        {/* Card Preview */}
        <section>
          <h1 className="text-3xl font-bold mb-6">Card Component</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Skill Cards */}
            <Card type="skill" icon={<FiCode />} title="Frontend" interactive>
              <CardBadges
                items={[
                  "React",
                  "TypeScript",
                  "Next.js",
                  "Tailwind CSS",
                  "Vue.js",
                ]}
              />
            </Card>

            <Card type="skill" icon={<FiTool />} title="Backend" interactive>
              <CardBadges
                items={[
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "PostgreSQL",
                  "GraphQL",
                ]}
              />
            </Card>

            {/* Experience Card (full width) */}
            <div className="lg:col-span-2">
              <Card
                type="experience"
                icon={<FiBriefcase />}
                title="Senior Full Stack Developer"
                subtitle="Tech Corp Inc."
                interactive
              >
                <CardMeta items={["2022 - Present", "San Francisco, CA"]} />
                <CardDescription>
                  Leading development of scalable web applications serving
                  millions of users. Architecting microservices and implementing
                  CI/CD pipelines.
                </CardDescription>
                <CardList
                  items={[
                    "Led a team of 5 developers to deliver a major platform redesign",
                    "Reduced API response times by 40% through optimization",
                    "Implemented automated testing, achieving 90% code coverage",
                  ]}
                />
                <CardBadges
                  items={["React", "Node.js", "PostgreSQL", "AWS", "Docker"]}
                />
              </Card>
            </div>

            {/* Project Card Example */}
            <Card
              icon={<FiStar />}
              title="E-Commerce Platform"
              subtitle="Personal Project"
              interactive
            >
              <CardDescription>
                A full-featured e-commerce platform with real-time inventory,
                payment integration, and admin dashboard.
              </CardDescription>
              <BadgeGroup>
                <Badge variant="success">Live</Badge>
                <Badge variant="info">Open Source</Badge>
              </BadgeGroup>
              <div className="mt-3">
                <CardBadges items={["React", "Stripe", "Firebase"]} />
              </div>
            </Card>

            {/* Simple Card */}
            <Card title="Simple Card" subtitle="No icon" interactive>
              <CardDescription>
                This is a simple card without an icon. It still supports all the
                same features like interactive hover effects and animations.
              </CardDescription>
            </Card>

            {/* Card with Dot Badges */}
            <Card icon={<FiCode />} title="Project Status" interactive>
              <BadgeGroup>
                <Badge variant="dot" dotColor="green">
                  Active Development
                </Badge>
                <Badge variant="dot" dotColor="yellow">
                  Beta Testing
                </Badge>
                <Badge variant="dot" dotColor="red">
                  Deprecated
                </Badge>
              </BadgeGroup>
            </Card>

            {/* Card with Mixed Badges */}
            <Card title="Mixed Badge Styles" interactive>
              <BadgeGroup>
                <Badge variant="success">Completed</Badge>
                <Badge variant="warning">In Progress</Badge>
                <Badge variant="outline">Draft</Badge>
                <Badge size="sm">Small</Badge>
                <Badge size="lg">Large</Badge>
              </BadgeGroup>
            </Card>
          </div>
        </section>

        {/* Combined Example */}
        <section>
          <h1 className="text-3xl font-bold mb-6">
            Combined Example - Experience Timeline
          </h1>

          <div className="space-y-6">
            <Card
              type="experience"
              icon={<FiBriefcase />}
              title="Senior Developer"
              subtitle="Tech Company A"
              interactive
            >
              <CardMeta items={["2022 - Present", "Remote"]} />
              <CardDescription>
                Building scalable cloud infrastructure and leading the frontend
                team.
              </CardDescription>
              <CardList
                items={[
                  "Migrated monolith to microservices architecture",
                  "Reduced infrastructure costs by 35%",
                ]}
              />
              <CardBadges items={["React", "AWS", "Kubernetes"]} />
            </Card>

            <Card
              type="experience"
              icon={<FiBriefcase />}
              title="Full Stack Developer"
              subtitle="Startup Inc."
              interactive
            >
              <CardMeta items={["2020 - 2022", "San Francisco, CA"]} />
              <CardDescription>
                Developed MVP and scaled it to 100k+ users in first year.
              </CardDescription>
              <BadgeGroup>
                <Badge variant="success">Successful Exit</Badge>
                <Badge variant="info">Acquired</Badge>
              </BadgeGroup>
              <div className="mt-3">
                <CardBadges items={["Node.js", "MongoDB", "React Native"]} />
              </div>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
