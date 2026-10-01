import CourseCard, { Course } from "@/components/ui/CourseCard";

const COURSES: Course[] = [
  {
    id: "1",
    title: "Learn Figma from Basic",
    instructor: "purepearl studio",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    level: "Beginner",
    price: 25,
    image: "/images/course-1.png",
    studentCount: "26+",
  },
  {
    id: "2",
    title: "Build Digital Asset",
    instructor: "purepearl studio",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    level: "Beginner",
    price: 25,
    image: "/images/course-2.png",
    studentCount: "26+",
  },
  {
    id: "3",
    title: "the Power of Big Data",
    instructor: "purepearl studio",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    level: "Beginner",
    price: 25,
    image: "/images/course-3.png",
    studentCount: "26+",
  },
  {
    id: "4",
    title: "Balancing Productivity and Life",
    instructor: "purepearl studio",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    level: "Beginner",
    price: 25,
    image: "/images/course-4.png",
    studentCount: "26+",
  },
  {
    id: "5",
    title: "Mastering Money Management",
    instructor: "purepearl studio",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    level: "Beginner",
    price: 25,
    image: "/images/course-5.png",
    studentCount: "26+",
  },
  {
    id: "6",
    title: "From Idea to Startup Success",
    instructor: "purepearl studio",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    level: "Beginner",
    price: 25,
    image: "/images/course-6.png",
    studentCount: "26+",
  },
];

export default function CourseGrid() {
  return (
    <section id="courses" className="w-full pb-20">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {COURSES.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
