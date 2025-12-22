import { FiCode, FiServer, FiTool, FiSmartphone, FiDatabase, FiCloud } from "react-icons/fi";

export const SKILLS = {
    frontend: ["React", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
    backend: ["JavaScript", "Node.js", "Python", "Java"],
    database: ["MongoDB", "Redis", "MySQL", "SQL", "PostgreSQL"],
    cloud_devops: ["CI/CD", "AWS"],
    tools: ["Git", "GitHub", "Jira", "Postman", "Slack", "Trello"],
    mobile: ["React Native", "Flutter", "iOS", "Android"],
};

export const SKILLCATEGORIES = [
    // FiCode, FiServer, FiTool, FiSmartphone
    {
        icon: FiCode,
        title: "Frontend",
        skills: SKILLS.frontend,
        color: "text-primary",
    },
    {
        icon: FiServer,
        title: "Backend",
        skills: SKILLS.backend,
        color: "text-primary",
    },
    {
        icon: FiDatabase,
        title: "Database",
        skills: SKILLS.database,
        color: "text-primary",
    },
    {
        icon: FiCloud,
        title: "Cloud & DevOps",
        skills: SKILLS.cloud_devops,
        color: "text-primary",
    },
    {
        icon: FiTool,
        title: "Tools",
        skills: SKILLS.tools,
        color: "text-primary",
    },
    // {
    //     icon: FiSmartphone,
    //     title: "Mobile",
    //     skills: SKILLS.mobile,
    //     color: "text-primary",
    // },
];