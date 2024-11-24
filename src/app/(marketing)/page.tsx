import Comparison from "./_components/comparison";
import Faq from "./_components/faq";
import { FeaturesWithHeading } from "./_components/features";
import { FeaturesBento } from "./_components/features-bento";
import { Hero } from "./_components/hero";

export default function Home() {
  return (
    <main className="relative px-2 md:px-0">
      <Hero />
      <section className="flex flex-col items-center space-y-16 md:space-y-32 my-16 md:my-32">
        <FeaturesWithHeading />
        <FeaturesBento />
        <Comparison />
        <Faq />
      </section>
    </main>
  );
}
