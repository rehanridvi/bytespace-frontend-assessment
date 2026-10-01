import CategoryCard from "@/components/ui/CategoryCard";

const PATHS = [
  { title: "Design", icon: "/icons/cat-design.svg" },
  { title: "Development", icon: "/icons/cat-development.svg" },
  { title: "IT & Software", icon: "/icons/cat-it-software.svg" },
  { title: "Business", icon: "/icons/cat-business.svg" },
  { title: "Marketing", icon: "/icons/cat-marketing.svg" },
  { title: "Photography", icon: "/icons/cat-photography.svg" },
];

export default function LearningPaths() {
  return (
    <section id="categories" className="w-full py-20 bg-[#FAFAFA] border-t border-b border-[#F5F5F6]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#040819] tracking-tight leading-tight mb-4">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="text-base sm:text-lg text-[#82868E] leading-relaxed">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully curated categories.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {PATHS.map((path) => (
            <CategoryCard
              key={path.title}
              title={path.title}
              iconSrc={path.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
