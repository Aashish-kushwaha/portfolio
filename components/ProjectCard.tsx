"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { projectsData } from "@/lib/data";

type ProjectProps = (typeof projectsData)[number];

export default function ProjectCard({
  title,
  description,
  tags,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        opacity: opacityProgress,
        scale: scaleProgress,
      }}
      className="sm:mb-8 last:mb-0 mb-3 group"
    >
      <section
        className="bg-gray-100 max-w-[45rem] border border-black/5
        relative overflow-hidden sm:pr-8 rounded-lg hover:bg-gray-200 transition
        dark:bg-white/10 dark:hover:bg-white/20"
      >
        <div
          className="px-4 pt-4 pb-7 sm:pl-10 sm:pr-10 sm:pt-10
        flex flex-col h-full"
        >
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-3 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase
              tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </motion.div>
  );
}
