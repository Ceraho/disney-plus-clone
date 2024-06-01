import { ChevronDown } from "lucide-react";
import Link from "next/link";

function HeroSection() {
  return (
    <section className="flex flex-col items-center min-h-[70vh] pt-[40vw] px-[5vw] pb-0 gap-6 md:pt-[22vw] md:justify-center md:h-dvh">
      <h1 className="text-[32px] font-bold text-center leading-tight md:text-[44px]">
        Stream brand new Originals, blockbusters, binge-worthy series and more
      </h1>
      <h4 className="text-[18px] font-bold">
        Cancel at any time.*
      </h4>
      <p className="text-[16px] text-silver text-center">
        Enter your email to create or restart your subscription.
      </p>
      <form action="" className="md:flex md:justify-between md:w-3/5">
        <input
          type="email"
          name="email"
          className="rounded box-border bg-emailInputFieldColor border border-emailInputFieldColor h-[50px] px-[12px] w-full mb-2"
          placeholder="Email"
        />
        <button
          type="submit"
          className="rounded box-border text-signUpButtonTextColor bg-signUpButtonBgColor border border-signUpButtonBgColor h-[50px] px-[12px] w-full md:max-w-[260px]"
        >
          SIGN UP NOW
        </button>
      </form>
      <p className="text-silver text-[18px] text-center">
        Get 12 months for the price of 10 with an annual subscription, compared
        to paying monthly.
      </p>
      <p className="text-silver text-[12px] text-center">
        *Effective at the end of the billing period. Subscription required.{" "}
      </p>
      <button className="animate-bounce pt-5 opacity-60 mb-12">
        <ChevronDown color="#f9f9f9" size={36} />
      </button>
    </section>
  );
}

export default HeroSection;
