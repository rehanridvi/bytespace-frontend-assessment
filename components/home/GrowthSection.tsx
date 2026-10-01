import Image from "next/image";

export default function GrowthSection() {
  return (
    <section className="w-full py-20 lg:py-28 overflow-hidden bg-white">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text & Stats */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#040819] tracking-tight leading-[1.18]">
              Your Path to Professional <br className="hidden sm:inline" />
              Growth Starts Here!
            </h2>

            <p className="text-base sm:text-lg text-[#82868E] leading-relaxed max-w-xl">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>

            {/* 3 Stats Counters */}
            <div className="pt-6 flex items-center gap-8 sm:gap-14 border-t border-[#F5F5F6]">
              <div>
                <span className="block font-bold text-3xl sm:text-4xl text-[#003BE2]">
                  12K
                </span>
                <span className="text-sm text-[#82868E] font-medium mt-1 block">
                  Students
                </span>
              </div>

              <div>
                <span className="block font-bold text-3xl sm:text-4xl text-[#003BE2]">
                  70+
                </span>
                <span className="text-sm text-[#82868E] font-medium mt-1 block">
                  Courses
                </span>
              </div>

              <div>
                <span className="block font-bold text-3xl sm:text-4xl text-[#003BE2]">
                  16
                </span>
                <span className="text-sm text-[#82868E] font-medium mt-1 block">
                  Creators
                </span>
              </div>
            </div>
          </div>

          {/* Right Visual Image */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[540px] h-[380px] sm:h-[460px] lg:h-[500px]">
              <Image
                src="/images/feature1-visual.png"
                alt="Professional growth learning"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 540px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
