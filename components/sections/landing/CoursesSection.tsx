import CategoryChip from "@/components/ui/CategoryChip";
import CourseCard from "@/components/ui/CourseCard";

const CATEGORIES = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

const COURSES = [
  {
    title: "Learn Figma from Basic",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Build Digital Asset",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "the Power of Big Data",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
];

const CoursesSection = () => (
  <section className="bg-white py-16" id="courses">
    <div className="mx-auto w-[min(1200px,calc(100%-48px))]">
      <header className="mx-auto max-w-[900px] text-center">
        <h2 className="m-0 font-heading text-5xl font-semibold leading-[1.1] text-shuttle-950">
          Discover Your Passion,
          <br />
          Build Your Skills
        </h2>
        <p className="mt-6 text-lg leading-7 text-shuttle-400">
          At Bytespace Courses, we bring you closer to life-changing knowledge.
          Explore a variety of courses across different fields, from technology
          to the arts, and make a difference in your career and life.
        </p>
      </header>
      <div className="mx-auto mt-10 flex max-w-[1100px] flex-wrap justify-center gap-4">
        {CATEGORIES.map((category, index) => (
          <CategoryChip key={category} label={category} active={index === 0} />
        ))}
        <button className="px-2 py-3 text-base text-brand-blue" type="button">
          + More
        </button>
      </div>
      <div className="mt-20 grid grid-cols-3 gap-10 max-[900px]:grid-cols-2 max-[640px]:grid-cols-1">
        {COURSES.map((course) => (
          <CourseCard key={course.title} {...course} />
        ))}
      </div>
    </div>
  </section>
);

export default CoursesSection;
