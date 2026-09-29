import Image from "next/image";

const CreatorCTASection = () => (
  <section
    className="relative min-h-[488px] overflow-hidden bg-brand-blue text-white"
    aria-labelledby="creator-cta-title"
  >
    <div
      className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_18%_18%,rgba(203,252,1,.42),transparent_22%),radial-gradient(circle_at_86%_22%,rgba(203,252,1,.28),transparent_18%),radial-gradient(circle_at_8%_92%,rgba(255,255,255,.2),transparent_16%)]"
      aria-hidden="true"
    />
    <Image
      className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      src="/assets/unlockpotential/bg.svg"
      alt=""
      width={1440}
      height={488}
      priority
      aria-hidden="true"
    />

    <div className="relative z-[2] mx-auto flex min-h-[488px] w-[min(1000px,calc(100%-48px))] flex-col items-center justify-center text-center">
      <h2
        className="m-0 max-w-[720px] font-heading text-[44px] font-semibold leading-[1.2] max-[640px]:text-[34px]"
        id="creator-cta-title"
      >
        Unlock Your Potential as a<br className="max-[640px]:hidden" /> Creator
        with ByteSpace
      </h2>
      <p className="mt-10 max-w-[1000px] text-lg leading-8 text-white/90 max-[640px]:mt-6 max-[640px]:text-base max-[640px]:leading-6">
        Experience the collaboration of numerous creators and an expanding
        selection of courses. Register now and become a part of a community
        comprising over 10,000 local and international creators. Utilize our
        Course Editor, and showcase your expertise by publishing your finest
        course on the ByteSpace Course Library.
      </p>
      <button
        className="mt-10 rounded-full bg-brand-lime px-6 py-3 text-lg text-shuttle-950 transition-transform hover:scale-105"
        type="button"
      >
        Join as Creator
      </button>
    </div>
  </section>
);

export default CreatorCTASection;
