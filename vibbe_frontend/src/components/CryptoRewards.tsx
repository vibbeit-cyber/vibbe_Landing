import VibbeCoins from "@/assets/Vibbe_Coins.png";
import VibbeWhite from "@/assets/Vibbe_White_text_logo1.png";
import React from "react";

const CryptoRewards = () => {
  return (
    <section className="w-full bg-background">
      {/* ========== MOBILE LAYOUT (< md) ========== */}
      <div className="block md:hidden pt-[5rem] pb-[3rem] px-[1rem]">
        <div className="max-w-7xl mx-auto">
          <div
            className="
              rounded-[2.5rem]
              bg-[#050509]
              text-white
              shadow-2xl
              border border-white/10
              px-[1.5rem] py-[2.5rem]
              flex items-center
            "
          >
            <div className="max-w-xl flex flex-col gap-6">
              {/* Heading */}
              <h2
                className="
                  text-left
                  text-[2rem]
                  sm:text-[2.25rem]
                  font-bold leading-tight
                "
              >
                Earn Rewards in <br /> Crypto
              </h2>

              {/* Inner dark card */}
              <div className="bg-[#1E1E1E] rounded-2xl p-6 min-h-[18rem] flex flex-col justify-between">
                <p className="text-[1rem] leading-relaxed text-white/90">
                  Build on Blockchain, Vibbe rewards all users in Vibbe Tokens
                  which could be converted to Crypto-coins on your preferred
                  crypto wallet.
                </p>

                <div className="flex items-center justify-between gap-4 mt-6">
                  <img src={VibbeCoins} alt="Vibbe_Coins" className="h-10" />
                  <img
                    src={VibbeWhite}
                    alt="Vibbe"
                    className="h-8 opacity-90"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========== DESKTOP LAYOUT (>= md) ========== */}
      <div className="hidden md:block pt-[3.3125rem] pb-[4rem] px-[2.5rem]">
        <div className="max-w-7xl mx-auto">
          <div
            className="
              rounded-[2.5rem]
              bg-[#050509]
              text-white
              shadow-2xl
              border border-white/10
              px-[3rem] py-[4rem]
              min-h-[30rem]
            "
          >
            <div className="w-full flex items-stretch gap-12">
              {/* LEFT: heading */}
              <div className="flex-1 flex flex-col justify-start">
                <h2 className="text-[2.5rem] lg:text-[3rem] font-bold leading-tight mb-4">
                  Earn Rewards in <br /> Crypto
                </h2>
              </div>

              {/* RIGHT: inner dark card */}
              <div className="flex-1 flex items-center">
                <div className="w-full bg-[#1E1E1E] rounded-[32px] p-8 lg:p-10 flex flex-col justify-between mt-20  min-h-[24rem]">
                  <p className="text-base lg:text-lg leading-relaxed text-white/90 mb-8">
                    Build on Blockchain, Vibbe rewards<br /> all users in Vibbe Tokens
                    which <br /> could be converted to Crypto-coins<br /> on your preferred
                    crypto wallet.
                  </p>

                  <div className="flex items-center justify-between">
                    <img
                      src={VibbeCoins}
                      alt="Vibbe_Coins"
                      className="h-12 lg:h-14"
                    />
                    <img
                      src={VibbeWhite}
                      alt="Vibbe"
                      className="h-8 lg:h-10 opacity-90"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CryptoRewards;
