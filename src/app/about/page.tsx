import AboutViews from "@/views/about";
import React from "react";
import { CharacterCard } from "./_components/card";

export default function About() {
  return (
    <div>
      <AboutViews />
      <div>merhaba</div>
      <div className="grid grid-cols-5 px-4">
        <CharacterCard title="mesela title" desc="örnek desc" />
        <CharacterCard title="mesela title" desc="örnek desc" />
        <CharacterCard title="mesela title" desc="örnek desc" />
        <CharacterCard title="mesela title" desc="örnek desc" />
        <CharacterCard title="mesela title" desc="örnek desc" />
      </div>
    </div>
  );
}
