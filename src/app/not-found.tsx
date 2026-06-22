import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#f5f4f2] px-4">
      <div className="text-center">
        <h1 className="font-the-seasons mb-4 text-[72px] font-light text-[var(--dark-teal)]">
          404
        </h1>
        <h2 className="font-the-seasons mb-6 text-[28px] font-light text-[#222a2c]">
          Page Not Found
        </h2>
        <p className="font-manrope mb-8 max-w-md text-[14px] font-light text-[#3d4a4d]">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex h-[46px] items-center justify-center rounded-full bg-[var(--dark-teal)] px-8 text-[13px] font-semibold font-manrope tracking-wide uppercase text-white transition-all duration-300 hover:bg-[var(--teal)]"
          >
            Back to Home
          </Link>
          <Link
            href="/contact-us"
            className="inline-flex h-[46px] items-center justify-center rounded-full border-2 border-[var(--dark-teal)] px-8 text-[13px] font-semibold font-manrope tracking-wide uppercase text-[var(--dark-teal)] transition-all duration-300 hover:bg-[var(--dark-teal)] hover:text-white"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
