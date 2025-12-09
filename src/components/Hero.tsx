import React from 'react';
const Hero = () => {
  return (
    <section className="w-full py-16 md:py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl mb-6 leading-tight">
          Find people,<br />
          who match your<br />

          <span
            className="
              inline-block
              font-[PublicSans]
              text-[#DD2D4A]
              text-6xl md:text-7xl
              font-bold
            "
          >
            Vibbe
          </span>
        </h1>

        <p className="text-lg md:text-xl text-foreground/80 max-w-md mx-auto">
          World's First Social Media Platform that <br /> rewards every user
        </p>
      </div>
    </section>
  );
};

export default Hero;
