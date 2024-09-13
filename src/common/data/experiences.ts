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
      "Led the frontend development of Migration Hub Journeys website from scratch to beta launch under tight deadlines in my first 3 months there, and delivered multiple key features all the way to the full GA launch a year later. The service currently has more than 200 active business clients.",
      "Built a task kanban board feature with drag-and-drop and filtering capabilities, and optimized the page performance by fetching data in parallel and infinite scrolling that loads more data on the fly.",
      "Designed a React context management system for different levels of a page, that elegantly self-populates and cleans up the data for a globally shared slide-out component.",
      "Set up frontend testing framework and alarming for Migration Hub Journeys, and documented concepts like mocking, mounting, and testing components to make testing our React components more consistent and painless.",
      "Mentored junior developers and interns on various frontend tools and concepts through pair programming and diagrams, allowing them to contribute greatly to the project completion.",
      "Full-stack: Developed backend APIs that interact with different AWS service clients, with cross-account role assuming, session credentials caching, and API authorization for different user roles.",
      "Full-stack: Performed on-call periodically for backend and frontend services, and independently root-caused many service latency, availability, and customer issues.",
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
      "Led the frontend development for Redfin’s first SLO Dashboard from scratch, and since release, it has been used by every team at Redfin to visualize and tune their features’ SLOs.",
      "Developed reusable React components and Reflux stores to propagate dynamic SLO data to datatables and graphs, while handling user interactions with the dashboard such as form submission and table filtering.",
      "Utilized asynchronous data calls and request versioning to speed up the SLO dashboard page load by 7x, and drastically improved its usability as more SLOs were getting onboarded.",
      "Implemented a code design pattern for managing nested React forms, in an effort to break down responsibilities of the main React store into multiple single-purpose ones and increase code readability.",
      "Iterated on user/engineer feedbacks after the release to stabilize the platform and enhance its accessibility to all users.",
      "Independently investigated into a missing data issue with the SLO data ingestion pipeline, and the solution permanently fixed 30 problematic SLOs and increased ingestion accuracy for many others.",
      "Developed a data verification job in JavaScript that runs alongside the SLO data ingestion job, as it periodically verifies, reports, and re-ingests if any missing data is detected in the pipeline.",
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
