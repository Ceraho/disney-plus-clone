"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const CreatePasswordForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    passwordField: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(formData);
    router.push("/");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full h-fit">
      <div className="w-full">
        <input
          className="text-black bg-gray-200 w-full h-[60px] rounded pl-4"
          type="password"
          name="passwordField"
          id="passwordField"
          placeholder="Choose a password"
          onChange={handleChange}
          value={formData.passwordField}
          required
        />
        <div className="text-[#5F6166] text-[12px] mt-2">
          Use a minimum of 6 characters (case sensitive) with at least one
          number or special character.
        </div>
      </div>
      <div className="flex gap-4">
        <input className="self-start w-12 h-8" type="checkbox" name="" id="" />
        <div className="text-[#5F6166] text-[14px]">
          Yes! I would like to receive special offers and updates about Disney+
          and other products and services from The Walt Disney Family of
          Companies by email.
        </div>
      </div>
      <p className="text-[#5F6166] text-[14px]">
        We may use your data as described in our Privacy Policy, By clicking
        "Agree & Continue", you agree to the Disney Terms of Use which apply to
        your MyDisney account with the exclusion of Disney+ - and acknowledge
        that you have read our Privacy Policy, Cookies Policy, and UK & EU
        Privacy Rights.
      </p>
      <button
        className="bg-black rounded-3xl h-[52px] text-[16px] font-semibold transition duration-300 ease-in-out hover:bg-[#252526]"
        type="submit"
      >
        Agree & Continue
      </button>
    </form>
  );
};

export default CreatePasswordForm;
