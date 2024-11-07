import PropertySearchForm from "./PropertySearchForm";
import { InfoBox } from "./InfoBox";
import Link from 'next/link';

function Hero() {
  return (
    <section className="bg-blue-700 py-20 mb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            Guest book
          </h1>
          <p className="my-4 text-xl text-white">
          Serve with professionalism, integrity and trust
          </p>
        </div>
        <Link
            href="/guestform"
            className="flex items-center gap-5 rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Fill Guest Form </span>
          </Link>
        {/* <PropertySearchForm /> */}
      </div>
    </section>
  );
}
export default Hero;
