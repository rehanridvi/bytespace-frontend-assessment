import Image from "next/image";

export interface Course {
  id: string;
  title: string;
  instructor: string;
  rating: number;
  lessons: number;
  duration: string;
  comments: number;
  level: string;
  price: number;
  image: string;
  studentAvatars?: string[];
  studentCount?: string;
}

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const avatars = course.studentAvatars || [
    "/images/student-1.png",
    "/images/student-2.png",
    "/images/student-3.png",
    "/images/student-4.png",
  ];

  return (
    <div className="group bg-white rounded-[24px] border border-[#E5E6E8] p-3 sm:p-4 flex flex-col transition-all duration-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.1)] hover:-translate-y-1 hover:border-[#003BE2]/30">
      {/* Thumbnail with overlay badges */}
      <div className="relative w-full aspect-[4/3] rounded-[16px] overflow-hidden bg-gray-100 mb-4">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 373px"
        />

        {/* Chips overlay at bottom of image */}
        <div className="absolute bottom-3 inset-x-3 flex items-center gap-2 text-[11px] text-white font-medium">
          <div className="bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full whitespace-nowrap">
            {course.lessons} Lessons
          </div>
          <div className="bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full whitespace-nowrap">
            {course.duration}
          </div>
          <div className="bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full whitespace-nowrap">
            {course.comments} Comments
          </div>
        </div>
      </div>

      {/* Course Info */}
      <div className="flex flex-col flex-1 justify-between px-1">
        {/* Title and Rating Row */}
        <div className="flex items-start justify-between gap-3 mb-1">
          <h3 className="font-semibold text-lg leading-snug text-[#040819] line-clamp-1 group-hover:text-[#003BE2] transition-colors">
            {course.title}
          </h3>
          <div className="flex items-center gap-1 shrink-0 font-semibold text-sm text-[#040819] pt-0.5">
            <span>{course.rating.toFixed(1)}</span>
            <svg className="w-4 h-4 fill-[#FFC700]" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
        </div>

        {/* Instructor */}
        <p className="text-sm text-[#003BE2] font-normal mb-4">
          by <span className="hover:underline cursor-pointer">{course.instructor}</span>
        </p>

        {/* Level badge + Student Avatars Row */}
        <div className="flex items-center justify-between mb-3">
          {/* Level Badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#F5F5F6] text-[#040819] text-xs font-medium rounded-full">
            <svg className="w-3.5 h-3.5 text-[#040819]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 20V10M12 20V4M6 20v-6" />
            </svg>
            {course.level}
          </div>

          {/* Student Avatars */}
          <div className="flex items-center -space-x-2">
            {avatars.slice(0, 4).map((av, idx) => (
              <div key={idx} className="relative w-7 h-7 rounded-full overflow-hidden border-2 border-white">
                <Image src={av} alt="Student" fill className="object-cover" sizes="28px" />
              </div>
            ))}
            <div className="w-7 h-7 rounded-full bg-[#D4FB20] text-[#040819] text-[10px] font-bold flex items-center justify-center border-2 border-white">
              {course.studentCount || "26+"}
            </div>
          </div>
        </div>

        {/* Price Row */}
        <div className="flex items-baseline gap-0.5">
          <span className="font-bold text-xl text-[#003BE2]">
            ${course.price}
          </span>
          <span className="text-sm text-[#82868E]">
            /lifetime
          </span>
        </div>
      </div>
    </div>
  );
}
