import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const STATS = [
  ["12K", "Students"],
  ["70+", "Courses"],
  ["16", "Creators"],
] as const;

const BENEFITS = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

const LearningPathsSection = () => (
  <section
    className="relative w-full overflow-hidden bg-white"
    aria-labelledby="learning-paths-title"
  >
    {/* Full Width Background Images */}
    <Image
      className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
      src="/assets/learningpath/bg.svg"
      alt=""
      width={1440}
      height={1460}
      aria-hidden="true"
    />
    <Image
      className="pointer-events-none absolute bottom-0 left-0 z-0 h-auto w-[280px] sm:w-[350px] lg:w-[425px]"
      src="/assets/learningpath/leftbottom.svg"
      alt=""
      width={425}
      height={554}
      aria-hidden="true"
    />

    {/* Content Container (Max 1440px limit and Centered) */}
    <div className="relative z-[1] mx-auto max-w-[1440px] px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[1258px]">
        <div className="flex flex-col gap-12 sm:gap-16 lg:gap-24">
          {/* First Block: Learner Section */}
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="max-w-xl">
              <h2
                className="font-heading text-3xl font-semibold leading-tight text-shuttle-950 sm:text-4xl lg:text-[44px] lg:leading-[1.18]"
                id="learning-paths-title"
              >
                Your Path to Professional
                <br className="hidden sm:inline" /> Growth Starts Here!
              </h2>
              <p className="mt-4 text-sm text-shuttle-400 sm:mt-6 sm:text-base leading-relaxed">
                Explore our curated selection of courses tailored to enhance
                your capabilities and accelerate your career journey. Whether
                you are looking to sharpen specific skills, gain industry
                expertise, or embark on a new career path entirely, we have the
                resources you need.
              </p>
              <div className="mt-6 flex flex-wrap gap-6 sm:mt-8 sm:gap-10">
                {STATS.map(([value, label]) => (
                  <div key={label}>
                    <strong className="block text-2xl font-medium leading-none text-brand-blue sm:text-[32px]">
                      {value}
                    </strong>
                    <span className="mt-1.5 block text-xs text-shuttle-400 sm:mt-2 sm:text-sm">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <Image
                className="h-auto w-full max-w-[500px] lg:max-w-[680px]"
                src="/assets/learningpath/1.png"
                alt="Learner using ByteSpace courses"
                width={700}
                height={700}
                priority
              />
            </div>
          </div>

          {/* Second Block: Creator Section */}
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 flex justify-center lg:order-1">
              <Image
                className="h-auto w-full max-w-[450px] lg:max-w-[590px]"
                src="/assets/learningpath/2.png"
                alt="Creator managing ByteSpace courses"
                width={600}
                height={700}
              />
            </div>

            <div className="order-1 max-w-xl lg:order-2">
              <h2 className="font-heading text-3xl font-semibold leading-tight text-shuttle-950 sm:text-4xl lg:text-[36px] lg:leading-[1.15]">
                Create &amp; Manage
                <br className="hidden sm:inline" /> Courses Easily.
              </h2>
              <p className="mt-4 text-sm text-shuttle-400 sm:mt-6 leading-relaxed">
                ByteSpace supports individuals or entities in the creation,
                publication, and administration of educational courses.
              </p>
              <ul className="mt-6 space-y-3 p-0 text-sm text-shuttle-950">
                {BENEFITS.map((benefit) => (
                  <li className="flex items-center gap-2.5" key={benefit}>
                    <CheckCircle2 className="size-4 shrink-0 fill-brand-blue text-white" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default LearningPathsSection;
