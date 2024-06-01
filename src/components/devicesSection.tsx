import Image from "next/image";

function DevicesSection() {
  return (
    <section className="py-[10vw] md:pb-0 px-[5vw] gap-4">
      <h2 className="text-[32px] md:text-[40px] font-bold text-center leading-tight">
        Available on your favourite devices
      </h2>
      <ul className="grid grid-cols-2 md:grid-cols-4 justify-items-center gap-6 pt-4">
        <li className="flex flex-col items-center w-fit h-fit gap-6">
          <Image src="/tv.png" alt="TV" className="w-[500px]" width={150} height={400} />
          <h3 className="text-[24px] md:text-[28px] font-bold leading-tight text-center">TV</h3>
          <p className="text-silver text-[16px] text-center">
            Amazon Fire TV <br /> Android TV <br /> Apple TV <br /> Chromecast
            <br /> LG <br /> Panasonic <br /> Samsung
          </p>
        </li>
        <li className="flex flex-col items-center w-fit h-fit gap-6">
          <Image src="/laptop.png" alt="PC" className="w-[500px]" width={150} height={400} />
          <h3 className="text-[24px] md:text-[28px] font-bold leading-tight text-center">Computer</h3>
          <p className="text-silver text-[16px] text-center">
            Chrome OS <br /> MacOS <br /> Windows PC
          </p>
        </li>
        <li className="flex flex-col items-center w-fit h-fit gap-6">
          <Image src="/mobile.png" alt="Mobile" className="w-[500px]" width={150} height={400} />
          <h3 className="text-[24px] md:text-[28px] font-bold leading-tight text-center">
            Mobile & Tablet
          </h3>
          <p className="text-silver text-[16px] text-center">
            Amazon Fire Tablets <br /> Android Phones &amp; Tablets <br />{" "}
            iPhone &amp; iPad
          </p>
        </li>
        <li className="flex flex-col items-center w-fit h-fit gap-6">
          <Image src="/gamingConsole.png" alt="Game Console" className="w-[500px]" width={150} height={400} />
          <h3 className="text-[24px] md:text-[28px] font-bold leading-tight text-center">Game Consoles</h3>
          <p className="text-silver text-[16px] text-center">
            PS4 <br /> PS5 <br /> Xbox One <br /> Xbox Series X <br /> Xbox
            Series S
          </p>
        </li>
      </ul>
    </section>
  );
}

export default DevicesSection;
