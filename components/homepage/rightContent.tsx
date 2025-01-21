import Link from "next/link";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

// IMPORT COMPONENTS :
import StarAnimation from "./rightContent/starAnimation";
import RocketAnimation from "./rightContent/rocketAnimation";
import GreetingAnimation from "./rightContent/greetingAnimation";
import PinElement from "./rightContent/pinElement";
import PinnedELement from "./rightContent/pinnedElement";
import IconCloudWrapper from "./rightContent/iconCloudWrapper";

export default function RightContent() {
  return (
    <div>
      <div className="max-w-[64em] w-full border-[.5px] border-gray-700 rounded-md md:p-10 p-4">
        <h5 className={`${robotoMono.className} text-sm`}>
          Patrio Bimasuci / README.md
        </h5>
        <div className="flex items-center gap-2 text-4xl mt-6">
          <div className="w-[1.5em] h-[1.5em] flex justify-center items-center">
            <GreetingAnimation />
          </div>
          <h2 className="italic text-lg sm:text-2xl">
            Hi, Im <span className="font-bold">Patrio Bimasuci</span>
          </h2>
        </div>
        <hr className="mt-3 mb-2 border-gray-700" />
        <p className="px-4">
          I'm a <strong>Web Developer</strong>, love creating cool and
          responsive web apps, i have got about 2.5 years of experience, and I'm
          always excited to learn and grow my skill in the tech world
        </p>
        <div className="flex items-center mt-12 text-3xl gap-3 relative">
          <div className="w-[1.5em] h-[1.5em] flex justify-center items-center">
            <RocketAnimation />
          </div>
          <h2 className="font-bold sm:text-2xl text-lg">Technologies :</h2>
        </div>
        <div className="flex justify-center">
        <IconCloudWrapper />
        </div>
        <div className="flex items-center text-3xl gap-3 relative">
          <div className="w-[1.5em] h-[1.5em] flex justify-center items-center">
            <StarAnimation />
          </div>
          <h2 className="font-bold sm:text-2xl text-lg">Highlight Projects :</h2>
        </div>
        <PinElement />
        <div className="mt-14 flex justify-center">
          <Link
            href={"https://github.com/riobima222?tab=repositories"}
            className="hover:underline no-underline hover:text-gray-400"
          >
            See all projects
          </Link>
        </div>
      </div>
      <h4 className="mt-8 font-sm">Pinned</h4>
      <PinnedELement />
    </div>
  );
}
