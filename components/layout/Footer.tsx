"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-[#CED0D3] pt-16 pb-12">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main top columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16">
          {/* Left newsletter branding */}
          <div className="lg:col-span-5 max-w-[420px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 mb-6">
              <div className="w-8 h-8 rounded-full bg-[#D4FB20] flex items-center justify-center font-bold text-black text-xl leading-none">
                b
              </div>
              <span className="text-xl font-bold tracking-tight text-[#040819]">
                ByteSpace
              </span>
            </Link>

            <p className="text-sm text-[#040819] mb-5 leading-relaxed">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            {/* Newsletter input */}
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2 mb-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2.5 rounded-full border border-[#CED0D3] text-sm text-[#040819] placeholder:text-[#82868E] focus:outline-none focus:border-[#003BE2] transition-colors"
                required
              />
              <button
                type="submit"
                className="px-6 py-2.5 rounded-full bg-[#D4FB20] text-[#040819] font-medium text-sm hover:bg-[#c4ec13] transition-colors shrink-0"
              >
                Search
              </button>
            </form>

            <p className="text-xs text-[#82868E] leading-normal">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          {/* Right Navigation Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Col 1 */}
            <div className="space-y-3.5">
              <Link href="#courses" className="block text-sm text-[#040819] hover:text-[#003BE2] transition-colors">
                Featured Courses
              </Link>
              <Link href="#categories" className="block text-sm text-[#040819] hover:text-[#003BE2] transition-colors">
                Featured Categories
              </Link>
              <Link href="#courses" className="block text-sm text-[#040819] hover:text-[#003BE2] transition-colors">
                Business
              </Link>
              <Link href="#courses" className="block text-sm text-[#040819] hover:text-[#003BE2] transition-colors">
                IT
              </Link>
              <Link href="#courses" className="block text-sm text-[#040819] hover:text-[#003BE2] transition-colors">
                Design
              </Link>
            </div>

            {/* Col 2 */}
            <div className="space-y-3.5">
              <Link href="#courses" className="block text-sm text-[#040819] hover:text-[#003BE2] transition-colors">
                Development
              </Link>
              <Link href="#courses" className="block text-sm text-[#040819] hover:text-[#003BE2] transition-colors">
                Marketing
              </Link>
              <Link href="#courses" className="block text-sm text-[#040819] hover:text-[#003BE2] transition-colors">
                Photography
              </Link>
              <Link href="#courses" className="block text-sm text-[#040819] hover:text-[#003BE2] transition-colors">
                Finance
              </Link>
              <Link href="#courses" className="block text-sm text-[#040819] hover:text-[#003BE2] transition-colors">
                Sport
              </Link>
            </div>

            {/* Col 3 */}
            <div className="space-y-3.5">
              <Link href="/register" className="block text-sm text-[#040819] hover:text-[#003BE2] transition-colors">
                Become a Creator
              </Link>
              <Link href="#affiliate" className="block text-sm text-[#040819] hover:text-[#003BE2] transition-colors">
                Affiliate Program
              </Link>
              <Link href="#contact" className="block text-sm text-[#040819] hover:text-[#003BE2] transition-colors">
                Contact
              </Link>
              <Link href="#help" className="block text-sm text-[#040819] hover:text-[#003BE2] transition-colors">
                Help
              </Link>
              <Link href="#about" className="block text-sm text-[#040819] hover:text-[#003BE2] transition-colors">
                About
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 border-t border-[#E5E6E8] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#82868E]">
          <div>
            © 2023 ByteSpace. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="#privacy" className="hover:text-[#040819] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#terms" className="hover:text-[#040819] transition-colors">
              Terms of Service
            </Link>
            <Link href="#cookies" className="hover:text-[#040819] transition-colors">
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
