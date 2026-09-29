import Image from "next/image";
import Link from "next/link";

type AuthMode = "signin" | "signup";

const AuthPage = ({ mode }: { mode: AuthMode }) => {
  const isSignIn = mode === "signin";

  return (
    <main className="relative min-h-screen overflow-hidden bg-brand-blue text-white flex items-center justify-center p-4">
      {/* Background Grid Accent */}
      <div className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,transparent_119px,rgba(255,255,255,.22)_120px,transparent_121px),linear-gradient(to_bottom,transparent_119px,rgba(255,255,255,.22)_120px,transparent_121px)] [background-size:120px_120px]" />

      <div className="relative z-[1] mx-auto grid w-full max-w-[1180px] grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_480px] xl:grid-cols-[1fr_520px] xl:gap-12">
        {/* Left Side (Desktop & Tablet Hero Section) */}
        <section className="hidden self-center lg:flex lg:flex-col">
          <Link
            className="inline-flex items-center gap-2 text-white no-underline"
            href="/"
            aria-label="ByteSpace home"
          >
            <Image src="/assets/logo/menu.svg" alt="" width={38} height={42} />
          </Link>
          <h1 className="mt-6 text-2xl font-semibold font-heading xl:mt-8 xl:text-[28px]">
            {isSignIn ? "Sign in with ease" : "Join ByteSpace today"}
          </h1>
          <p className="mt-3 max-w-[480px] text-base text-white/90 xl:text-lg xl:leading-relaxed">
            {isSignIn
              ? "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
              : "Create your account and unlock a world of knowledge, creativity, and opportunity."}
          </p>
          <div className="mt-6 flex justify-start xl:mt-8">
            <Image
              className="h-auto w-full max-w-[400px] max-h-[320px] object-contain xl:max-w-[460px] xl:max-h-[380px]"
              src="/assets/login/login.png"
              alt="ByteSpace learning dashboard"
              width={563}
              height={562}
              priority
            />
          </div>
        </section>

        {/* Auth Card Container */}
        <section
          className="mx-auto w-full max-w-[480px] rounded-2xl bg-white p-6 text-shuttle-950 shadow-2xl sm:rounded-3xl sm:p-8 lg:p-9"
          aria-labelledby="auth-title"
        >
          {/* Mobile Header Logo */}
          <div className="mb-4 flex items-center justify-between lg:hidden">
            <Link href="/" aria-label="ByteSpace home">
              <Image
                src="/assets/logo/menu.svg"
                alt=""
                width={32}
                height={36}
              />
            </Link>
          </div>

          <p className="m-0 text-base font-medium text-brand-blue sm:text-lg">
            {isSignIn ? "Sign In" : "Sign Up"}
          </p>

          <h2
            className="mt-1 text-2xl font-semibold font-heading leading-tight text-shuttle-950 sm:text-3xl lg:text-[34px]"
            id="auth-title"
          >
            {isSignIn ? "Welcome Back" : "Create Account"}
          </h2>

          <form className="mt-5 space-y-3.5 sm:mt-6" action="#" method="post">
            {!isSignIn && (
              <label className="block text-sm font-medium text-shuttle-950">
                Full Name
                <input
                  className="mt-1 h-11 w-full rounded-xl border border-shuttle-100 px-4 text-sm outline-none focus:border-brand-blue sm:h-12 sm:text-base"
                  type="text"
                  placeholder="Your name"
                />
              </label>
            )}

            <label className="block text-sm font-medium text-shuttle-950">
              Email
              <input
                className="mt-1 h-11 w-full rounded-xl border border-shuttle-100 px-4 text-sm outline-none focus:border-brand-blue sm:h-12 sm:text-base"
                type="email"
                placeholder="designer@example.com"
              />
            </label>

            <label className="block text-sm font-medium text-shuttle-950">
              Password
              <input
                className="mt-1 h-11 w-full rounded-xl border border-shuttle-100 px-4 text-sm outline-none focus:border-brand-blue sm:h-12 sm:text-base"
                type="password"
                placeholder="********"
              />
            </label>

            {!isSignIn && (
              <label className="block text-sm font-medium text-shuttle-950">
                Confirm Password
                <input
                  className="mt-1 h-11 w-full rounded-xl border border-shuttle-100 px-4 text-sm outline-none focus:border-brand-blue sm:h-12 sm:text-base"
                  type="password"
                  placeholder="********"
                />
              </label>
            )}

            <div className="flex justify-end pt-1">
              <button
                className="w-full rounded-full bg-brand-lime px-6 py-2.5 text-base font-semibold text-shuttle-950 transition-opacity hover:opacity-90 sm:w-auto sm:px-7 sm:py-3"
                type="submit"
              >
                {isSignIn ? "Sign In" : "Sign Up"}
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 pt-5 text-xs text-shuttle-400 sm:pt-6 sm:text-sm">
            <span className="h-px flex-1 bg-shuttle-100" />
            or
            <span className="h-px flex-1 bg-shuttle-100" />
          </div>

          {/* Social Sign-In Buttons */}
          <div className="mt-4 flex justify-center gap-3.5 sm:mt-5">
            <button
              className="grid size-12 place-items-center rounded-xl border border-shuttle-100 text-lg font-bold transition-colors hover:bg-shuttle-50 sm:size-14 sm:rounded-2xl sm:text-xl"
              type="button"
              aria-label="Continue with Facebook"
            >
              f
            </button>
            <button
              className="grid size-12 place-items-center rounded-xl border border-shuttle-100 text-lg font-bold transition-colors hover:bg-shuttle-50 sm:size-14 sm:rounded-2xl sm:text-xl"
              type="button"
              aria-label="Continue with Google"
            >
              G
            </button>
          </div>

          {/* Footer Link */}
          <p className="mt-5 text-center text-sm text-shuttle-400 sm:mt-6">
            {isSignIn ? "New user?" : "Already have an account?"}{" "}
            <Link
              className="font-medium text-brand-blue no-underline hover:underline"
              href={isSignIn ? "/sign-up" : "/sign-in"}
            >
              {isSignIn ? "Create an account" : "Sign in"}
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
};

export default AuthPage;
