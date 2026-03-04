import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <p
            className="text-white text-sm font-bold uppercase"
            style={{
              fontFamily: '"Century Gothic", "Montserrat", sans-serif',
              letterSpacing: "0.02em",
            }}
          >
            GRAHAM HARRIS PARTNERSHIP Ltd.
          </p>
          <span className="text-gray-500 text-xs hidden md:inline">|</span>
          <p
            className="text-xs uppercase text-gray-400 hidden md:inline"
            style={{
              fontFamily: '"Century Gothic", "Montserrat", sans-serif',
              letterSpacing: "0.25em",
            }}
          >
            ARCHITECTURAL SERVICES
          </p>
        </div>
        <div className="flex items-center gap-4 text-xs md:text-sm">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Graham Harris Partnership
          </p>
          <Link
            href="/contact"
            className="hover:text-white transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
}
