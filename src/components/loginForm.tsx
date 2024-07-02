"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginForm = () => {
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
    router.push('/login/enter-password');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
      <input
        className="text-black bg-gray-200 h-[60px] rounded pl-4"
        type="email"
        name="emailField"
        id="emailField"
        placeholder="Email"
        onChange={handleChange}
        value={formData.emailField}
        required
      />
      <button
        className="bg-black rounded-3xl h-[52px] text-[16px] font-semibold transition duration-300 ease-in-out hover:bg-[#252526]"
        type="submit"
      >
        Continue
      </button>
    </form>
  );
};

export default LoginForm;
