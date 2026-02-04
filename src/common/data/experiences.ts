import { IExperience, IWorkExperience } from "@/types";

export const ucsbEducationExperience: IExperience = {
  id: "ucsb",
  title: "Student",
  organization: "UC Santa Barbara",
  time: "2020",
  descriptions: ["Graduated in 2020 with Computer Science B.S."],
};

export const workExperiences: IWorkExperience[] = [
  {
    id: "awsFEE2",
    title: "Frontend Engineer II",
    organization: "AWS",
    location: "Seattle, WA",
    time: "Aug 2022 - Present",
    logo: "/assets/images/companies/aws.jpg",
    descriptions: [
      "Service - AWS Migration Hub Journeys",
      "Led front-end development of Migration Hub Journeys from scratch to beta launch within my first three months, and delivered multiple core features for the General Availability launch. Currently supporting 200 active internal and external customers.",
      "Built a kanban board UI in React with drag-and-drop and 5 filters, and optimized performance using parallel API calls and infinite scrolling to support 5,000+ tasks and reduced page latency from minutes to seconds.",
      "Designed a dynamic context management system that populates data on the global slide-out component to enable a questionnaire workflow specific to each page, tab, and sub-component.",
      "Established front-end testing infrastructure for MHJ from scratch, and documented best practices like React test mocking, component mounting, and their use cases to empower other developers.",
      "Mentored junior developers and interns through pair programming and diagrams, allowing them to grow their expertise in frontend and contribute greatly to the projects.",
      "Full-stack: Developed backend APIs integrating with different AWS service clients, including cross-account role assumption, session credentials caching, and role-based API authorization.",
      "Service - AWS AI Agentic VMWare Migration",
      "Full-stack: Developed one of the four migration job plans for user to rehost their on-premise servers to AWS using AI agentic chat, coordinating a mix of migration automation and human-in-the-loop tasks end to end.",
      "Service - AWS Disaster Recovery Service",
      "Built the complete front-end integration testing infrastructure in under 2 months, leading to pipeline full CI/CD for the first time in 30 different regions since the product launched 4 years ago.",
      "Integrated Cline and GenAI into daily development workflows, improving efficiency all around and delivering integration tests in 50% of the estimated time on average.",

    ],
    isInternship: false,
  },
  {
    id: "redfinSDE1",
    title: "Software Engineer",
    organization: "Redfin",
    location: "Seattle, WA",
    time: "Aug 2020 - Aug 2022",
    logo: "/assets/images/companies/redfin.jpg",
    descriptions: [
      "Led front-end development for Redfin’s first Service Level Objective (SLO) Dashboard from scratch, and it has been used by every team at Redfin to visualize and tune their features’ performance goals.",
      "Developed reusable React components and Reflux stores to propagate dynamic SLO data to tables and graphs, supporting user interactions such as form submission and table filtering.",
      "Utilized asynchronous data calls and request versioning to speed up the SLO dashboard page load by 7x, and drastically improved its usability as more SLOs were getting onboarded.",
      "Operations: Designed a Python program that automatically controls disk usage for each logging service, saving hours of oncall time each week trying to prevent machines from running out of disk.",
    ],
    isInternship: false,
  },
  {
    id: "redfinIntern",
    title: "Software Engineer Intern",
    organization: "Redfin",
    location: "Seattle, WA",
    time: "Jun – Sep 2019",
    logo: "/assets/images/companies/redfin.jpg",
    descriptions: [
      "Built a SSH-certificate system that replaced hardcoded password with a secure SSH access to test machines, including various levels of access restriction and access log history.",
      "Developed scripts for automating managerial approval and access granting process, through calling Slack APIs and auto-generating SSH certificates.",
    ],
    isInternship: true,
  },
  {
    id: "prodigiqIntern",
    title: "Software Engineer Intern",
    organization: "ProDIGIQ",
    location: "Thousand Oaks, CA",
    time: "Jun – Sep 2018",
    logo: "/assets/images/companies/prodigiq.jpg",
    descriptions: [
      "Developed a web tool that allows engineers to visually draw polygon markups on airport maps instead of manually crunching latlng coordinates into the database.",
    ],
    isInternship: true,
  },
  {
    id: "laceworkIntern",
    title: "Software Engineer Intern",
    organization: "Lacework",
    location: "Mountain View, CA",
    time: "Jul – Sep 2017",
    logo: "/assets/images/companies/lacework.jpg",
    descriptions: [
      "Built the first testing framework for Lacework engineers to automatically test and validate backend API calls against the db schema, all through a simple webpage that allows engineers to run tests with customizations on different test scopes, parameters, and testing frequency.",
    ],
    isInternship: true,
  },
];
