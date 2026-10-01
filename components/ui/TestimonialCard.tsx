import Image from "next/image";

export interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  quote: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-[24px] border border-[#CED0D3] p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      {/* Top author info */}
      <div className="flex items-center gap-3.5 mb-6">
        <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-[#E5E6E8]">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            fill
            className="object-cover"
            sizes="48px"
          />
        </div>
        <div>
          <h4 className="font-semibold text-base text-[#040819]">
            {testimonial.name}
          </h4>
          <p className="text-xs text-[#003BE2] font-medium">
            {testimonial.role}
          </p>
        </div>
      </div>

      {/* Quote text */}
      <p className="text-[14px] leading-[1.65] text-[#4B4C53]">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
    </div>
  );
}
