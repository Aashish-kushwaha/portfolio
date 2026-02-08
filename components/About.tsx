"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-5 text-xl">
        I am a results-driven{" "}
        <span className="font-bold">Software Engineer</span> with
        expertise in{" "}
        <span className="font-bold">
          Python-based data engineering, backend APIs (FastAPI, Flask), and
          LLM-powered automation
        </span>
        . I hold a B.Tech in Computer Science from Graphic Era University and
        have hands-on experience building scalable ETL pipelines, AI research
        agents, and ML monitoring platforms.
      </p>
      <p className="text-xl">
        I am passionate about leveraging{" "}
        <span className="font-bold">AI and data engineering</span> to solve
        complex problems. I hold certifications in Azure Fundamentals, Azure
        Data Fundamentals, and Databricks Data Engineer Associate. Feel free to
        explore my portfolio to see the projects and systems I have built.
      </p>
    </motion.section>
  );
}
