import { IWork } from "@/types";

export const workExperiences: IWork[] = [
  {
    title: "Frontend Engineer",
    company: "Amazon (AWS)",
    location: "Seattle, WA",
    time: "Aug 2022 - Present",
    logo: "/src/assets/images/companies/aws.jpg",
    descriptions: ["TBD"]

  }, {
    title: "Software Engineer",
    company: "Redfin",
    location: "Seattle, WA",
    time: "Aug 2020 - Aug 2022",
    logo: "/src/assets/images/companies/redfin.jpg",
    descriptions: [
      "SLO (Service Level Objective) Dashboard",
      "❖ Led the frontend development for Redfin’s first SLO Dashboard from scratch, and since release, it has been used by every team at Redfin to visualize and tune their features’ SLOs.",
      "❖ Developed reusable React components and Reflux stores to propagate dynamic SLO data to datatables and graphs, while handling user interactions with the dashboard such as form submission and table filtering.",
      "❖ Utilized asynchronous data calls and request versioning to speed up the SLO dashboard page load by 7x, and drastically improved its usability as more SLOs were getting onboarded.",
      "❖ Implemented a code design pattern for managing nested React forms, in an effort to break down responsibilities of the main React store into multiple single-purpose ones and increase code readability.",
      "❖ Iterated on user/engineer feedbacks after the release to stabilize the platform and enhance its accessibility to all users.",
      "SLO Ingestion Pipeline",
      "❖ Independently investigated into a missing data issue with the SLO data ingestion pipeline, and the solution permanently fixed 30 problematic SLOs and increased ingestion accuracy for many others.",
      "❖ Developed a data verification job in JavaScript that runs alongside the SLO data ingestion job, as it periodically verifies, reports, and re-ingests if any missing data is detected in the pipeline.",
      "Elasticsearch (Logging Platform) Disk Quota Program",
      "❖ Designed a Python program that automatically controls disk usage for each logging service, saving hours of oncall time each week trying to prevent machines from running out of disk.",
      "❖ Developed Python scripts to aggregate disk usage data from Elasticsearch API, auto-delete log indices based on the quota configuration, and report important metrics to monitor the disk health for each service and the logging platform."
    ]
  }, {
    title: "Software Engineer Intern",
    company: "Redfin",
    location: "Seattle, WA",
    time: "Jun – Sep 2019",
    logo: "/src/assets/images/companies/redfin.jpg",
    descriptions: [
      "❖ Built a SSH-certificate system that replaced hardcoded password with a secure SSH access to test machines, including various levels of access restriction and access log history.",
      "❖ Developed scripts for automating managerial approval and access granting process, through calling Slack APIs and auto-generating SSH certificates."
    ]
  }, {
    title: "Software Engineer Intern",
    company: "ProDIGIQ",
    location: "Thousand Oaks, CA",
    time: "Jun – Sep 2018",
    logo: "/src/assets/images/companies/prodigiq.jpg",
    descriptions: [
      "❖ Developed a web tool that allows engineers to visually draw polygon markups on airport maps instead of manually crunching latlng coordinates into the database."
    ]
  }, {
    title: "Software Engineer Intern",
    company: "Lacework",
    location: "Mountain View, CA",
    time: "Jul – Sep 2017",
    logo: "/src/assets/images/companies/lacework.jpg",
    descriptions: [
      "❖ Built the first testing framework for Lacework engineers to automatically test and validate backend API calls against the db schema, all through a simple webpage that allows engineers to run tests with customizations on different test scopes, parameters, and testing frequency."
    ]
  }
];
