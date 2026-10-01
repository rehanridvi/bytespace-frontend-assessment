import Image from "next/image";
import Link from "next/link";
import React from "react";

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export default function AuthLayout({
  title,
  subtitle,
  children,
}: AuthLayoutProps) {
  return (
    <div className="min-h-screen w-full bg-[#003BE2] bg-grid-pattern flex flex-col justify-between py-6 px-4 sm:px-8 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full radial-glow-lime opacity-25 pointer-events-none" />

      {/* Top Header Logo */}
      <div className="max-w-[1280px] w-full mx-auto pt-2 z-20">
        <Link href="/" className="inline-flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-[#D4FB20] flex items-center justify-center font-bold text-black text-xl leading-none transition-transform group-hover:scale-105">
            b
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            ByteSpace
          </span>
        </Link>
      </div>

      {/* Main Split Screen Container */}
      <div className="max-w-[1280px] w-full mx-auto my-auto py-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        {/* Left Column: Headline, Description & Visual Composition */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
              {title}
            </h2>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-md">
              {subtitle}
            </p>
          </div>

          {/* Visual Composition from Figma */}
          <div className="relative w-full max-w-[480px] h-[340px] sm:h-[420px] pt-4">
            <Image
              src="/images/auth-visual.png"
              alt="ByteSpace interactive learning preview"
              fill
              priority
              className="object-contain object-left"
              sizes="(max-width: 768px) 100vw, 480px"
            />
          </div>
        </div>

        {/* Right Column: Form Card */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="w-full max-w-[480px] bg-white rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 shadow-2xl border border-black/5">
            {children}
          </div>
        </div>
      </div>

      {/* Empty bottom spacer for balance */}
      <div className="hidden lg:block h-4" />
    </div>
  );
}
