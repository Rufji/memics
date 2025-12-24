import svgPaths from "./svg-4aiayugaav";
import imgRectangle5 from "figma:asset/895914bde42b364587e6f3ea4903a0b34d80ad0f.png";
import imgRectangle4 from "figma:asset/fcb7002ec27b87fe7226324acacee29ae0d2749e.png";
import imgRectangle2 from "figma:asset/11b2a4c1d20ddc7774763ad13295fab29eab7e18.png";
import imgRectangle3 from "figma:asset/4b7ce9e3d4a6ab2f4d34f76c4fbfee742075a036.png";

function JamMenu() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="jam:menu">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="jam:menu">
          <path d={svgPaths.p29989b00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex h-[162px] items-center justify-between left-0 px-[24px] py-[48px] top-0 w-[440px]">
      <div className="relative rounded-[16px] shrink-0 size-[61px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[16px] size-full" src={imgRectangle5} />
      </div>
      <JamMenu />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[19px] items-center leading-[normal] left-0 not-italic pb-[36px] pt-0 px-[24px] text-white top-[162px] w-[440px]">
      <p className="font-['Hanalei_Fill:Regular',sans-serif] relative shrink-0 text-[32px] text-nowrap">
        Crypto Stories,
        <br aria-hidden="true" />
        Told in Comics.
      </p>
      <p className="font-['Poppins:Regular',sans-serif] min-w-full relative shrink-0 text-[14px] text-center w-[min-content]">Short comics inspired by crypto culture, chaos.</p>
    </div>
  );
}

function IconParkOutlineStarOne() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="icon-park-outline:star-one">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="icon-park-outline:star-one">
          <path clipRule="evenodd" d={svgPaths.p1f627100} fill="url(#paint0_linear_1_54)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_54" x1="31.8494" x2="31.8494" y1="2.66715" y2="61.1139">
            <stop stopColor="#EB55FF" />
            <stop offset="1" stopColor="#1F5C97" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[11px] items-center relative shrink-0 w-[160px]">
      <IconParkOutlineStarOne />
      <div className="flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[16px] text-white w-[min-content]">
        <p className="leading-[normal]">View Latest Comics</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex gap-[20px] items-center left-[calc(50%-0.5px)] top-0 translate-x-[-50%]">
      <div className="h-[273px] relative rounded-[24px] shrink-0 w-[200px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[24px] size-full" src={imgRectangle4} />
      </div>
      <div className="h-[343px] relative rounded-[24px] shrink-0 w-[251px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[24px] size-full" src={imgRectangle2} />
      </div>
      <div className="h-[273px] relative rounded-[24px] shrink-0 w-[200px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[24px] size-full" src={imgRectangle3} />
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="h-[343px] relative shrink-0 w-full">
      <Frame />
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[36px] h-[525px] items-center left-0 top-[322px] w-[440px]">
      <Frame7 />
      <Frame8 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white relative rounded-[100px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative w-full">
          <div className="bg-clip-text bg-gradient-to-r flex flex-col font-['Poppins:Bold',sans-serif] from-[#eb55ff] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap to-[#112233]" style={{ WebkitTextFillColor: "transparent" }}>
            <p className="leading-[normal]">COMING SOON!!!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col items-start ml-[123px] mt-[68px] p-[10px] relative w-[144px]">
      <Frame1 />
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] blur-[5px] filter h-[199px] ml-0 mt-0 relative rounded-[24px] w-[389px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[24px] size-full" src={imgRectangle4} />
      </div>
      <Frame10 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[17px] h-[324px] items-start leading-[0] left-0 pb-[48px] pt-0 px-[24px] top-[847px] w-[440px]">
      <div className="flex flex-col font-['Poppins:Bold',sans-serif] justify-center min-w-full not-italic relative shrink-0 text-[16px] text-white w-[min-content]">
        <p className="leading-[normal]">Categories</p>
      </div>
      <Group />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center leading-[0] not-italic relative shrink-0 text-[12px] text-center w-full">
      <div className="flex flex-col font-['Poppins:Bold',sans-serif] justify-center relative shrink-0 text-white w-full">
        <p className="leading-[normal]">
          {`Turning complex moment into simple stories `}
          <br aria-hidden="true" />
          you can actually enjoy
        </p>
      </div>
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center relative shrink-0 text-[#d1d1d1] w-full">
        <p className="leading-[normal]">Community-driven stories 2025</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full">
      <div className="flex flex-col font-['Hanalei_Fill:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[40px] text-center text-white w-full">
        <p className="leading-[normal]">CRYPTO COMIC</p>
      </div>
      <Frame2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[60px] h-[274px] items-center left-0 px-0 py-[48px] top-[1171px] w-[440px]">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-solid border-white inset-0 pointer-events-none" />
      <Frame3 />
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white w-full">
        <p className="leading-[normal]">
          <span className="text-[#d1d1d1]">Built by</span>
          <span>{` Spidernation and Crew`}</span>
        </p>
      </div>
    </div>
  );
}

export default function IPhone16ProMax() {
  return (
    <div className="relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-full" data-name="iPhone 16 Pro Max - 1" style={{ backgroundImage: "linear-gradient(158.743deg, rgb(0, 0, 0) 1.5877%, rgb(41, 41, 41) 37.073%, rgb(66, 66, 66) 65.461%, rgb(0, 0, 0) 100%)" }}>
      <Frame5 />
      <div className="absolute left-[-483px] size-[515px] top-[75px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 515 515">
          <circle cx="257.5" cy="257.5" id="Ellipse 1" r="252.5" stroke="url(#paint0_linear_1_59)" strokeOpacity="0.6" strokeWidth="10" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_59" x1="278" x2="257" y1="33" y2="544">
              <stop stopColor="#EB55FF" />
              <stop offset="1" stopColor="#336699" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute left-[407px] size-[515px] top-[75px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 515 515">
          <circle cx="257.5" cy="257.5" id="Ellipse 2" r="252.5" stroke="url(#paint0_linear_1_57)" strokeOpacity="0.3" strokeWidth="10" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_57" x1="257.5" x2="257.5" y1="0" y2="515">
              <stop stopColor="#EB55FF" />
              <stop offset="1" stopColor="#336699" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Frame6 />
      <Frame9 />
      <Frame11 />
      <Frame4 />
    </div>
  );
}