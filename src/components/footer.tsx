import Image from "next/image";

function Footer() {
  return (
    <footer className="p-[5vw] flex flex-col items-center gap-2">
      <Image src="/disneyLogo.png" alt="Disney Logo" width={80} height={500} />
      <p className="text-slate-400 text-[12px]">This is a demo footer.</p>
      <p className="text-slate-400 text-[12px]">This is Disney+ website clone made for educational purposes. All rights reserved by Disney. </p>
    </footer>
  );
};

export default Footer;