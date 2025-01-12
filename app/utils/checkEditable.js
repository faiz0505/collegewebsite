"use client";
import { usePathname } from "next/navigation";
import React from "react";

export const checkEditable = () => {
  const pathname = usePathname();
  return pathname;
};
