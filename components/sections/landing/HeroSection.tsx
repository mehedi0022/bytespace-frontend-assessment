import Image from "next/image";

const HeroSection = () => (
  <section
    className="relative min-h-[1024px] overflow-hidden bg-brand-blue pt-10 text-white max-[1100px]:min-h-[980px] max-[640px]:min-h-[1060px]"
    id="top"
    aria-labelledby="hero-title"
  >
    <Image
      className="pointer-events-none absolute left-0 top-0 z-0 h-full w-full max-w-none opacity-60"
      src="/assets/hero/hero-ornament.svg"
      alt=""
      width={500}
      height={500}
      priority
      aria-hidden="true"
    />
    <Image
      className="pointer-events-none absolute left-1/2 top-[462px] z-0 h-[1149px] w-[1149px] -translate-x-1/2 max-[640px]:top-[600px] max-[640px]:size-[760px]"
      src="/assets/hero/hero-ring.svg"
      alt=""
      width={1149}
      height={1149}
      priority
    />
    <div
      className="pointer-events-none absolute inset-0 z-0 hidden overflow-hidden min-[641px]:block"
      aria-hidden="true"
    >
      <Image
        className="absolute left-0 top-[228px] h-auto w-[198px] object-contain"
        src="/assets/hero/Frame.png"
        alt=""
        width={178}
        height={225}
      />
      <Image
        className="absolute left-[72px] top-[580px] h-auto w-[295px] object-contain"
        src="/assets/hero/Cone.png"
        alt=""
        width={195}
        height={195}
      />
      <Image
        className="absolute left-[196px] top-[450px] h-auto w-[130px] object-contain"
        src="/assets/hero/Frame%20(1).png"
        alt=""
        width={95}
        height={105}
      />
      <Image
        className="absolute right-[-30px] top-[205px] h-auto w-[165px] object-contain"
        src="/assets/hero/Cone%20(1).png"
        alt=""
        width={165}
        height={250}
      />
      <Image
        className="absolute right-[155px] top-[398px] h-[112px] w-[105px] object-contain"
        src="/assets/hero/Cone%20(2).png"
        alt=""
        width={105}
        height={112}
      />
      <Image
        className="absolute right-[75px] top-[583px] h-auto w-[225px] object-contain"
        src="/assets/hero/Frame%20(2).png"
        alt=""
        width={225}
        height={115}
      />
    </div>

    <div className="relative z-[2] mx-auto flex w-[min(1200px,calc(100%-48px))] flex-col items-center gap-[48px] pt-[74px] max-[1100px]:gap-10 max-[1100px]:pt-[96px] max-[640px]:w-[calc(100%-32px)] max-[640px]:gap-8 max-[640px]:pt-[132px]">
      <div className="flex flex-col items-center gap-8 text-center">
        <h1
          className="m-0 min-w-0 w-[935px] max-w-full font-heading text-[72px] font-semibold leading-[1.2] tracking-[-.72px] max-[1100px]:w-full max-[1100px]:text-[clamp(48px,7vw,64px)] max-[640px]:w-full max-[640px]:text-[40px] max-[640px]:break-words max-[400px]:text-[36px]"
          id="hero-title"
        >
          <span className="block">Get Access to Hundreds</span>
          <span className="block">Courses Available</span>
        </h1>
        <p className="m-0 text-lg leading-[1.6] text-shuttle-100 max-[640px]:max-w-[340px] max-[640px]:text-base">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>
      </div>
      <form
        className="flex items-start gap-4 max-[900px]:w-full max-[640px]:flex-col max-[640px]:items-stretch"
        role="search"
      >
        <label className="flex h-[52px] w-[461px] items-center gap-2 rounded-3xl bg-white px-6 py-3 max-[900px]:flex-1 max-[900px]:w-auto max-[640px]:w-full">
          <span className="relative size-6 shrink-0">
            <Image
              className="absolute left-1 top-0.5 h-5 w-4"
              src="/assets/hero/search.svg"
              alt=""
              width={16}
              height={20}
            />
          </span>
          <input
            className="min-w-0 w-full border-0 p-0 text-base leading-[1.6] text-shuttle-950 outline-none placeholder:text-shuttle-400"
            aria-label="Search courses"
            placeholder="Course, topic, creator"
          />
        </label>
        <button
          className="h-[46px] rounded-3xl border-0 bg-brand-lime px-6 py-3 text-lg font-medium leading-[1.2] text-shuttle-950 max-[640px]:self-center"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
    <div
      className="absolute left-1/2 top-[490px] z-[1] h-auto w-[578px] -translate-x-1/2 max-[1100px]:top-[500px] max-[1100px]:scale-[.82] max-[640px]:top-[480px] max-[640px]:scale-[.6]"
      aria-hidden="true"
    >
      <Image
        className="block h-full w-[578px] bottom-0 object-cover drop-shadow-[16px_24px_32px_rgba(0,0,0,.16)]"
        src="/assets/hero/hero-main.png"
        alt=""
        width={578}
        height={541}
        priority
      />
    </div>
    <div
      className="absolute left-[calc(50%+122px)] top-[531px] z-[3] h-[131px] w-[232px] rounded-2xl bg-white p-4 text-shuttle-950 shadow-[0_18px_40px_rgba(0,0,0,.1)] max-[1100px]:left-[calc(50%+100px)] max-[1100px]:top-[545px] max-[1100px]:scale-[.82] max-[640px]:right-3 max-[640px]:left-auto max-[640px]:top-[690px] max-[640px]:scale-[.66] max-[640px]:origin-top-right"
      aria-label="Learning progress: 55 percent"
    >
      <span className="block text-xs leading-4">Learning Progress</span>
      <strong className="mt-1 block text-[44px] font-semibold leading-none">
        55%
      </strong>
      <span className="mt-3 block h-2 w-full rounded-full bg-shuttle-100">
        <span className="block h-full w-[55%] rounded-full bg-brand-lime" />
      </span>
    </div>
    <div
      className="absolute left-[calc(50%-316px)] top-[519px] z-[3] flex h-[70px] w-[208px] flex-col gap-2 rounded-2xl bg-white/[.96] p-4 text-base leading-[1.2] text-shuttle-950 shadow-[0_18px_40px_rgba(0,0,0,.1)] max-[1100px]:left-[calc(50%-300px)] max-[1100px]:top-[550px] max-[1100px]:scale-[.82] max-[640px]:left-3 max-[640px]:top-[690px] max-[640px]:origin-top-left max-[640px]:scale-[.66]"
      aria-hidden="true"
    >
      <strong>UI/UX Design</strong>
      <span className="whitespace-nowrap text-xs">
        200 Courses <i className="mx-2 not-italic">•</i> 1000+ Students
      </span>
    </div>
    <div
      className="absolute left-[calc(50%-392px)] top-[717px] z-[3] min-h-[121px] w-[258px] rounded-2xl bg-white/[.96] p-4 text-base leading-[1.2] text-shuttle-950 shadow-[0_18px_40px_rgba(0,0,0,.1)] max-[1100px]:left-[calc(50%-360px)] max-[1100px]:top-[770px] max-[1100px]:scale-[.82] max-[640px]:left-1/2 max-[640px]:top-[825px] max-[640px]:origin-top-left max-[640px]:-translate-x-1/2 max-[640px]:scale-[.66]"
      aria-hidden="true"
    >
      <strong>Happy Students</strong>
      <span className="mt-0.5 block text-xs">
        4.5 (240) <b className="text-sm text-[#ffbf00]">★</b>
      </span>
      <div className="mt-4 flex">
        {[1, 2, 3, 4, 5, 6, 7].map((avatar) => (
          <Image
            className="-mr-4 size-[43px] rounded-full border-2 border-white object-cover"
            key={avatar}
            src={`/assets/hero/cards/avatar-${avatar}.png`}
            alt=""
            width={43}
            height={43}
          />
        ))}
        <span className="-mr-4 grid size-[43px] place-items-center rounded-full border-2 border-white bg-shuttle-950 text-xs text-white">
          2K+
        </span>
      </div>
    </div>
  </section>
);

export default HeroSection;
