import Image from "next/image";

function PromoteSection() {
  return (
    <>
      {/* Only on Disney part */}
      <section className="flex flex-col items-center py-[10vw] px-[5vw] gap-4 md:h-dvh md:bg-secondHeroImage md:bg-top md:bg-no-repeat md:bg-contain md:items-start md:justify-start">
        <h2 className="text-[32px] font-bold text-center leading-tightlg:text-[40px]">
          Only on Disney+
        </h2>
        <p className="text-silver text-[18px] text-center lg:mb-24">
          Exclusive series and Originals you won't find on any other streaming
          service.
        </p>
        <Image
          src="/main-banner-2.png"
          alt="Exclusive movies and series only on Disney+"
          width="2160"
          height="1050"
          className="mt-[20px] md:hidden"
        />
      </section>
      {/* Watch the way you want part */}
      <section className="flex flex-col items-center py-[10vw] px-[5vw] gap-4 md:py-0">
        <h2 className="text-[32px] font-bold text-center leading-tight pt-12 md:text-[40px]">
          Watch the way you want
        </h2>
        <p className="text-silver text-[18px] text-center">
          Enjoy the world's greatest stories - anytime, anywhere.
        </p>
        <Image
          src="/main-banner-3.png"
          alt="Disney+ shows on different devices"
          width="2160"
          height="1050"
          className="mt-[20px]"
        />
      </section>
      {/* SEO Section*/}
      <section className="flex flex-col items-center justify-center gap-8 md:flex-row md:flex-nowrap">
        {/* SEO Part - 1 */}
        <div className="flex flex-col items-center justify-center gap-6 w-fit h-fit">
          <Image
            src="/limitless-entertainment.png"
            alt="Icon Movie Reel"
            width="80"
            height="101"
            className="mt-[20px]"
          />
          <h3 className="text-[24px] font-bold text-center leading-tight text-pretty">
            Endless entertainment
          </h3>
          <p className="text-silver text-[18px] text-center">
            Explore thousands of hours of TV series, movies and originals.
          </p>
        </div>
        {/* SEO Part - 2 */}
        <div className="flex flex-col items-center justify-center gap-6 w-fit h-fit">
          <Image
            src="/fav-devices.png"
            alt="Multiple Devices Icon"
            width="80"
            height="101"
            className="mt-[20px]"
          />
          <h3 className="text-[24px] font-bold text-center leading-tight text-pretty">
            Available on your favourite devices
          </h3>
          <p className="text-silver text-[18px] text-center">
            Stream on up to four screens at once on compatible devices.
          </p>
        </div>
        {/* SEO Part - 3 */}
        <div className="flex flex-col items-center justify-center gap-6 w-fit h-fit">
          <Image
            src="/user-friendly.png"
            alt="Icon Kids"
            width="80"
            height="101"
            className="mt-[20px]"
          />
          <h3 className="text-[24px] font-bold text-center leading-tight text-pretty">
            Easy-to-use parental controls
          </h3>
          <p className="text-silver text-[18px] text-center">
            Keep your family safe with our intuitive parental controls.
          </p>
        </div>
      </section>
    </>
  );
}

export default PromoteSection;
