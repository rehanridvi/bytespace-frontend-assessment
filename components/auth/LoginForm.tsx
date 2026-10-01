"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* Small blue top label */}
      <span className="text-sm font-medium text-[#003BE2] block mb-1">
        Sign In
      </span>

      {/* Main Heading */}
      <h1 className="text-3xl sm:text-[38px] font-bold text-[#040819] tracking-tight leading-tight mb-8">
        Welcome Back
      </h1>

      {submitted ? (
        <div className="p-4 rounded-xl bg-green-50 border border-green-200 text-green-800 text-sm mb-6">
          Signed in successfully! Redirecting...
        </div>
      ) : null}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-[#040819] mb-1.5">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="designer@example.com"
            required
            className="w-full px-4 py-3 rounded-[14px] border border-[#CED0D3] text-[#040819] placeholder:text-[#82868E] text-sm focus:outline-none focus:border-[#003BE2] transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#040819] mb-1.5">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
            required
            className="w-full px-4 py-3 rounded-[14px] border border-[#CED0D3] text-[#040819] placeholder:text-[#82868E] text-sm focus:outline-none focus:border-[#003BE2] transition-colors"
          />
        </div>

        {/* Submit button aligned to the right like in Figma */}
        <div className="flex justify-end pt-2">
          <button
            type="submit"
            className="bg-[#D4FB20] text-[#040819] font-semibold text-sm px-8 py-3 rounded-full hover:bg-[#c4ec13] transition-all duration-200 shadow-sm hover:shadow"
          >
            Sign In
          </button>
        </div>
      </form>

      {/* Divider */}
      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-[#CED0D3]" />
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="bg-white px-3 text-[#82868E]">or</span>
        </div>
      </div>

      {/* Social login buttons */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <button
          type="button"
          aria-label="Sign in with Facebook"
          className="w-12 h-12 rounded-full border border-[#CED0D3] flex items-center justify-center hover:bg-[#F5F5F6] hover:border-[#003BE2] transition-colors"
        >
          <Image
            src="/icons/facebook.svg"
            alt="Facebook"
            width={22}
            height={22}
          />
        </button>

        <button
          type="button"
          aria-label="Sign in with Google"
          className="w-12 h-12 rounded-full border border-[#CED0D3] flex items-center justify-center hover:bg-[#F5F5F6] hover:border-[#003BE2] transition-colors"
        >
          <Image
            src="/icons/google.svg"
            alt="Google"
            width={22}
            height={22}
          />
        </button>
      </div>

      {/* Bottom link to register */}
      <p className="text-center text-sm text-[#82868E]">
        New user?{" "}
        <Link
          href="/register"
          className="text-[#003BE2] font-medium hover:underline ml-1"
        >
          Create an account
        </Link>
      </p>
    </div>
  );
}
