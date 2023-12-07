"use client";
import React from "react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export default function NProgressProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProgressBar
        height="4px"
        color="#D926D9"
        delay={100}
        options={{ showSpinner: false }}
        shallowRouting
      />
      {children}
    </>
  );
}
