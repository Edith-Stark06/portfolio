"use client";

import dynamic from "next/dynamic";

const CommandCenter = dynamic(
  () => import("@/components/layout/CommandCenter"),
  { ssr: false }
);

export default function CommandCenterMount() {
  return <CommandCenter />;
}
