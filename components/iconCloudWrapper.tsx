import { useEffect, useState } from "react";
import { IconCloudDemo } from "@/components/loader";

const IconCloudWrapper = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Hanya aktif setelah komponen di-mount di sisi client
  }, []);

  if (!isClient) return <>Wait...</>; // mengunggu

  return <IconCloudDemo />;
};

export default IconCloudWrapper;
