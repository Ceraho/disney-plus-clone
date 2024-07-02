import Image from "next/image";
import EnterPasswordForm from "./enterPasswordForm";

const EnterPasswordContainer = () => {
  return (
    <div className="flex flex-col items-start pt-[32px] px-[24px] h-full bg-white rounded-t-3xl gap-6 md:rounded-3xl md:w-[580px] md:h-fit md:py-[56px] md:px-[72px]">
      <Image
        className="self-start md:w-[98px]"
        src="/MyDisneyLogo.svg"
        width={85}
        height={100}
        alt="My Disney Logo"
      />
      <div className="flex flex-col">
        <div className="text-black mt-[8px] text-[12px] font-semibold">
          STEP 2
        </div>
        <h1 className="text-black text-[24px] font-semibold leading-9 md:text-[28px]">
          Enter your password
        </h1>
      </div>
      <p className="text-black break-words text-[14px]">
        Log in to Disney+ with your MyDisney account using email:
      </p>
      <EnterPasswordForm />
    </div>
  );
};

export default EnterPasswordContainer;
