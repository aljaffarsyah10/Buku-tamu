import PropertySearchForm from "./PropertySearchForm";
import { InfoBox } from "./InfoBox";

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
        <a
        href={buttonInfo.link}
        className={`inline-block ${buttonInfo.backgroundColor} text-white rounded-lg px-4 py-2 hover:opacity-80`}
      >
        {buttonInfo.text}
      </a>
        {/* <PropertySearchForm /> */}
      </div>
    </section>
  );
}
export default Hero;
