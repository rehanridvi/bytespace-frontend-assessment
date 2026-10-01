import Image from "next/image";
import Link from "next/link";

export default function CreatorCTA() {
  return (
    <section id="creators" className="relative w-full bg-[#003BE2] bg-grid-pattern overflow-hidden py-20 sm:py-24 text-white">
      {/* 3D Ornaments — full group export with correct lime/white colors */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/images/ornament_46_78.png"
          alt=""
          fill
          className="object-contain object-center"
        />
      </div>

      <div className="relative max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.18]">
            Unlock Your Potential as a <br className="hidden sm:inline" />
            Creator with ByteSpace
          </h2>

          <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-3xl mx-auto">
            Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
          </p>

          <div className="pt-4">
            <Link
              href="/register"
              className="inline-block bg-[#D4FB20] text-[#040819] font-semibold text-base px-8 py-3.5 rounded-full hover:bg-[#c4ec13] transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Join as Creator
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
