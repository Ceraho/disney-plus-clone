'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";

const HeroSectionForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    emailField: ''
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log(formData);
    router.push('/sign-up');
  };

  return (
    <form onSubmit={handleSubmit} className="md:flex md:justify-between md:w-2/5">
        <input
          type="email"
          name="email"
          className="rounded box-border bg-emailInputFieldColor border border-emailInputFieldColor h-[50px] px-[12px] w-full mb-2"
        placeholder="Email"
        required
        />
        <button
          type="submit"
          className="rounded box-border text-signUpButtonTextColor bg-signUpButtonBgColor border border-signUpButtonBgColor h-[50px] px-[12px] w-full md:max-w-[260px]"
        >
          SIGN UP NOW
        </button>
      </form>
  )
}

export default HeroSectionForm;