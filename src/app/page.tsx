"use client";

import Carousel from "@/components/Home/Carousel";
import TeamGrid from "@/components/Home/TeamGrid";

export default function Home() {
  return (
    <div>

      <Carousel />

      {/* Team grid section */}
      <TeamGrid />
    </div>
  );
}