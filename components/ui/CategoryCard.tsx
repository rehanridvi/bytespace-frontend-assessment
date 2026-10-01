import Image from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  title: string;
  iconSrc: string;
  href?: string;
}

export default function CategoryCard({ title, iconSrc, href = "#" }: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="group bg-white rounded-[20px] border border-[#E5E6E8] p-5 sm:p-6 lg:p-8 flex flex-col items-center justify-center text-center gap-5 min-h-[160px] sm:min-h-[180px] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-[#003BE2]"
    >
      {/* Icon circle — lime background with dark icon inside */}
      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#D4FB20] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shrink-0">
        <Image
          src={iconSrc}
          alt={title}
          width={120}
          height={96}
          className="object-contain w-16 h-16 sm:w-20 sm:h-20"
        />
      </div>
      <span className="font-medium text-base sm:text-lg text-[#040819] group-hover:text-[#003BE2] transition-colors leading-tight">
        {title}
      </span>
    </Link>
  );
}
