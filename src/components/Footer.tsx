import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center md:items-start justify-between gap-4">
        <div className="text-center md:text-left">
          <p
            className="text-white text-sm font-bold uppercase"
            style={{
              fontFamily: '"Century Gothic", "Montserrat", sans-serif',
              letterSpacing: "0.02em",
            }}
          >
            GRAHAM HARRIS PARTNERSHIP Ltd.
          </p>
          <p
            className="text-xs uppercase text-gray-400"
            style={{
              fontFamily: '"Century Gothic", "Montserrat", sans-serif',
              letterSpacing: "0.25em",
            }}
          >
            ARCHITECTURAL SERVICES
          </p>
          <p className="text-xs text-gray-500 mt-2">
            &copy; {new Date().getFullYear()} Graham Harris Partnership
          </p>
        </div>
        <nav className="flex items-center text-xs md:text-sm">
          <Link
            href="/contact"
            className="hover:text-white transition-colors"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </footer>
  );
}
