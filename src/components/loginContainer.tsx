import Image from "next/image";
import LoginForm from "./loginForm";

const LoginContainer = () => {
  return (
    <div className="flex flex-col items-center pt-[32px] px-[24px] pb-[64px] bg-white rounded-t-3xl gap-6 h-screen md:rounded-3xl md:w-[580px] md:h-fit md:py-[56px] md:px-[72px]">
      <Image
        className="self-start md:w-[98px]"
        src="/MyDisneyLogo.svg"
        width={85}
        height={100}
        alt="My Disney Logo"
      />
      <div className="flex flex-col items-center">
        <div className="self-start text-black mt-[8px] text-[12px] font-semibold">
          STEP 1
        </div>
        <h1 className="text-black text-[24px] font-semibold leading-9 md:text-[28px]">
          Enter your email address to continue
        </h1>
      </div>
      <p className="text-black break-words text-[14px]">
        Log in to Disney+ with your MyDisney account. If you don’t have one, you
        will be prompted to create one.
      </p>
      <LoginForm />
      <div className="text-gray-500 border-t-[1px] pt-8 mt-2">
        <p className="text-[14px] font-semibold mb-2">
          Disney+ is part of The Walt Disney Family of Companies
        </p>
        <p className="text-[12px] leading-snug">
          MyDisney lets you seamlessly log in to services and experiences across
          The Walt Disney Family of Companies, such as Disney+, ESPN, Walt
          Disney World,{" "}
          <a href="/" className="t text-blue-600">
            and more.
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginContainer;
