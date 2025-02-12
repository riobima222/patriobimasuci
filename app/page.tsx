import LeftContent from "@/components/homepage/leftContent";
import RightContent from "@/components/homepage/rightContent";


export default async function Home() {
  return (
    <div className="dark:bg-[#0d1117] dark:text-gray-200 min-h-screen md:p-10 p-3">
      {/* HERO SECTION */}
      <div className="flex lg:flex-row flex-col gap-12 items-start">
        {/* LEFT CONTENT */}
        <LeftContent />
        {/* RIGHT CONTENT */}
        <RightContent />
      </div>
    </div>
  );
}
