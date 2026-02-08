"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { certificationsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { SiMicrosoftazure, SiDatabricks } from "react-icons/si";

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * index },
  }),
};

export default function Certifications() {
  const { ref } = useSectionInView("Certifications");

  return (
    <section
      id="certifications"
      ref={ref}
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Certifications</SectionHeading>
      <ul className="flex flex-col gap-4">
        {certificationsData.map((cert, index) => (
          <motion.li
            key={index}
            className="bg-gray-100 border border-black/5 rounded-lg px-5 py-4
            dark:bg-white/10 dark:text-white/80 hover:bg-gray-200 dark:hover:bg-white/20 transition"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4"
            >
              {cert.issuer === "Microsoft" ? (
                <SiMicrosoftazure className="text-3xl flex-shrink-0 text-[#0078D4]" />
              ) : (
                <SiDatabricks className="text-3xl flex-shrink-0 text-[#FF3621]" />
              )}
              <div className="text-left">
                <h3 className="font-semibold">{cert.title}</h3>
                <p className="text-sm text-gray-600 dark:text-white/60">
                  {cert.issuer}
                </p>
              </div>
            </a>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
