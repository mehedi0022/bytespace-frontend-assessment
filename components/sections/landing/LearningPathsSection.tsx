import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const STATS = [
  ["12K", "Students"],
  ["70+", "Courses"],
  ["16", "Creators"],
] as const;

const BENEFITS = ["Share Your Expertise", "Monetize Your Passion", "Flexibility and Autonomy", "Build a Community"];

const LearningPathsSection = () => (
  <section className="relative min-h-[1460px] overflow-hidden bg-white" aria-labelledby="learning-paths-title">
    <Image className="pointer-events-none absolute inset-0 z-0 h-full w-full max-w-none object-cover" src="/assets/learningpath/bg.svg" alt="" width={1440} height={1460} aria-hidden="true" />
    <Image className="pointer-events-none absolute bottom-0 left-0 z-0 h-auto w-[425px]" src="/assets/learningpath/leftbottom.svg" alt="" width={425} height={554} aria-hidden="true" />
    <div className="relative z-[1] mx-auto w-[min(1258px,calc(100%-48px))]">
      <div className="grid min-h-[730px] grid-cols-[574px_621px] items-center gap-[63px] max-[1300px]:grid-cols-2 max-[800px]:grid-cols-1 max-[800px]:py-20">
        <div className="max-w-[500px]">
          <h2 className="m-0 whitespace-nowrap font-heading text-[44px] font-semibold leading-[1.18] text-shuttle-950 max-[640px]:whitespace-normal max-[640px]:text-[36px]" id="learning-paths-title">Your Path to Professional<br />Growth Starts Here!</h2>
          <p className="mt-10 text-base leading-[1.65] text-shuttle-400">Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.</p>
          <div className="mt-8 flex gap-10">
            {STATS.map(([value, label]) => <div key={label}><strong className="block text-[32px] font-medium leading-none text-brand-blue">{value}</strong><span className="mt-2 block text-sm text-shuttle-400">{label}</span></div>)}
          </div>
        </div>
        <Image className="mx-auto h-auto w-[680px] max-w-[calc(100%+100px)] self-center" src="/assets/learningpath/1.png" alt="Learner using ByteSpace courses" width={700} height={700} />
      </div>
      <div className="grid min-h-[730px] grid-cols-[574px_621px] items-center gap-[63px] max-[1300px]:grid-cols-2 max-[800px]:grid-cols-1 max-[800px]:py-20">
        <Image className="mx-auto h-auto w-[590px] max-w-full self-center max-[800px]:order-2" src="/assets/learningpath/2.png" alt="Creator managing ByteSpace courses" width={600} height={700} />
        <div className="max-w-[430px]">
          <h2 className="m-0 font-heading text-[36px] font-semibold leading-[1.15] text-shuttle-950">Create &amp; Manage<br />Courses Easily.</h2>
          <p className="mt-10 text-sm leading-[1.65] text-shuttle-400">ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses.</p>
          <ul className="mt-6 space-y-3 p-0 text-sm text-shuttle-950">
            {BENEFITS.map((benefit) => <li className="flex items-center gap-2" key={benefit}><CheckCircle2 className="size-4 fill-brand-blue text-white" />{benefit}</li>)}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default LearningPathsSection;
