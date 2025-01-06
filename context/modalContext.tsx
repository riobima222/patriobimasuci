"use client";
import React, { createContext, useState } from "react";

export const ModalContext = createContext({});

export default function ModalContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ModalContext.Provider>
  );
}
