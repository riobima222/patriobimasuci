"use client";

import { IconCloud } from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "express",
  "prisma",
  "postgresql",
  "mysql",
  "nextjs",
  "firebase",
  "nginx",
  "vercel",
  "git",
  "github",
  "visualstudiocode",
  "figma",
  "zod",
  "supabase",
  "next-auth",
  "nodejs",
];

export function IconCloudDemo() {
  return (
    <div className="relative flex size-full w-full items-center justify-center overflow-hidden rounded-lg px-20 pb-20 pt-8">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
