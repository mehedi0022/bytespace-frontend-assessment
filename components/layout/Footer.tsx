import Image from "next/image";

const FOOTER_COLUMNS = [
  ["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
  ["Development", "Marketing", "Photography", "Finance", "Sport"],
  ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"],
] as const;

const Footer = () => (
  <footer className="min-h-[524px] bg-white text-shuttle-950">
    <div className="mx-auto w-[min(1200px,calc(100%-48px))]">
      <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-12 pt-[58px] max-[800px]:grid-cols-2 max-[800px]:gap-8 max-[640px]:grid-cols-1">
        <div>
          <a
            className="flex items-center gap-2 text-inherit no-underline"
            href="#top"
            aria-label="ByteSpace home"
          >
            <Image src="/assets/logo/menu.svg" alt="" width={29} height={32} />
            <span className="font-heading text-2xl font-bold">ByteSpace</span>
          </a>
          <p className="mt-5 max-w-[470px] text-sm leading-5 text-shuttle-950/80">
            Stay Up to date with our latest features and releases by joining our
            newsletter.
          </p>
          <form
            className="mt-10 flex max-w-[505px] items-center gap-4"
            action="#"
            method="post"
          >
            <label className="sr-only" htmlFor="footer-email">
              Email address
            </label>
            <input
              className="h-[52px] w-[376px] min-w-0 flex-1 rounded-full border border-shuttle-100 px-6 text-base outline-none placeholder:text-shuttle-400"
              id="footer-email"
              type="email"
              placeholder="Enter your email"
            />
            <button
              className="h-[46px] w-[104px] shrink-0 rounded-full bg-brand-lime text-base text-shuttle-950"
              type="submit"
            >
              Search
            </button>
          </form>
          <p className="mt-4 max-w-[470px] text-[10px] leading-4 text-shuttle-950/70">
            By subscribing, you agree to our Privacy Policy and consent to
            receive updates from our company.
          </p>
        </div>
        {FOOTER_COLUMNS.map((column) => (
          <nav
            className="flex flex-col gap-5 pt-1"
            key={column[0]}
            aria-label={`${column[0]} links`}
          >
            {column.map((link) => (
              <a
                className="text-sm text-shuttle-950/80 no-underline transition-colors hover:text-brand-blue"
                href="#"
                key={link}
              >
                {link}
              </a>
            ))}
          </nav>
        ))}
      </div>
      <div className="mt-[135px] flex items-center justify-between border-t border-shuttle-100 py-6 text-[10px] text-shuttle-950/70 max-[640px]:mt-16 max-[640px]:flex-col max-[640px]:items-start max-[640px]:gap-3">
        <p className="m-0">
          © {new Date().getFullYear()} ByteSpace. All rights reserved.
        </p>
        <div className="flex gap-5">
          {["Privacy Policy", "Terms of Service", "Cookies Settings"].map(
            (link) => (
              <a
                className="text-inherit no-underline hover:text-brand-blue"
                href="#"
                key={link}
              >
                {link}
              </a>
            ),
          )}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
