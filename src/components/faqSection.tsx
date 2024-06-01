import { Plus, Minus } from "lucide-react";

function FaqSection() {
  return (
    <section className="flex flex-col items-center py-[15vw] md:pb-2 px-[5vw] gap-4">
      <h2 className="text-[32px] font-bold text-center leading-tight md:text-[40px]">
        Frequently Asked Questions
      </h2>
      <div className="w-full flex flex-col gap-4">
        <div className="bg-faqButtonColor w-full h-fit">
          <button className="p-[24px] text-[16px] md:text-[20px] font-bold w-full flex justify-between">What is Disney+? <Plus /></button>
        </div>
        <div className="bg-faqButtonColor w-full h-fit">
          <button className="p-[24px] text-[16px] md:text-[20px] font-bold w-full flex justify-between">What can I watch on Disney+? <Plus /></button>
        </div>
        <div className="bg-faqButtonColor w-full h-fit">
          <button className="p-[24px] text-[16px] md:text-[20px] font-bold w-full flex justify-between">How much does Disney+ cost? <Plus /></button>
        </div>
        <div className="bg-faqButtonColor w-full h-fit">
          <button className="p-[24px] text-[16px] md:text-[20px] font-bold w-full flex justify-between">What devices are supported? <Plus /></button>
        </div>
        <div className="bg-faqButtonColor w-full h-fit">
          <button className="p-[24px] text-[16px] md:text-[20px] font-bold w-full flex justify-between text-left">Is there any commitment when signing up for Disney+? <Plus/></button>
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
