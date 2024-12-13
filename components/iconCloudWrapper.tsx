"use client"
import { useEffect, useState } from "react";
import { IconCloudDemo } from "@/components/loader";

const IconCloudWrapper = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Hanya aktif setelah komponen di-mount di sisi client
  }, []);

  if (!isClient) {
    return (
      <div className="relative h-[650px] sm:h-[700px] flex size-full text-gray-300 w-full items-center justify-center overflow-hidden rounded-lg px-20 pb-20 pt-12">
        Load...
      </div>
    );
  }

  return <IconCloudDemo />;
};

export default IconCloudWrapper;
