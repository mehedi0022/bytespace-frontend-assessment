import Image from "next/image";
import TestimonialCard from "@/components/ui/TestimonialCard";

const TESTIMONIALS = [
  { image: "/assets/testominial/1.png", name: "Sarah M.", role: "Enthusiastic Learner", quote: "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning." },
  { image: "/assets/testominial/2.png", name: "James L.", role: "Lifelong Learner", quote: "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development." },
  { image: "/assets/testominial/3.png", name: "Alex B.", role: "Inspired Creator", quote: "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally." },
] as const;

const TestimonialsSection = () => (
  <section className="relative overflow-hidden border-t border-brand-blue bg-white py-20" aria-labelledby="testimonials-title">
    <Image className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover" src="/assets/testominial/bg.svg" alt="" width={1440} height={784} aria-hidden="true" />
    <div className="relative z-[1] mx-auto w-[min(1200px,calc(100%-48px))]">
      <header className="grid grid-cols-2 gap-16 max-[800px]:grid-cols-1 max-[800px]:gap-6">
        <h2 className="m-0 max-w-[520px] font-heading text-[44px] font-semibold leading-[1.15] text-black max-[640px]:text-[36px]" id="testimonials-title">Discover What Our<br />Community Is Saying</h2>
        <p className="m-0 max-w-[560px] text-lg leading-[1.6] text-shuttle-950/70">At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.</p>
      </header>
      <div className="mt-16 grid grid-cols-3 gap-10 max-[900px]:grid-cols-2 max-[640px]:grid-cols-1">
        {TESTIMONIALS.map((testimonial) => <TestimonialCard key={testimonial.name} {...testimonial} />)}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
