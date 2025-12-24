import imgRectangle11 from "figma:asset/e1573d9307707e2f90150630342baecdb46f9ec8.png";
import imgRectangle12 from "figma:asset/00c44b7518eeb8819037f36b4a97c2a9583ddbf3.png";
import imgRectangle13 from "figma:asset/11c1c72067d6460aa901fe93f70c0ec33d95bd20.png";

export default function IPhone16ProMax() {
  return (
    <div className="relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-full" data-name="iPhone 16 Pro Max - 3" style={{ backgroundImage: "linear-gradient(166.03deg, rgb(0, 0, 0) 1.5877%, rgb(41, 41, 41) 37.073%, rgb(66, 66, 66) 65.461%, rgb(0, 0, 0) 100%)" }}>
      <div className="absolute h-[244px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[440px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle11} />
      </div>
      <div className="absolute h-[123px] opacity-30 right-[120px] rounded-[24px] top-[calc(50%+219.5px)] translate-y-[-50%] w-[200px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[24px] size-full" src={imgRectangle12} />
      </div>
      <div className="absolute h-[123px] left-1/2 opacity-30 rounded-[24px] top-[calc(50%-210.5px)] translate-x-[-50%] translate-y-[-50%] w-[200px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[24px] size-full" src={imgRectangle13} />
      </div>
      <div className="absolute h-[62px] left-1/2 opacity-10 rounded-[24px] top-[calc(50%-339px)] translate-x-[-50%] translate-y-[-50%] w-[100px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[24px] size-full" src={imgRectangle13} />
      </div>
    </div>
  );
}