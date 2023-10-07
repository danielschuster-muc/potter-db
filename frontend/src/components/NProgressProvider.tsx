"use client";
import React from "react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export default function NProgressProvider({ children }: { children: React.ReactNode }) {
  return (
    <ProgressBar height="4px" color="#D926D9" options={{ showSpinner: false }} shallowRouting>
      {children}
    </ProgressBar>
  );
}
