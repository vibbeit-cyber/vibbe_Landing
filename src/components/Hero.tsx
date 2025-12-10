import VibbePink from "@/assets/Vibbe pink  text logo.png";

const Hero = () => {
  return (
      <section className="w-full px-4 pt-20 pb-16 md:px-6 md:pt-36 md:pb-24">

      <div className="max-w-4xl mx-auto text-center">

        {/* ===== MOBILE VERSION ( < md ) ===== */}
        <div className="block md:hidden">
          <h1
            className="
              text-[2rem]
              sm:text-[2.5rem]
              font-bold
              leading-tight
              mb-4
            "
          >
            Find people,<br />
            who match your{" "}
            
            
            <img
              src={VibbePink}
              alt="VibbePink"
              className="inline-block h-[2.5rem] align-topment-baseline mb-1"
            />
          </h1>

          <p className="text-base text-foreground/80 max-w-md mx-auto">
            World&apos;s First Social Media Platform that
            <br />
            rewards every user
          </p>
        </div>

        {/* ===== DESKTOP / TABLET VERSION ( ≥ md ) ===== */}


        <div className="hidden md:block">
          <h1
            className="
              text-[3.5rem]
              lg:text-[4rem]
              font-bold
              leading-tight
              mb-6
            "
          >
            Find people,<br /> who match your{" "}
            <img
              src={VibbePink}
              alt="VibbePink"
              className="inline-block h-[5rem] mb-2 align-middle"
            />
          </h1>

          <p className="text-lg md:text-xl text-foreground/80 max-w-md mx-auto">
            World&apos;s First Social Media Platform that
            <br />
            rewards every user
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
