import Image from "next/image";

export default function PartnersSection() {
  return (
    <section className="w-full bg-white py-12 border-b border-[#F5F5F6]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="w-full max-w-[1040px] opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
          <Image
            src="/icons/partner-logos.svg"
            alt="Trusted by leading companies"
            width={1040}
            height={44}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
