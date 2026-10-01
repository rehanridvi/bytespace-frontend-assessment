"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-[#003BE2] bg-grid-pattern overflow-hidden pt-12 pb-0 text-white">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full radial-glow-lime opacity-30 pointer-events-none" />

      {/* 3D Ornaments — full group export with correct lime/white colors */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <Image
          src="/images/ornament_46_79.png"
          alt=""
          fill
          className="object-contain object-center"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="relative max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center z-20">
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-bold tracking-tight max-w-4xl mx-auto leading-[1.12] mb-5">
          Get Access to Hundreds <br className="hidden sm:inline" />
          Courses Available
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed mb-10">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        {/* Search Bar */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="relative max-w-[580px] mx-auto bg-white rounded-full p-2 flex items-center shadow-2xl mb-16"
        >
          <div className="pl-4 pr-2 text-[#82868E] shrink-0">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Course, topic, creator"
            className="w-full text-sm sm:text-base text-[#040819] placeholder:text-[#82868E] bg-transparent focus:outline-none px-2"
          />
          <button
            type="submit"
            className="shrink-0 bg-[#D4FB20] text-[#040819] font-medium text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:bg-[#c4ec13] transition-colors"
          >
            Search
          </button>
        </form>

        {/* Hero Visual Showcase */}
        <div className="relative max-w-[760px] mx-auto">
          {/* Lime Circle Backdrop — sits behind man, crops at bottom */}
          <div className="relative mx-auto w-[340px] sm:w-[460px] lg:w-[520px] aspect-square">
            <div className="absolute inset-0 rounded-full bg-[#D4FB20]" />

            {/* Student Cutout — overflows below circle */}
            <div className="absolute inset-x-0 -bottom-4 flex justify-center pointer-events-none">
              <div className="relative w-[320px] sm:w-[430px] lg:w-[500px] h-[360px] sm:h-[480px] lg:h-[540px]">
                <Image
                  src="/images/hero-man.png"
                  alt="Student learning with ByteSpace"
                  fill
                  priority
                  className="object-contain object-bottom"
                  sizes="(max-width: 768px) 320px, 500px"
                />
              </div>
            </div>
          </div>

          {/* Floating Badge 1 (Left): UI/UX Design */}
          <div className="absolute top-[30%] left-0 sm:-left-4 lg:-left-12 bg-white text-[#040819] rounded-[20px] p-3.5 sm:p-4 shadow-xl text-left border border-black/5 animate-bounce-slow z-30">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#003BE2] flex items-center justify-center text-white shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-sm sm:text-base leading-tight">UI/UX Design</h4>
                <p className="text-xs text-[#82868E] mt-0.5">200 Courses • 1000+ Students</p>
              </div>
            </div>
          </div>

          {/* Floating Badge 2 (Right): Learning Progress */}
          <div className="absolute top-[20%] right-0 sm:-right-4 lg:-right-10 bg-white text-[#040819] rounded-[20px] p-3.5 sm:p-4 shadow-xl text-left border border-black/5 w-44 sm:w-52 z-30">
            <span className="text-xs text-[#82868E] font-medium block mb-1">Learning Progress</span>
            <div className="flex items-baseline justify-between mb-2">
              <span className="text-2xl sm:text-3xl font-bold text-[#040819]">55%</span>
            </div>
            <div className="w-full bg-[#F5F5F6] h-2 rounded-full overflow-hidden">
              <div className="bg-[#003BE2] h-full rounded-full" style={{ width: "55%" }} />
            </div>
          </div>

          {/* Floating Badge 3 (Bottom-Left): Happy Students */}
          <div className="absolute bottom-[10%] left-0 sm:-left-8 lg:-left-16 bg-white text-[#040819] rounded-[20px] p-3.5 sm:p-4 shadow-xl text-left border border-black/5 z-30">
            <span className="text-xs font-semibold text-[#040819] block mb-1">Happy Students</span>
            <div className="flex items-center gap-1.5 text-xs text-[#040819] font-medium mb-2.5">
              <span>4.5</span>
              <span className="text-[#82868E]">(240)</span>
              <svg className="w-3.5 h-3.5 fill-[#FFC700] text-[#FFC700]" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <div className="flex items-center -space-x-2">
              {["/images/student-1.png", "/images/student-2.png", "/images/student-3.png", "/images/student-4.png"].map((img, i) => (
                <div key={i} className="relative w-7 h-7 rounded-full overflow-hidden border-2 border-white">
                  <Image src={img} alt="Student" fill className="object-cover" sizes="28px" />
                </div>
              ))}
              <div className="w-7 h-7 rounded-full bg-[#D4FB20] text-[#040819] text-[10px] font-bold flex items-center justify-center border-2 border-white">
                2K+
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
