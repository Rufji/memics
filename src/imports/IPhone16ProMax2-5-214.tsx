import svgPaths from "./svg-4651ig98wj";
import imgRectangle7 from "figma:asset/11b2a4c1d20ddc7774763ad13295fab29eab7e18.png";

function JamMenu() {
  return (
    <div className="absolute left-[353px] size-[48px] top-[66px]" data-name="jam:menu">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="jam:menu">
          <rect fill="url(#paint0_linear_5_188)" height="48" rx="24" width="48" />
          <path d={svgPaths.p29989b00} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_5_188" x1="24" x2="24" y1="0" y2="48">
            <stop stopColor="#EB55FF" />
            <stop offset="1" stopColor="#336699" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function SolarCopyBold() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="solar:copy-bold">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="solar:copy-bold">
          <path d={svgPaths.p2b2b0300} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.pc3b2f00} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-nowrap text-white">
        <p className="leading-[normal]">AX5jUCzK33auqxoBkwuyRc4W7WPqQCgyXPi5oxN8HC2U</p>
      </div>
      <SolarCopyBold />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] items-start left-[6px] px-[24px] py-0 top-[569px] w-[434px]">
      <div className="flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-full">
        <p className="leading-[normal]">Aguero Moment</p>
      </div>
      <Frame />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 px-[24px] py-[10px] top-[646px] w-[440px]">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white w-[379px]">
        <p className="leading-[normal]">{`The Orange Fox sees the crypto market crashing and tries to panic-sell. However, he trips over his own tail and accidentally faceplants the "MAX BUY" button at the last second. This clumsy mistake triggers a massive price pump (the "Aguero Moment"). The Fox then puts on sunglasses and pretends he planned it all along.`}</p>
      </div>
    </div>
  );
}

export default function IPhone16ProMax() {
  return (
    <div className="relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-full" data-name="iPhone 16 Pro Max - 2" style={{ backgroundImage: "linear-gradient(166.03deg, rgb(0, 0, 0) 1.5877%, rgb(41, 41, 41) 37.073%, rgb(66, 66, 66) 65.461%, rgb(0, 0, 0) 100%)" }}>
      <div className="absolute h-[595px] left-0 top-0 w-[440px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle7} />
      </div>
      <JamMenu />
      <div className="absolute h-[461px] left-0 rounded-tl-[24px] rounded-tr-[24px] top-[495px] w-[440px]" style={{ backgroundImage: "linear-gradient(137.299deg, rgb(0, 0, 0) 4.5416%, rgb(115, 115, 115) 100%)" }} />
      <Frame1 />
      <div className="absolute bg-[#d9d9d9] h-[5px] left-[179px] rounded-[100px] top-[515px] w-[82px]" />
      <div className="absolute bg-[#d9d9d9] h-[59px] left-[213px] rounded-[100px] top-[823px] w-[201px]" />
      <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] left-[253px] not-italic text-[24px] text-black text-nowrap top-[853px] translate-y-[-50%]">
        <p className="leading-[normal]">Read Now</p>
      </div>
      <Frame2 />
    </div>
  );
}