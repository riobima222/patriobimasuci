"use client";
import Image from "next/image";
import { Roboto_Mono } from "next/font/google";

// framer motion
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import IconCloudWrapper from "@/components/iconCloudWrapper";

const robotoMono = Roboto_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  const memoizedIconCloud = useMemo(() => <IconCloudWrapper />, []);

  const text = "Patrio Bimasuci / README.md";
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#0d1117] min-h-screen p-10 text-gray-200">
      {/* HERO SECTION */}
      <div className="flex gap-12 items-start">
        {/* LEFT CONTENT */}
        <div className="max-w-[240px] lg:max-w-[300px] w-full border-[1px] border-gray-500 rounded-full overflow-hidden">
          <Image
            src={"/images/profile.jpg"}
            alt="profile-image"
            width={500}
            height={500}
            className="w-full h-full"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="border-[.5px] border-gray-700 rounded-md p-10 w-full">
          <motion.div
            key={key}
            className={`${robotoMono.className} text-sm tracking-widest flex gap-[1px]`}
            variants={{
              hidden: { opacity: 1 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.05,
                },
              },
              exit: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.05,
                  staggerDirection: -1,
                },
              },
            }}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {text.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  visible: { opacity: 1, x: 0 },
                  exit: { opacity: 0, x: 10 },
                }}
              >
                {char === " " ? "\u00A0" : char}{" "}
              </motion.span>
            ))}
          </motion.div>
          <div className="flex items-center gap-2 text-4xl mt-6">
            <motion.div
              className="text-5xl"
              style={{ transformOrigin: "bottom right" }}
              animate={{
                rotate: [0, 20, -20, 20, 0],
              }}
              transition={{
                duration: 0.9,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              👋
            </motion.div>
            <h2 className="italic">
              Hi, I'm <span className="font-bold">Patrio Bimasuci</span>
            </h2>
          </div>
          <hr className="mt-3 mb-2 border-gray-700" />
          <p className="px-4">
            I'm a <strong>Web Developer</strong>, and i love creating cool and
            responsive web apps, i've got about 2.5 years of experience, and I'm
            always excited to learn and grow my skill in the tech world
          </p>
          {memoizedIconCloud}
        </div>
      </div>
    </div>
  );
}
