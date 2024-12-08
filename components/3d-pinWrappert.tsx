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
    <div className="h-[30rem] w-[20em] flex items-center justify-center">
      <PinContainer title={title} href={href}>
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[18rem]">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-3xl text-base text-slate-100">
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
