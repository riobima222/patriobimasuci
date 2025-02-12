"use client";

import { ToogleContext } from "@/context/toogleContext";
import { useContext } from "react";

export default function HtmlWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const {isChecked} = useContext(ToogleContext)
  return (
    <html lang="en" data-theme={isChecked ? "dark" : "light"}>
      {children}
    </html>
  );
}
