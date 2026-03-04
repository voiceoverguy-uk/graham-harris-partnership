import Link from "next/link";

export default function Header() {
  return (
    <header className="pt-8 pb-2 text-center">
      <Link href="/" className="inline-block">
        <div className="border-t-2 border-b border-gray-800 pt-1 pb-0.5 mb-0.5">
          <div className="border-b-2 border-gray-800 pb-1">
            <h1
              className="text-2xl md:text-3xl font-bold text-gray-900"
              style={{
                fontFamily: '"Century Gothic", "Montserrat", sans-serif',
                letterSpacing: "0.02em",
              }}
            >
              GRAHAM HARRIS PARTNERSHIP Ltd.
            </h1>
          </div>
        </div>
        <p
          className="text-sm md:text-base uppercase text-gray-900 mt-1"
          style={{
            fontFamily: '"Century Gothic", "Montserrat", sans-serif',
            fontWeight: 400,
            letterSpacing: "0.35em",
          }}
        >
          ARCHITECTURAL SERVICES
        </p>
      </Link>
    </header>
  );
}
