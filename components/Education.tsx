"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { EducationData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { LuMapPin, LuCalendar } from "react-icons/lu";
import geuLogo from "@/public/geu-logo.png";

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * index },
  }),
};

export default function Education() {
  const { ref } = useSectionInView("Education");

  return (
    <section id="education" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40 max-w-[45rem]">
      <SectionHeading>My Education</SectionHeading>
      <ul className="flex flex-col gap-4">
        {EducationData.map((item, index) => (
          <motion.li
            key={index}
            className="bg-gray-100 border border-black/5 rounded-lg px-6 py-5
            dark:bg-white/10 dark:text-white/80"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            <div className="flex items-start gap-4">
              <div className="bg-white dark:bg-white/15 p-2 rounded-lg mt-1 flex-shrink-0">
                <Image
                  src={geuLogo}
                  alt="Graphic Era University"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="font-medium text-gray-800 dark:text-white/70 mt-1">
                  {item.institution}
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-sm text-gray-600 dark:text-white/60">
                  <span className="flex items-center gap-1">
                    <LuMapPin className="text-sm" /> {item.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <LuCalendar className="text-sm" /> {item.date}
                  </span>
                  {"CGPA" in item && (
                    <span className="font-semibold text-gray-800 dark:text-white/80">
                      CGPA: {item.CGPA}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-gray-700 dark:text-white/75">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
