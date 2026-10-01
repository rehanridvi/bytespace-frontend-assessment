import Image from "next/image";

const BENEFITS = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export default function CourseCreationSection() {
  return (
    <section className="w-full py-20 lg:py-28 overflow-hidden bg-[#FAFAFA] border-t border-[#F5F5F6]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Visual Image */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-full max-w-[540px] h-[380px] sm:h-[460px] lg:h-[500px]">
              <Image
                src="/images/feature2-visual.png"
                alt="Create & manage courses easily with ByteSpace"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 540px"
              />
            </div>
          </div>

          {/* Right Text & Feature Bullets */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#040819] tracking-tight leading-[1.18]">
              Create & Manage <br className="hidden sm:inline" />
              Courses Easily.
            </h2>

            <p className="text-base sm:text-lg text-[#82868E] leading-relaxed max-w-xl">
              <strong className="text-[#040819] font-medium">ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>

            {/* Checkmark List */}
            <div className="pt-4 space-y-4">
              {BENEFITS.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#003BE2] flex items-center justify-center shrink-0 text-white">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-base sm:text-lg font-medium text-[#040819]">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
