"use client";

import Image from "next/image";
import React from "react";
import image from "@/public/profile.png";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/activeSectionContext";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section
      ref={ref}
      className="mb-28 max-w-[60rem] text-center sm:mb-0 scroll-mt-[100rem]"
      id="home"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={image}
              alt="Aashish Profile"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] border-white 
                object-cover shadow-xl"
            />
            <motion.span
              className="text-4xl absolute bottom-0 right-0"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
              }}
            >
              👋
            </motion.span>
          </motion.div>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 font-small text-m !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello there! I'm Aashish Kushwaha</span>, a{" "}
        <span className="font-bold">Software Engineer</span> with expertise in
        Python-based data engineering, backend APIs, and LLM-powered automation.
        Experienced in building ETL pipelines, AI research agents, and ML
        monitoring platforms with scalable and optimized PySpark workflows.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row gap-5 px-4 text-lg font-medium items-center justify-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="bg-gray-900 px-7 py-6 text-white flex items-center gap-2 rounded-full
           text-2xl cursor-pointer outline-none focus:scale-110 hover:scale-110 hover:bg-gray-900
           active:scale-105 transition group"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          className="bg-white text-xl px-7 py-6 flex items-center gap-2 rounded-full cursor-pointer outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950
           active:scale-105 transition group dark:bg-white/10 dark:text-white/60"
          href="/Resume.pdf"
          download
        >
          Download Resume{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          className="bg-white p-4 text-xl text-gray-700 flex items-center gap-2 rounded-full cursor-pointer outline-none focus:scale-110 hover:scale-110 hover:bg-white
           active:scale-105 transition group dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/aashish-kushwaha-731163232/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full
          text-[1.35rem] cursor-pointer outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950
          active:scale-105 transition group dark:bg-white/10 dark:text-white/60"
          href="https://github.com/Aashish-kushwaha"
          target="_blank"
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
}
