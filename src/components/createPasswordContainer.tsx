import Image from "next/image";
import CreatePasswordForm from "./createPasswordForm";

const CreatePasswordContainer = () => {
  return (
    <div className="flex flex-col items-start pt-[32px] px-[24px] pb-[64px] bg-white rounded-t-3xl gap-6 md:rounded-3xl md:w-[580px] md:h-fit md:py-[56px] md:px-[72px]">
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
          Create an account to continue
        </h1>
      </div>
      <p className="text-black break-words text-[14px]">
        With a MyDisney account, you can log in to Disney+ and other services
        across The Walt Disney Family of Companies.
      </p>
      <p className="text-black break-words text-[14px]">
      Create your account using 
      </p>
      <CreatePasswordForm />
    </div>
  );
};

export default CreatePasswordContainer;
