import LeftContent from "@/components/homepage/leftContent";
import RightContent from "@/components/homepage/rightContent";

export default function Home() {
  return (
    <div className="bg-[#0d1117] min-h-screen md:p-10 p-3 text-gray-200">
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
