"use client";

import { useEffect, useState } from "react";
import IconCloud from "@/components/ui/icon-cloud";

const slugs = [
  "html5",
  "css3",
  "javascript",
  "typescript",
  "nodedotjs",
  "react",
  "nextdotjs",
  "firebase",
  "supabase",
  "zod",
  "express",
  "prisma",
  "postgresql",
  "mysql",
  "vercel",
  "git",
  "visualstudiocode",
  "nextauth",
  "figma",
];

export default function IconCloudWrapper() {
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  if (!client)
    return (
      <div className="min-h-[30em] w-full flex items-center justify-center">
        Load...
      </div>
    );

  return (
    <div className="relative flex justify-center size-full max-w-lg items-center justify-center overflow-hidden rounded-lg bg-background px-20 pb-20 pt-8 ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
