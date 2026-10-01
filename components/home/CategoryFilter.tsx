"use client";

import { useState } from "react";

const CATEGORIES = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

interface CategoryFilterProps {
  activeCategory?: string;
  onSelectCategory?: (category: string) => void;
}

export default function CategoryFilter({
  activeCategory: controlledActive,
  onSelectCategory,
}: CategoryFilterProps) {
  const [internalActive, setInternalActive] = useState("Featured");
  const active = controlledActive || internalActive;

  const handleSelect = (cat: string) => {
    setInternalActive(cat);
    onSelectCategory?.(cat);
  };

  return (
    <div className="w-full text-center mb-12">
      {/* Headings */}
      <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#040819] tracking-tight leading-tight mb-4 max-w-2xl mx-auto">
        Discover Your Passion, <br className="hidden sm:inline" />
        Build Your Skills
      </h2>
      <p className="text-base sm:text-lg text-[#82868E] max-w-3xl mx-auto leading-relaxed mb-8">
        At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
      </p>

      {/* Category Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-5xl mx-auto">
        {CATEGORIES.map((cat) => {
          const isSelected = active === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => handleSelect(cat)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                isSelected
                  ? "bg-[#D4FB20] text-[#040819] shadow-sm font-semibold scale-105"
                  : "bg-white text-[#4B4C53] border border-[#CED0D3] hover:border-[#003BE2] hover:text-[#003BE2]"
              }`}
            >
              {cat}
            </button>
          );
        })}
        <button
          type="button"
          className="text-sm font-semibold text-[#003BE2] hover:underline px-2 py-1 ml-1"
        >
          + More
        </button>
      </div>
    </div>
  );
}
