import HeaderStars from "@/components/stars/header";

export default async function StarsPage({
  params,
}: {
  params: Promise<{ repo: string }>;
}) {
  const repo = (await params).repo;
  return (
    <div className="text-[#f0f6fc] min-h-screen bg-[#0d1117]">
      <HeaderStars repo={repo} />
    </div>
  );
}
