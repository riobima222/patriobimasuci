import Link from "next/link";

export default function HeaderStars({ repo }: { repo: string }) {
  return (
    <div className="min-h-[5em] border-b-[.5px] border-gray-700 dark:bg-[#01040a] flex items-center">
      <div className="ps-5 flex gap-4 items-center text-sm">
        <Link href={`/`} className="hover:bg-[#161c26] hover:text-white px-2 py-2 rounded-md">
          riobima222
        </Link>
        <span>/</span>
        <Link
          href={`https://github.com/riobima222/${repo}`}
          className="hover:bg-[#161c26] hover:text-white px-2 py-2 rounded-md font-semibold"
          target="_blank"
        >
          {repo}
        </Link>
      </div>
    </div>
  );
}
