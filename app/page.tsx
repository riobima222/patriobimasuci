"use client";
import Image from "next/image";
import { Roboto_Mono } from "next/font/google";

// framer motion
import { motion, useInView } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import IconCloudWrapper from "@/components/iconCloudWrapper";
import PinWrapper from "@/components/3d-pinWrappert";
import Link from "next/link";

// ICONS :
import { FaInstagram } from "react-icons/fa";
import { LiaStarSolid } from "react-icons/lia";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";
import { MdOutlinePlace } from "react-icons/md";
import { FaBook } from "react-icons/fa";

const robotoMono = Roboto_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  const memoizedIconCloud = useMemo(() => <IconCloudWrapper />, []);
  const starRef = useRef(null);
  const roketRef = useRef(null);
  const isInView = useInView(starRef, {
    once: false,
    margin: "-100px",
  });
  const isInView2 = useInView(roketRef, {
    once: false,
    margin: "-100px",
  });

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
      <div className="flex lg:flex-row flex-col gap-12 items-start">
        {/* LEFT CONTENT */}
        <div className="lg:max-w-[300px] w-full">
          <div className="flex justify-center sm:justify-start">
            <div className="border-[1.2px] max-w-[17em] border-gray-500 rounded-full overflow-hidden">
              <Image
                src={"/images/profile.jpg"}
                alt="profile-image"
                width={500}
                height={500}
                className="w-full h-full"
              />
            </div>
          </div>
          <h1 className="text-2xl font-bold mt-4">Patrio Bimasuci</h1>
          <h3 className="text-xl text-gray-500">@riobima222</h3>
          <div className="my-2">
            If you interested in collaborating, Please send me a message
          </div>
          <div className="flex justify-center gap-6 my-3">
            <Link
              href={"https://wa.me/085745068643"}
              target="_blank"
              className="block"
            >
              <FaWhatsapp className="text-2xl " />
            </Link>
            <Link
              href={
                "mailto:patriobimasuci354@gmail.com?subject=Ask%20about%20collaborate&body=Hello,%20I%20want%20to%20Collaborate%20with%20you"
              }
              className="block"
              target="_blank"
            >
              <MdOutlineAttachEmail className="text-2xl " />
            </Link>
            <Link
              href={"https://www.instagram.com/riobima222"}
              className="block"
              target="_blank"
            >
              <FaInstagram className="text-2xl " />
            </Link>
            <Link
              href={"https://github.com/riobima222"}
              target="_blank"
              className="block"
            >
              <FaGithub className="text-2xl " />
            </Link>
          </div>
          <div className="flex items-center text-sm gap-3 mt-6">
            <div className="flex items-center gap-2">
              <LiaStarSolid className="text-xl text-[#FFD700]" />
              <div>
                50 <span className="text-gray-500">Stars</span>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="block w-full py-2 rounded-md border-[1px] border-gray-500 text-sm text-center mt-3 bg-[#212830] hover:bg-[#343c45]"
          >
            Give a Star
          </button>
          <div className="mt-3 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <FaBook className="text-sm" />
              <span className="text-sm">University Of Islam - PPWB kediri</span>
            </div>
            <div className="flex items-center gap-2">
              <MdOutlinePlace className="text-sm" />
              <span className="text-sm">indonesia - java</span>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="max-w-[64em] w-full border-[.5px] border-gray-700 rounded-md p-10">
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
                duration: 2.5,
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
          <div className="flex items-center mt-12 text-3xl gap-3 relative">
            <motion.div
              ref={roketRef}
              animate={{
                rotate: isInView2 && [0, 100],
                x: isInView2 && [0, 250],
                y: isInView2 && [0, -20, -40, -30, -10, 0],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{ position: "relative" }}
            >
              🚀
            </motion.div>
            <h2 className="font-bold">Technologies :</h2>
          </div>
          {memoizedIconCloud}
          <div className="flex items-center text-3xl gap-3 relative">
            <motion.div
              ref={starRef}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: isInView && [0.8, 1.2, 0.8],
                opacity: isInView && [0.7, 1, 0.7],
                rotate: isInView && [0, 360, 0],
                y: isInView && [0, -20, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.3,
                rotate: 180,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.9 }}
              style={{
                fontSize: "3rem",
                cursor: "pointer",
                display: "inline-block",
              }}
            >
              🌟
            </motion.div>
            <h2 className="font-bold">Highlight Projects :</h2>
          </div>
          <div className="flex flex-wrap gap-10 justify-center items-center mt-6">
            <PinWrapper
              title="See application"
              href="https://sigma-todolist.vercel.app"
              contentTitle="📝 Sigma TodoList"
              contentDesc={
                <>
                  <p className="text-slate-300">
                    Aplikasi TodoList sederhana namun lengkap. Pengguna dapat :
                  </p>
                  <ul className="mt-2 list-disc">
                    <li> Mendaftar dan login untuk akses personal.</li>
                    <li>
                      {" "}
                      Menambahkan task dan menandai task yang sudah selesai.
                    </li>
                    <li>
                      {" "}
                      Task yang selesai akan dipindahkan ke daftar ceklist.
                    </li>
                    <li> Task yang sudah tidak digunakan bisa dihapus.</li>
                  </ul>
                </>
              }
              img="https://i.postimg.cc/wjsbCg9x/Sigma-Todo-List.jpg"
            ></PinWrapper>
            <PinWrapper
              title="See application"
              href="https://erchat-chatting.vercel.app"
              contentTitle="🗨️ ERChat - Chatting App"
              contentDesc={
                <>
                  <p className="text-slate-300">
                    Aplikasi chatting real-time modern dengan fitur :
                  </p>
                  <ul className="mt-2 list-disc">
                    <li>
                      Login dan register menggunakan Firebase Authentication.
                    </li>
                    <li>
                      {" "}
                      Pesan dikirim dan diterima secara instan tanpa reload.
                    </li>
                    <li> Desain responsif dengan Tailwind CSS.</li>
                  </ul>
                </>
              }
              img="https://i.postimg.cc/wMTGZNjn/Erchat.jpg"
            ></PinWrapper>
          </div>
          <div className="mt-14 flex justify-center">
            <Link
              href={"https://github.com/riobima222?tab=repositories"}
              className="hover:underline no-underline hover:text-gray-400"
            >
              See all projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
