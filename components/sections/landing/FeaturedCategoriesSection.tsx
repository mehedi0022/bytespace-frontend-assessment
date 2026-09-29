import {
  BriefcaseBusiness,
  Building2,
  Hammer,
  Laptop,
  Radio,
  SquareCode,
} from "lucide-react";
import type { ComponentType } from "react";
import type { LucideProps } from "lucide-react";

type Category = { label: string; icon: ComponentType<LucideProps> };

const CATEGORIES: Category[] = [
  { label: "Design", icon: Hammer },
  { label: "Development", icon: SquareCode },
  { label: "IT & Software", icon: Laptop },
  { label: "Business", icon: Building2 },
  { label: "Marketing", icon: Radio },
  { label: "Photography", icon: BriefcaseBusiness },
];

const FeaturedCategoriesSection = () => (
  <section className="bg-white py-[54px]" aria-labelledby="categories-title">
    <div className="mx-auto w-[min(1200px,calc(100%-48px))]">
      <header className="mx-auto max-w-[980px] text-center">
        <h2
          className="m-0 font-heading text-[32px] font-semibold leading-[1.2] tracking-[-.32px] text-shuttle-950"
          id="categories-title"
        >
          Explore Diverse Learning Paths at Bytespace
        </h2>
        <p className="mx-auto mt-4 max-w-[980px] text-base leading-6 text-shuttle-400">
          At Bytespace, we believe in empowering individuals through knowledge.
          Our diverse range of courses spans various fields, ensuring
          there&apos;s something for everyone. Unleash your potential and
          explore our carefully curated categories.
        </p>
      </header>
      <div className="mt-[58px] grid grid-cols-6 gap-8 max-[1100px]:grid-cols-3 max-[640px]:grid-cols-2 max-[420px]:grid-cols-1">
        {CATEGORIES.map(({ label, icon: Icon }) => (
          <button
            className="flex h-[139px] flex-col items-center justify-center gap-3 rounded-[20px] border border-shuttle-100 bg-white text-shuttle-950 transition-colors hover:border-brand-lime hover:bg-shuttle-50"
            key={label}
            type="button"
          >
            <span className="grid size-12 place-items-center rounded-full bg-brand-lime">
              <Icon className="size-6 stroke-[2.5]" aria-hidden="true" />
            </span>
            <span className="text-base leading-5">{label}</span>
          </button>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedCategoriesSection;
