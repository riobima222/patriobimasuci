"use client";

import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import {
  Cloud,
  fetchSimpleIcons,
  ICloud,
  renderSimpleIcon,
  SimpleIcon,
} from "react-icon-cloud";

export const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
    // dragControl: false,
  },
};

export const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
  const bgHex = theme === "light" ? "#242d3b" : "#242d3b";
  const fallbackHex = theme === "light" ? "#6e6e73" : "#242d3b";
  const minContrastRatio = theme === "dark" ? 2 : 1.5;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 60,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: any) => e.preventDefault(),
    },
  });
};

export type DynamicCloudProps = {
  iconSlugs: string[];
};

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;

export function IconCloud({ iconSlugs }: DynamicCloudProps) {
  const [data, setData] = useState<IconData | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;

    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, theme || "dark")
    );
  }, [data, theme]);

  return (
    // @ts-ignore
    <Cloud {...cloudProps}>
      // @ts-ignore
      <>{renderedIcons}</>
      <a href="#" target="_blank" rel="noopener">
        <img
          height="60"
          width="60"
          alt="A globe"
          src="https://i.postimg.cc/Nj5K8GR4/next-auth.png"
        />
      </a>
      <a href="#" target="_blank" rel="noopener">
        <img
          height="60"
          width="60"
          alt="A globe"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
        />
      </a>
    </Cloud>
  );
}
