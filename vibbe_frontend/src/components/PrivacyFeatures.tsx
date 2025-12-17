const PrivacyFeatures = () => {
  const features = [
    {
      title: "Stay Discreet <br /> follow anonymous",
      description:
        "Blind date on Vibbe lets you chat <br /> with anonymous. You can chat <br /> with random strangers without the <br /> pressure of revealing your identity.",
    },
    {
      title: "One Login <br /> Multiple Alter-Ego's",
      description:
        "You can manage multiple profiles <br /> under one sign-in keeping your <br /> friends and conversations <br /> independent in each profile.",
    },
    {
      title: "Know your <br /> Stalkers",
      description:
        "Vibbe premium keeps you informed <br /> about your profile visitors. You can <br /> now easily know those who are <br /> interested.",
    },
  ];

  return (
    <section className="w-full bg-background py-16 md:py-24">
      <div className="px-4 md:px-8">
        {/* Pink container */}
        <div
          className="
            max-w-7xl mx-auto
            rounded-[2.5rem]
            bg-gradient-to-r from-[#FF4D6D] to-[#DD2D4A]
            text-white
            border border-white/10
            shadow-2xl
            px-6 py-12 md:px-12 md:py-20
          "
        >
          {/* MOBILE */}
          <div className="block md:hidden">
            <h2
              className="
                font-bold leading-tight
                text-[2rem] sm:text-[2.2rem]
                mb-8 sm:mb-10
              "
            >
              Your New Social Network <br />
              Built for Privacy
            </h2>

            <div className="grid grid-cols-1 gap-6">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="
                    bg-white/10 border border-white/20 rounded-3xl
                    p-6 sm:p-7 hover:shadow-lg transition
                    space-y-3
                  "
                >
                  <h3
                    className="
                      font-semibold
                      text-[1.05rem] leading-snug
                    "
                    dangerouslySetInnerHTML={{ __html: f.title }}
                  />

                  <p
                    className="
                      text-[0.95rem]
                      text-white/70
                      leading-relaxed
                    "
                    dangerouslySetInnerHTML={{ __html: f.description }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* DESKTOP */}
          <div className="hidden md:block">
            <h2
              className="
                font-bold leading-tight
                text-[2.5rem] md:text-[3rem]
                mb-10 md:mb-12
              "
            >
              Your New Social Network <br />
              Built for Privacy
            </h2>

            <div className="grid grid-cols-3 gap-8 md:gap-10 lg:gap-14">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="
                    bg-white/10 border border-white/20 rounded-3xl
                    p-8 lg:p-10 hover:shadow-lg transition
                    space-y-3
                  "
                >
                  <h3
                    className="
                      font-semibold
                      text-[1.25rem] leading-snug
                    "
                    dangerouslySetInnerHTML={{ __html: f.title }}
                  />

                  <p
                    className="
                      text-[1rem]
                      text-white/70 leading-relaxed
                    "
                    dangerouslySetInnerHTML={{ __html: f.description }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyFeatures;
