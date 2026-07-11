"use client";

import React from "react";
import PageHeader from "@/components/common/PageHeader";
import HomeopathyContent from "@/components/sections/HomeopathyContent";

export default function HomeopathyPage() {
  return (
    <main className="flex min-h-screen flex-col bg-brand-cream overflow-hidden">
      {/* ── 1. Static Page Header ────────────────────────── */}
      <PageHeader
        title="Natural Healing Journey"
        subtitle="Pure Homeopathy"
        bgImage="/images/homeopathy/homeopathy.webp"
      />

      <HomeopathyContent />
    </main>
  );
}
