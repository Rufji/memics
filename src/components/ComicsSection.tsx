import svgPaths from "../imports/svg-4aiayugaav";
import comicCover2 from "../assets/img2.png";
import agueroCover from "../assets/img3.png";
import comicCover3 from "../assets/img7.png";
import { useState } from 'react';
import { ComicDetail } from './ComicDetail';

function StarIcon() {
  return (
    <div className="relative shrink-0 size-16" data-name="icon-park-outline:star-one">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="icon-park-outline:star-one">
          <path 
            clipRule="evenodd" 
            d={svgPaths.p1f627100} 
            fill="url(#paint0_linear_1_54)" 
            fillRule="evenodd" 
            id="Vector" 
          />
        </g>
        <defs>
          <linearGradient 
            gradientUnits="userSpaceOnUse" 
            id="paint0_linear_1_54" 
            x1="31.8494" 
            x2="31.8494" 
            y1="2.66715" 
            y2="61.1139"
          >
            <stop stopColor="#EB55FF" />
            <stop offset="1" stopColor="#1F5C97" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

interface ComicsSectionProps {
  darkMode: boolean;
}

export function ComicsSection({ darkMode }: ComicsSectionProps) {
  const [selectedComic, setSelectedComic] = useState<string | null>(null);

  // If a comic is selected, show the detail page
  if (selectedComic) {
    return <ComicDetail darkMode={darkMode} onClose={() => setSelectedComic(null)} />;
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-8">
      <div className="flex flex-col gap-9 items-center">
        {/* View Latest Comics Button */}
        <div className="flex flex-col gap-3 items-center">
          <StarIcon />
          <div 
            className="font-['Poppins:Bold',sans-serif] text-center"
            style={{ color: darkMode ? 'white' : '#1a1a1a' }}
          >
            View Latest Comics
          </div>
        </div>

        {/* Comics Carousel */}
        <div className="w-full overflow-hidden relative">
          <div className="flex gap-5 items-center overflow-x-auto pb-4 px-4 -mx-4 lg:justify-center lg:overflow-x-visible [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div 
              onClick={() => setSelectedComic('aguero-moment')}
              className="h-[343px] w-[251px] md:h-[380px] md:w-[280px] lg:h-[420px] lg:w-[310px] relative rounded-3xl shrink-0 cursor-pointer hover:scale-105 transition-transform"
            >
              <img 
                alt="Featured comic cover" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-3xl size-full" 
                src={agueroCover} 
              />
            </div>
            <div className="h-[343px] w-[251px] md:h-[380px] md:w-[280px] lg:h-[420px] lg:w-[310px] relative rounded-3xl shrink-0 hover:scale-105 transition-transform cursor-pointer">
              <img 
                alt="Comic cover" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-3xl size-full" 
                src={comicCover2} 
              />
            </div>
            <div className="h-[343px] w-[251px] md:h-[380px] md:w-[280px] lg:h-[420px] lg:w-[310px] relative rounded-3xl shrink-0 hover:scale-105 transition-transform cursor-pointer">
              <img 
                alt="Comic cover" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-3xl size-full" 
                src={comicCover3} 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}