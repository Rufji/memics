import svgPaths from "../imports/svg-4aiayugaav";
import comicCover2 from "../assets/soon1.jpeg";
import poster1 from "../assets/poster1.jpg";
import comicCover3 from "../assets/soon2.jpeg";
import { useState } from 'react';
import { ComicDetail } from './ComicDetail';
import { Lock } from 'lucide-react';

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
                src={poster1} 
              />
            </div>
            <div className="h-[343px] w-[251px] md:h-[380px] md:w-[280px] lg:h-[420px] lg:w-[310px] relative rounded-3xl shrink-0 hover:scale-105 transition-transform cursor-pointer overflow-hidden">
              <img 
                alt="Comic cover" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-3xl size-full blur-[5px]" 
                src={comicCover2} 
              />
              <div className="absolute inset-0 rounded-3xl bg-black/60 backdrop-blur-[150px] flex flex-col items-center justify-center gap-4">
                <Lock className="size-12 text-white drop-shadow-lg" />
                <div className="px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
                  <span className="font-['Poppins:Bold',sans-serif] text-xs text-white tracking-wider">COMING SOON</span>
                </div>
              </div>
            </div>
            <div className="h-[343px] w-[251px] md:h-[380px] md:w-[280px] lg:h-[420px] lg:w-[310px] relative rounded-3xl shrink-0 hover:scale-105 transition-transform cursor-pointer overflow-hidden">
              <img 
                alt="Comic cover" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-3xl size-full blur-[5px]" 
                src={comicCover3} 
              />
              <div className="absolute inset-0 rounded-3xl bg-black/60 backdrop-blur-[100px] flex flex-col items-center justify-center gap-4">
                <Lock className="size-12 text-white drop-shadow-lg" />
                <div className="px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
                  <span className="font-['Poppins:Bold',sans-serif] text-xs text-white tracking-wider">COMING SOON</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}