"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegisterForm() {
  const [fullName, setFullName] = useState("");
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
        Create an Account
      </span>

      {/* Main Heading */}
      <h1 className="text-3xl sm:text-[38px] font-bold text-[#040819] tracking-tight leading-tight mb-8">
        Welcome to <br />
        ByteSpace
      </h1>

      {submitted ? (
        <div className="p-4 rounded-xl bg-green-50 border border-green-200 text-green-800 text-sm mb-6">
          Account created successfully! Welcome to ByteSpace.
        </div>
      ) : null}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-[#040819] mb-1.5">
            Full Name
          </label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Jamie Davis"
            required
            className="w-full px-4 py-3 rounded-[14px] border border-[#CED0D3] text-[#040819] placeholder:text-[#82868E] text-sm focus:outline-none focus:border-[#003BE2] transition-colors"
          />
        </div>

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
        <div className="flex justify-end pt-3">
          <button
            type="submit"
            className="bg-[#D4FB20] text-[#040819] font-semibold text-sm px-8 py-3 rounded-full hover:bg-[#c4ec13] transition-all duration-200 shadow-sm hover:shadow"
          >
            Continue
          </button>
        </div>
      </form>

      {/* Bottom link to login */}
      <p className="text-center text-sm text-[#82868E] mt-12">
        Already have an account?{" "}
        <Link
          href="/login"
          className="text-[#003BE2] font-medium hover:underline ml-1"
        >
          Login
        </Link>
      </p>
    </div>
  );
}
