import Image from "next/image";

type TestimonialCardProps = {
  image: string;
  name: string;
  role: string;
  quote: string;
};

const TestimonialCard = ({ image, name, role, quote }: TestimonialCardProps) => (
  <article className="rounded-[24px] bg-white p-6">
    <Image className="size-20 rounded-full object-cover" src={image} alt="" width={80} height={80} />
    <h3 className="mt-6 mb-0 text-xl font-semibold text-shuttle-950">{name}</h3>
    <p className="mt-1 mb-0 text-lg text-brand-blue">{role}</p>
    <p className="mt-7 mb-0 text-lg leading-[1.6] text-shuttle-950/70">&quot;{quote}&quot;</p>
  </article>
);

export default TestimonialCard;
