"use client";

import dynamic from "next/dynamic";

const AiSupportAgent = dynamic(() => import("@/components/AiSupportAgent"), {
  ssr: false,
});

export default function AiSupportAgentLazy() {
  return <AiSupportAgent />;
}
