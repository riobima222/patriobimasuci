"use client";
import React, { MouseEventHandler, useContext, useRef } from "react";
import { ModalContext } from "@/context/modalContext";

export default function Modal({ children }: { children: React.ReactNode }) {
  const modalRef = useRef(null);
  const { setIsOpen }: any = useContext(ModalContext);
  const modalClick: MouseEventHandler<HTMLDivElement> = (e: any) => {
    if (e.target === modalRef.current) {
      setIsOpen(false);
    }
  };
  return (
    <div
      ref={modalRef}
      onClick={modalClick}
      className="fixed z-[2000] top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-black bg-opacity-70 z-[50] transition ease-in-out duration-500 px-4"
    >
      {children}
    </div>
  );
}
