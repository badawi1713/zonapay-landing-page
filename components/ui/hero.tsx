import React from "react";
import { Button } from "./button";
import Image from "next/image";

function Hero() {
  return (
    <section className="relative h-auto bg-gradient-to-b from-gradientBlueX to-gradientBlueY lg:static lg:max-h-screen lg:min-h-screen">
      <div className="container flex h-full flex-col gap-0 py-8 lg:h-screen lg:flex-row lg:items-center lg:justify-center lg:pt-20">
        <div>
          <h2 className="mb-2 text-2xl font-bold text-white lg:w-2/3 lg:text-4xl 2xl:text-5xl">
            Get things done with this beautiful app.
          </h2>
          <h5 className="mb-8 w-4/6 font-light text-white lg:w-2/3 2xl:text-xl">
            {`Charles tosser quaint twit bamboozled burke brown bread I naff I
            don't want no agro say blimey!`}
          </h5>
          <Button className="w-full xs:w-auto">
            Download on the Playstore
          </Button>
        </div>
        <div className="hidden aspect-auto shrink-0 lg:flex xl:hidden">
          <Image
            src={"/assets/images/img-mobile-preview.png"}
            className="animate-float"
            width={180}
            height={280}
            alt="zonapay-preview"
          />
        </div>
        <div className="hidden aspect-auto shrink-0 xl:flex 2xl:hidden">
          <Image
            src={"/assets/images/img-mobile-preview.png"}
            className="animate-float"
            width={220}
            height={280}
            alt="zonapay-preview"
          />
        </div>
        <div className="hidden aspect-auto shrink-0 2xl:block">
          <Image
            src={"/assets/images/img-mobile-preview.png"}
            className="animate-float"
            width={280}
            height={280}
            alt="zonapay-preview"
          />
        </div>
      </div>
      <div
        className="md:[180px] bottom-0 right-8 hidden h-[150px] w-[120px] bg-cover bg-no-repeat xs:absolute xs:block sm:h-[180px] sm:w-[130px] md:h-[200px] md:w-[210px] lg:relative lg:hidden"
        style={{
          backgroundImage: "url('/assets/images/img-mobile-preview.png')",
        }}
      />
    </section>
  );
}

export default Hero;
