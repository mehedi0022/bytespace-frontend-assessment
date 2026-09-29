type CourseCardProps = {
  title: string;
  image: string;
  rating?: string;
};

import { SignalHigh } from "lucide-react";

const CourseCard = ({ title, image, rating = "4.5" }: CourseCardProps) => (
  <article className="rounded-3xl border border-shuttle-100 bg-white p-4">
    <div className="relative h-[195px] overflow-hidden rounded-2xl bg-shuttle-100">
      <img className="h-full w-full object-cover" src={image} alt="" />
      <div className="absolute inset-x-3 bottom-3 flex justify-between gap-2 text-xs text-shuttle-950">
        {["17 Lessons", "2 hours 16 mins", "59 Comments"].map((label) => (
          <span className="rounded-full bg-white/85 px-3 py-2" key={label}>
            {label}
          </span>
        ))}
      </div>
    </div>
    <div className="mt-5 flex items-start justify-between gap-3">
      <div>
        <h3 className="m-0 text-xl font-semibold text-shuttle-950">{title}</h3>
        <p className="mt-1 text-xs text-shuttle-400">
          by <span className="text-brand-blue">purepearl studio</span>
        </p>
      </div>
      <span className="whitespace-nowrap text-base text-shuttle-950/70">
        {rating} <span className="text-shuttle-400">★</span>
      </span>
    </div>
    <div className="mt-4 flex items-center justify-between gap-3">
      <span className="rounded-full bg-shuttle-50 px-4 py-1 text-xs text-shuttle-950/80 flex flex-row items-end gap-1">
        <SignalHigh /> <span>High Demand</span>
      </span>
      <div className="flex -space-x-2">
        {["#f2a6a6", "#d9b49b", "#6fa4d8", "#273c75", "#d4fb20"].map(
          (color) => (
            <span
              className="size-8 rounded-full border-2 border-white"
              style={{ backgroundColor: color }}
              key={color}
            />
          ),
        )}
        <span className="grid size-8 place-items-center rounded-full border-2 border-white bg-brand-lime text-xs">
          26+
        </span>
      </div>
    </div>
    <p className="mt-4 mb-0 text-2xl font-semibold text-brand-blue">
      $25<span className="text-xs font-normal text-shuttle-400">/lifetime</span>
    </p>
  </article>
);

export default CourseCard;
