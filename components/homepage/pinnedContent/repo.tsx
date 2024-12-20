import Link from "next/link";
import clsx from "clsx";

// ICONS :
import { TbBook2 } from "react-icons/tb";
import { FaRegStar } from "react-icons/fa";

export default function Repository({
  stars,
  title,
  tech,
  children,
  forkRef,
  fork,
  isFork,
  starsLink,
  titleLink
}: {
  stars: number;
  title: string;
  tech: string;
  children: React.ReactNode;
  forkRef?: string;
  fork?: string;
  isFork?: boolean;
  starsLink: string;
  titleLink: string;
}) {
  const classname = clsx("block w-3 h-3 rounded-full", {
    "bg-[#327ac7]": tech === "typescript",
    "bg-[#f2e05a]": tech === "javascript",
    "bg-[#663299]": tech === "css",
  });
  return (
    <div className="flex flex-col gap-3 border-[.5px] border-gray-700 rounded-md p-4">
      <div className="flex gap-1 justify-start items-center">
        <TbBook2 className="text-xl text-[#9198a1] flex-shrink-0 w-auto h-auto" />
        <Link
          href={`https://github.com/riobima222/${titleLink}`}
          target="_blank"
          className="text-[#4189e8] hover:underline font-semibold"
        >
          {title}
        </Link>
        <span className="block px-2 text-[#9198a1] text-sm border-[1px] border-gray-700 rounded-full">
          Public
        </span>
      </div>
      {isFork && (
        <div className="text-[#9198a1] text-xs">
          Forked from{" "}
          <Link
            href={forkRef || "/"}
            target="_blank"
            className="underline hover:text-[#4189e8]"
          >
            {fork}
          </Link>
        </div>
      )}
      <div>
        <p className="text-xs text-[#9198a1]">{children}</p>
      </div>
      <div className="flex gap-3 text-[#9198a1]">
        <div className="flex items-center justify-center gap-1">
          <span className={classname} />
          <p className="text-sm">{tech}</p>
        </div>
        <Link
          href={`/stars/${starsLink}`}
          className="flex items-center gap-1 hover:cursor-pointer hover:text-[#4189e8]"
        >
          <FaRegStar />
          <span>{stars}</span>
        </Link>
      </div>
    </div>
  );
}
