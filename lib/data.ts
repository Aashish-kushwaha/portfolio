import React from "react";
import { LuGraduationCap } from "react-icons/lu";
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Certifications",
    hash: "#certifications",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const EducationData = [
  {
    title: "Bachelor Of Technology",
    institution: "Graphic Era University",
    location: "Dehradun, Uttarakhand",
    CGPA: "8.64",
    description:
      "Completed B.Tech in Computer Science. Coursework includes Data Structures & Algorithms, OOP, Data Engineering, and DBMS.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 – 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Web-Based ML Model Monitoring & Reliability Framework",
    description:
      "Conducted faculty-guided research on ML model reliability, data drift, and performance degradation in deployed systems. Designed and implemented a Flask-based full-stack platform for model inference, versioning, logging, and statistical drift detection, containerized using Docker.",
    tags: ["Python", "Flask", "Docker", "ML", "Data Drift"],
  },
  {
    title: "Autonomous Deep Research Agent",
    description:
      "Built a Python-based multi-agent LLM system using LangGraph to autonomously ingest, analyze, and synthesize large-scale technical and academic data with iterative reasoning. Designed cyclic agent orchestration with memory and reflection loops, enabling structured research outputs while reducing hallucinations.",
    tags: ["Python", "LangGraph", "LLM", "Multi-Agent", "AI"],
  },
  {
    title: "ML-Powered Data Quality & Lineage",
    description:
      "Built an interactive deep learning visualization system to inspect internal training behavior, including gradient flow, activation distributions, and convergence across CNNs, LSTMs, and Transformers. Implemented custom forward/backward pass tracking and real-time dashboards using PyTorch/TensorFlow.",
    tags: ["Python", "PyTorch", "TensorFlow", "Deep Learning", "Visualization"],
  },
] as const;

export const certificationsData = [
  {
    title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    url: "https://learn.microsoft.com/en-in/users/aashishkushwaha-7058/credentials/deb41011023e4dd3",
  },
  {
    title: "Microsoft Certified: Azure Data Fundamentals (DP-900)",
    issuer: "Microsoft",
    url: "https://learn.microsoft.com/en-us/users/AashishKushwaha-7058/credentials/12303536A8DEE78B",
  },
  {
    title: "Databricks Certified Data Engineer Associate",
    issuer: "Databricks",
    url: "https://credentials.databricks.com/517b41f2-a06c-41ff-9a0d-7b4e46d0075d",
  },
] as const;

export const skillsData = [
  "Python",
  "SQL",
  "Java",
  "PySpark",
  "Databricks",
  "FastAPI",
  "Flask",
  "REST APIs",
  "scikit-learn",
  "NumPy",
  "Pandas",
  "Git",
  "Jupyter",
  "Azure",
  "Azure Data Factory",
  "ADLS Gen2",
  "Microsoft Fabric",
  "MySQL",
  "Oracle",
  "Data Engineering",
  "Machine Learning",
  "LLM",
] as const;
