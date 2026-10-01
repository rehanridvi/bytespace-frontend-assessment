import TestimonialCard, { Testimonial } from "@/components/ui/TestimonialCard";

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/images/avatar-sarah.png",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/images/avatar-james.png",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/images/avatar-alex.png",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative w-full py-24 bg-[#FAFAFA] overflow-hidden border-b border-[#F5F5F6]">
      {/* Soft background glows from Figma */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full radial-glow-lime opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full radial-glow-blue opacity-40 pointer-events-none" />

      <div className="relative max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header: Title on Left, Subtitle on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#040819] tracking-tight leading-[1.18]">
              Discover What Our Community Is Saying
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-base sm:text-lg text-[#82868E] leading-relaxed">
              At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        {/* 3 Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
