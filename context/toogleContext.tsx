"use client";

import React, { createContext, useState } from "react";

export const ToogleContext = createContext<any>(null);

export default function ToogleContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <ToogleContext.Provider value={{ isChecked, setIsChecked }}>
      {children}
    </ToogleContext.Provider>
  );
}
