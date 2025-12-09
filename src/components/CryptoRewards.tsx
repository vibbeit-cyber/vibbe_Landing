import VibbeCoins from "@/assets/Vibbe_Coins.png";
import VibbeWhite from "@/assets/Vibbe_White_text_logo1.png";
import React from "react";

const CryptoRewardsMobile = () => {
  return (
    <div className="w-full py-12 px-6">
      <div className="max-w-xl mx-auto flex flex-col gap-6">

        {/* Heading OUTSIDE */}
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

        {/* Dark inner card */}
        <div className="bg-[#1E1E1E] rounded-2xl p-6">

          {/* Body text */}
          <p className="text-[1rem] leading-relaxed text-white/90">
            Build on Blockchain, Vibbe rewards all users in Vibbe Tokens which
            could be converted to Crypto-coins on your preferred crypto wallet.
          </p>

          {/* Icons */}
          <div className="flex items-center justify-between gap-4 mt-6">
            <img src={VibbeCoins} alt="Vibbe_Coins" className="h-10" />
            <img src={VibbeWhite} alt="Vibbe" className="h-8 opacity-90" />
          </div>
        </div>

      </div>
    </div>
  );
};

const CryptoRewardsDesktop = () => {
  return (
    <div className="w-full">
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-0">
        <div className="relative">

          {/* Heading block */}
          <div
            className="
              w-full md:w-[445px] h-auto md:h-[94px]
              mb-8 md:mb-0
              md:absolute md:left-[90px] md:top-[70px]
              z-20
            "
          >
            <h2 className="text-[1.875rem] sm:text-[2.25rem] md:text-[3rem] font-bold leading-tight">
              Earn Rewards in <br /> Crypto
            </h2>
          </div>

          {/* INNER DARK CARD */}
          <div
            className="
              w-full md:w-[714px] h-auto md:h-[392px]
              bg-[#1E1E1E]
              md:backdrop-blur-sm
              md:rounded-[32px]
              overflow-hidden
              p-6 md:p-0
              md:absolute md:left-[606px] md:top-[80px]
              box-border
              z-10
            "
          >
            <div className="relative w-full h-full md:p-0 md:pl-0 md:pr-0">

              {/* Paragraph block */}
              <div className="w-full md:w-[360px] md:absolute md:left-[32px] md:top-[32px]">
                <p className="text-base md:text-lg leading-relaxed text-white/90">
                  Build on Blockchain, Vibbe rewards all users in Vibbe Tokens which
                  could be converted to Crypto-coins on your preferred crypto wallet.
                </p>
              </div>

              {/* Coins Bottom Left */}
              <img
                src={VibbeCoins}
                alt="Vibbe_Coins"
                className="hidden md:block md:absolute md:left-[24px] md:bottom-[24px] h-12 md:h-14"
              />

              {/* Logo Bottom Right */}
              <img
                src={VibbeWhite}
                alt="Vibbe"
                className="hidden md:block md:absolute md:right-[24px] md:bottom-[24px] h-8 md:h-12 opacity-90"
              />
            </div>
          </div>
        </div>

        {/* Spacer to avoid overlap */}
        <div className="hidden md:block md:h-[560px]" />
      </div>
    </div>
  );
};

const CryptoRewards = () => {
  return (
    <section className="relative w-full bg-[hsl(var(--dark-section))] text-white">

      {/* MOBILE ONLY */}
      <div className="block md:hidden">
        <CryptoRewardsMobile />
      </div>

      {/* DESKTOP ONLY */}
      <div className="hidden md:block">
        <CryptoRewardsDesktop />
      </div>
    </section>
  );
};

export default CryptoRewards;
