"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const EnterPasswordForm = () => {
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
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
      <div>
        <input
          className="text-black bg-gray-200 w-full h-[60px] rounded pl-4"
          type="password"
          name="passwordField"
          id="passwordField"
          placeholder="Password"
          onChange={handleChange}
          value={formData.passwordField}
          required
        />
        <div className="text-[#5F6166] text-[12px] mt-2">(Case sensitive)</div>
      </div>
      <button
        className="bg-black rounded-3xl h-[52px] text-[16px] font-semibold transition duration-300 ease-in-out hover:bg-[#252526]"
        type="submit"
      >
        Log In
      </button>
    </form>
  );
};

export default EnterPasswordForm;
