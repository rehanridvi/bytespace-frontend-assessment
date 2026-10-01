"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface NavbarProps {
  variant?: "transparent" | "solid";
}

export default function Navbar({ variant = "transparent" }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isTransparent = variant === "transparent";

  return (
    <header className="relative w-full z-50">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-full bg-[#D4FB20] flex items-center justify-center font-bold text-black text-xl leading-none">
            b
          </div>
          <span className={`text-xl font-bold tracking-tight ${isTransparent ? 'text-white' : 'text-[#040819]'}`}>
            ByteSpace
          </span>
        </Link>

        {/* Center Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors hover:text-[#D4FB20] ${
              isTransparent ? 'text-white' : 'text-[#040819]'
            }`}
          >
            Home
          </Link>
          <Link
            href="#courses"
            className={`text-sm font-medium transition-colors hover:text-[#D4FB20] ${
              isTransparent ? 'text-white/80' : 'text-[#666973]'
            }`}
          >
            Courses
          </Link>
          <Link
            href="#creators"
            className={`text-sm font-medium transition-colors hover:text-[#D4FB20] ${
              isTransparent ? 'text-white/80' : 'text-[#666973]'
            }`}
          >
            Creators
          </Link>
        </nav>

        {/* Right Desktop Actions */}
        <div className="hidden md:flex items-center gap-5">
          <Link
            href="/login"
            className={`text-sm font-medium transition-colors hover:text-[#D4FB20] ${
              isTransparent ? 'text-white' : 'text-[#040819]'
            }`}
          >
            Sign In
          </Link>

          <Link
            href="/register"
            className={`text-sm font-medium px-4 py-2 rounded-full border transition-all duration-200 ${
              isTransparent
                ? 'border-white/40 text-white hover:bg-white hover:text-[#003BE2]'
                : 'border-[#CED0D3] text-[#040819] hover:bg-[#F5F5F6]'
            }`}
          >
            Join Us
          </Link>

          <button
            type="button"
            aria-label="Shopping Cart"
            className={`p-2 rounded-full transition-colors ${
              isTransparent ? 'text-white hover:text-[#D4FB20]' : 'text-[#040819] hover:text-[#003BE2]'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center gap-3">
          <button
            type="button"
            aria-label="Shopping Cart"
            className={`p-1.5 ${isTransparent ? 'text-white' : 'text-[#040819]'}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-lg ${isTransparent ? 'text-white' : 'text-[#040819]'}`}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#040819] text-white px-6 py-6 border-t border-white/10 space-y-4">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium py-1 hover:text-[#D4FB20]"
          >
            Home
          </Link>
          <Link
            href="#courses"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium py-1 hover:text-[#D4FB20]"
          >
            Courses
          </Link>
          <Link
            href="#creators"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium py-1 hover:text-[#D4FB20]"
          >
            Creators
          </Link>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center py-2.5 font-medium border border-white/30 rounded-full"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center py-2.5 font-medium bg-[#D4FB20] text-black rounded-full"
            >
              Join Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
