"use client";
// IMPORT ICONS :
import { LiaStarSolid } from "react-icons/lia";
import { MdOutlinePlace } from "react-icons/md";
import { FaBook } from "react-icons/fa";

// IMPORT COMPONENTS :
import HeroImage from "./leftContent/heroImage";
import SocialMedia from "./leftContent/socialMedia";
import GiveStar from "@/components/homepage/giveStar";
import { useContext } from "react";
import { ModalContext } from "@/context/modalContext";

export default function LeftContent() {
  const { isOpen, setIsOpen }: any = useContext(ModalContext);
  return (
    <div className="lg:max-w-[300px] w-full">
      <div className="flex justify-center sm:justify-start">
        <HeroImage />
      </div>
      <h1 className="text-2xl font-bold mt-4">Patrio Bimasuci</h1>
      <h3 className="text-xl text-gray-500">@riobima222</h3>
      <div className="my-2">
        If you interested in collaborating, Please send me a message
      </div>
      <SocialMedia />
      <div className="flex items-center text-sm gap-1 mt-6">
        <LiaStarSolid className="text-xl text-[#FFD700]" />
        <div>50</div>
      </div>
      <button
        type="button"
        className="block w-full py-2 rounded-md border-[1px] border-gray-500 text-sm text-center mt-3 bg-[#212830] hover:bg-[#343c45]"
        onClick={() => setIsOpen(true)}
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
          <span className="text-sm">Indonesia - java</span>
        </div>
      </div>
      {isOpen && <GiveStar />}
    </div>
  );
}
