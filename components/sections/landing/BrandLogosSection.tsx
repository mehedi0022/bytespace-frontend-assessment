import Image from "next/image";

const BRAND_LOGOS = [
  { src: "/assets/hero/logo/1.png", alt: "brand one" },
  { src: "/assets/hero/logo/2.png", alt: "brand two" },
  { src: "/assets/hero/logo/3.png", alt: "brand three" },
  { src: "/assets/hero/logo/4.png", alt: "brand four" },
  { src: "/assets/hero/logo/5.png", alt: "brand five" },
] as const;

const BrandLogosSection = () => (
  <section className="bg-shuttle-50" aria-label="Trusted brands">
    <div className="mx-auto flex h-[202px] w-[min(1200px,calc(100%-48px))] items-center justify-between gap-10 max-[900px]:h-auto max-[900px]:flex-wrap max-[900px]:justify-center max-[900px]:py-12 max-[640px]:gap-8">
      {BRAND_LOGOS.map((logo) => (
        <Image
          className="h-auto w-[147px] object-contain max-[900px]:w-[167px] max-[640px]:w-[157px]"
          key={logo.src}
          src={logo.src}
          alt={logo.alt}
          width={167}
          height={41}
        />
      ))}
    </div>
  </section>
);

export default BrandLogosSection;
