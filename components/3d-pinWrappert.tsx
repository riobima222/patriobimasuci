"use client";

import Image from "next/image";
import { PinContainer } from "./ui/3d-pin";

export default function PinWrapper({
  title,
  href,
  contentTitle,
  contentDesc,
  img,
}: {
  title: string;
  href: string;
  contentTitle: string;
  contentDesc: React.ReactNode;
  img: string;
}) {
  return (
    <div className="relative z-[0] h-[30rem] md:w-[20em] w-[13.5em] flex items-center justify-center">
      <PinContainer title={title} href={href}>
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 md:w-[18rem] w-[13.5rem]">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-3xl text-slate-100">
            {contentTitle}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <div>{contentDesc}</div>
          </div>
          <Image
            src={img}
            alt="projects-image"
            width={400}
            height={400}
            className="mt-6"
          />
        </div>
      </PinContainer>
    </div>
  );
}
