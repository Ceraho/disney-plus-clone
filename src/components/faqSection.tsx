"use client";

import { Plus, Minus } from "lucide-react";
import { useState } from "react";

function FaqSection() {
  const [faqs, setFaqs] = useState([
    { question: "What is Disney+?", answer: "Disney+ is a streaming service that offers a wide range of movies, TV shows and original content.", isOpen: false },
    { question: "What can I watch on Disney+?", answer: "Disney+ offers a variety of content including movies, TV shows, and original content.", isOpen: false },
    { question: "How much does Disney+ cost?", answer: "The cost of Disney+ varies depending on the country and the subscription plan.", isOpen: false },
    { question: "What devices are supported?", answer: "Disney+ is available on a variety of devices including smart TVs, smartphones, tablets, and streaming devices.", isOpen: false },
    { question: "Is there any commitment when signing up for Disney+?", answer: "There is a commitment when signing up for Disney+, but it can be cancelled at any time.", isOpen: false },
  ]);

  const toggleFaq = (index: number) => {
    const newFaqs = [...faqs];
    newFaqs[index].isOpen = !newFaqs[index].isOpen;
    setFaqs(newFaqs);
  };

  return (
    <section className="flex flex-col items-center py-[15vw] md:pb-2 px-[5vw] gap-4">
      <h2 className="text-[32px] font-bold text-center leading-tight md:text-[40px]">
        Frequently Asked Questions
      </h2>
      <div className="w-full flex flex-col gap-4">
        {faqs.map((faq, index) => (
          <div className="bg-faqButtonColor w-full h-fit" key={index}>
            <button className={`p-[24px] text-[16px] md:text-[20px] font-bold w-full flex justify-between ${faq.isOpen ? "text-left" : ""}`} onClick={() => toggleFaq(index)}>
              {faq.question} <span>{faq.isOpen ? <Minus /> : <Plus />}</span>
            </button>
            {faq.isOpen && <p className="px-[24px] pt-2 pb-6 text-[16px] md:text-[20px] text-left">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FaqSection;
