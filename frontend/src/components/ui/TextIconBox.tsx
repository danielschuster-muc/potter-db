import React from "react";
import type { IconType } from "react-icons";

export default function TextIconBox({ icon, text }: { icon: IconType; text: string }) {
  const CustomIcon: IconType = icon;
  return (
    <div className="flex items-center space-x-1">
      <CustomIcon />
      <p className="truncate">{text}</p>
    </div>
  );
}
