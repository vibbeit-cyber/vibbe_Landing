import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useState } from "react";

const BetaSignup = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!email) return;
  
    try {
      const res = await fetch("http://127.0.0.1:8000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
  
      const data = await res.json();
  
      if (res.ok) {
        console.log("SUCCESS:", data);
        alert("Thank you for signing up! 🎉");
  
        setEmail(""); // clear input
      } else {
        console.error("ERROR:", data);
        alert("Email already registered or failed.");
      }
    } catch (error) {
      console.error("NETWORK ERROR:", error);
      alert("Unable to connect to server.");
    }
  };
  return (
    <section className="w-full py-16 sm:py-20 md:py-28 px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* ========== MOBILE (< md) ========== */}
        <div className="block md:hidden">
          {/* Heading */}
          <h2
            className="
              text-left font-bold leading-tight
              text-[2rem] sm:text-[2.3rem]
              mb-6
            "
          >
            Be the First <br />
            to be a <span className="lobster">Vibber</span>
          </h2>

          {/* Card */}
          <Card
            className="
              w-full bg-white border-2 rounded-3xl shadow-sm
              px-6 py-8 sm:px-8 sm:py-10
            "
          >
            <div className="w-full">
              {/* Paragraph */}
              <p
                className="
                  text-sm sm:text-base text-foreground/80 leading-relaxed
                  mb-5 max-w-md
                "
              >
                Vibbe is soon to be available for developers, creators, and
                Beta users. Take part in our grand launch.
              </p>

              {/* Label */}
              <label
                className="
                  text-xs sm:text-sm text-foreground/80 block mb-4
                "
              >
                Join our Beta team.
              </label>

              {/* INPUT + BUTTON stacked */}
              <form onSubmit={handleSubmit} className="w-full">
                <div className="w-full space-y-3">
                  <div
                    className="
                      flex w-full bg-white border border-gray-300
                      rounded-full overflow-hidden items-center
                    "
                  >
                    <Input
                      type="email"
                      placeholder="Enter your Email ID"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="
                        flex-1 border-none shadow-none
                        px-4 py-3 sm:px-6 sm:py-4
                        text-sm sm:text-base
                        focus-visible:ring-0
                      "
                    />
                  </div>

                  <Button
                    type="submit"
                    className="
                      w-full bg-vibbe-pink hover:bg-vibbe-pink/90
                      text-white text-sm sm:text-base font-medium
                      rounded-full py-3
                    "
                  >
                    Try Vibbe Beta
                  </Button>
                </div>
              </form>
            </div>
          </Card>
        </div>

        {/* ========== DESKTOP (≥ md) ========== */}
        <div className="hidden md:block">
          {/* 3-column layout on md+ to match SocialScore responsive grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 items-start">
            {/* HEADING LEFT */}
            <div className="md:col-span-1">
              <h2
                className="
                  text-left font-bold leading-tight
                  text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.25rem]
                  mb-8 md:mb-0
                "
              >
                Be the First <br />
                to be a <span className="lobster">Vibber</span>
              </h2>
            </div>

            {/* CARD RIGHT */}
            <div className="md:col-span-2 w-full">
              <Card
                className="
                  w-full bg-white border-2 rounded-3xl shadow-sm
                  px-8 py-10 sm:px-12 sm:py-14
                  lg:px-16 lg:py-16
                  box-border
                "
              >
                {/* CONTENT WRAPPER */}
                <div className="w-full max-w-2xl">
                  {/* Paragraph */}
                  <p
                    className="
                      text-base sm:text-lg text-foreground/80 leading-relaxed
                      mb-10 sm:mb-12 lg:mb-14
                      max-w-lg
                    "
                  >
                    Vibbe is soon to be available for developers, <br /> creators, and
                    Beta users. Take part in our <br /> grand launch.
                  </p>

                  {/* Label */}
                  <label
                    className="
                      text-sm text-foreground/80 block
                      mb-3 sm:mb-4 lg:mb-5
                    "
                  >
                    Join our Beta team.
                  </label>

                  {/* INPUT + BUTTON inline */}
                  <form onSubmit={handleSubmit} className="w-full">
                    <div
                      className="
                        flex w-full bg-white border border-gray-300
                        rounded-full overflow-hidden items-center
                      "
                    >
                      <Input
                        type="email"
                        placeholder="Enter your Email ID"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="
                          flex-1 border-none shadow-none
                          px-6 py-4 sm:px-8 sm:py-5
                          text-sm sm:text-base
                          focus-visible:ring-0
                        "
                      />

                      <Button
                        type="submit"
                        className="
                          bg-vibbe-pink hover:bg-vibbe-pink/90
                          text-white text-sm sm:text-base font-medium
                          rounded-full
                          px-6 py-3 sm:px-8 sm:py-4
                          whitespace-nowrap
                          flex-shrink-0
                        "
                      >
                        Try Vibbe Beta
                      </Button>
                    </div>
                  </form>
                </div>
              </Card>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BetaSignup;
