import HeaderStars from "@/components/stars/header";
import { fetchingStars } from "@/utils/fetchingStars";
import Image from "next/image";
import Link from "next/link";

// ICONS:
import { MdOutlinePlace } from "react-icons/md";

export default async function StarsPage({
  params,
}: {
  params: Promise<{ repo: string }>;
}) {
  const repo = (await params).repo;
  const stargazer = await fetchingStars(repo);
  const completeStargazer = async () => {
    const dataStargazer: any[] = await Promise.all(
      stargazer.map(async (stargazer: any) => {
        const response = await fetch(stargazer.url);
        const data = await response.json();
        return data;
      })
    );
    return dataStargazer;
  };

  // Menunggu semua data selesai di-fetch
  const dataStargazer = await completeStargazer();
  return (
    <div className="dark:text-[#f0f6fc] min-h-screen dark:bg-[#0d1117]">
      <HeaderStars repo={repo} />
      <div className="max-w-[75em] mx-auto px-4">
        <h1 className="semi-bold text-2xl mt-8 mb-3">Stargazers</h1>
        <div className="border-b-[.5px] border-gray-700" />

        {/* KATEGORI */}
        <div className="border-b-[.5px] border-gray-700 flex">
          <div className="flex gap-2 items-center justify-center relative top-[1px] rounded-t-md mt-3 border-t-[.5px] border-l-[.5px] border-r-[.5px] border-gray-500 py-2 px-4 dark:bg-[#0d1117]">
            All
            <div className="rounded-full text-white bg-[#1d2329] h-[20px] w-[20px] text-sm flex items-center justify-center">
              {dataStargazer.length}
            </div>
          </div>
        </div>

        {/* Data Stargazer */}
        <div className="max-w-[25em] mt-3 pb-5 border-b-[.5px] border-gray-700">
          {dataStargazer &&
            dataStargazer.length > 0 &&
            dataStargazer.map((data) => (
              <div key={data.id} className="flex gap-4 items-center">
                <Image
                  src={data.avatar_url}
                  alt={`avatar of ${data.login}`}
                  width={50}
                  height={50}
                  className={`rounded-full ${data.login}`}
                />
                <div className="flex flex-col gap-1">
                  <Link
                    href={`https://github.com/${data.login}`}
                    className="text-[#4394f7] hover:underline font-semibold"
                  >
                    {data.login}
                  </Link>
                  <div className="flex gap-2 items-center">
                    <MdOutlinePlace className="text-xl text-[#9198a1]" />
                    <span>
                      {data.location.length > 32
                        ? data.location.slice(0, 32) + "..."
                        : data.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
