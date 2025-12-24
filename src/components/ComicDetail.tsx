import { X, Copy } from 'lucide-react';
import svgPaths from "../imports/svg-4651ig98wj";
import agueroCover from "../assets/img3.png";
import { useState, useRef } from 'react';
import { ComicReader } from './ComicReader';

function BackButton({ onClick, darkMode }: { onClick: () => void; darkMode: boolean }) {
  return (
    <button 
      onClick={onClick}
      className="size-[48px] rounded-full flex items-center justify-center"
      style={{ 
        background: 'linear-gradient(180deg, #EB55FF 0%, #336699 100%)'
      }}
      aria-label="Go back"
    >
      <X className="size-6 text-white" />
    </button>
  );
}

interface ComicDetailProps {
  darkMode: boolean;
  onClose: () => void;
  coverImage?: string;
}

export function ComicDetail({ darkMode, onClose, coverImage = agueroCover }: ComicDetailProps) {
  const [isReaderOpen, setIsReaderOpen] = useState(false);
  
  const handleCopy = () => {
    // Fallback method that works in restricted environments
    const text = 'AX5jUCzK33auqxoBkwuyRc4W7WPqQCgyXPi5oxN8HC2U';
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      alert('Address copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy text:', err);
      alert('Failed to copy address');
    }
    document.body.removeChild(textarea);
  };

  // If reader is open, show the comic reader
  if (isReaderOpen) {
    return <ComicReader darkMode={darkMode} onClose={() => setIsReaderOpen(false)} />;
  }

  return (
    <div 
      className="min-h-screen w-full relative"
      style={{ 
        background: darkMode 
          ? 'linear-gradient(166.03deg, rgb(0, 0, 0) 1.5877%, rgb(41, 41, 41) 37.073%, rgb(66, 66, 66) 65.461%, rgb(0, 0, 0) 100%)'
          : 'linear-gradient(166.03deg, rgb(240, 240, 240) 1.5877%, rgb(255, 255, 255) 37.073%, rgb(245, 245, 245) 65.461%, rgb(235, 235, 235) 100%)'
      }}
    >
      {/* Header with Back Button */}
      <div className="absolute top-4 right-4 md:top-8 md:right-8 z-20">
        <BackButton onClick={onClose} darkMode={darkMode} />
      </div>

      {/* Main Content Container */}
      <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen px-4 md:px-8 py-20 lg:py-12 gap-8 lg:gap-12 max-w-7xl mx-auto">
        
        {/* Comic Image */}
        <div className="w-full max-w-[440px] lg:w-1/2 relative">
          <div className="relative w-full aspect-[440/595] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              alt="Aguero Moment Comic" 
              className="absolute inset-0 w-full h-full object-cover" 
              src={coverImage} 
            />
          </div>
        </div>

        {/* Comic Details Panel */}
        <div className="w-full max-w-[440px] lg:w-1/2 flex flex-col gap-6">
          {/* Drag Handle */}
          <div 
            className="w-[82px] h-[5px] rounded-full mx-auto lg:hidden"
            style={{ backgroundColor: darkMode ? '#d9d9d9' : '#999999' }}
          />

          {/* Details Card */}
          <div 
            className="rounded-3xl p-6 md:p-8 shadow-lg"
            style={{ 
              background: darkMode 
                ? 'linear-gradient(137.299deg, rgb(0, 0, 0) 4.5416%, rgb(115, 115, 115) 100%)'
                : 'linear-gradient(137.299deg, rgb(255, 255, 255) 4.5416%, rgb(230, 230, 230) 100%)'
            }}
          >
            {/* Title */}
            <h1 
              className="text-2xl md:text-3xl mb-4"
              style={{ color: darkMode ? 'white' : '#1a1a1a' }}
            >
              Aguero Moment
            </h1>

            {/* Address with Copy Button */}
            <div className="flex items-center justify-between gap-3 mb-6 p-3 rounded-lg" style={{ backgroundColor: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)' }}>
              <div 
                className="font-['Poppins:Medium',sans-serif] text-xs md:text-sm flex-1 overflow-hidden text-ellipsis"
                style={{ color: darkMode ? 'white' : '#333333' }}
              >
                AX5jUCzK33auqxoBkwuyRc4W7WPqQCgyXPi5oxN8HC2U
              </div>
              <button 
                onClick={handleCopy}
                className="shrink-0"
                aria-label="Copy address"
              >
                <Copy className="size-4" style={{ color: darkMode ? 'white' : '#333333' }} />
              </button>
            </div>

            {/* Description */}
            <p 
              className="font-['Poppins:Regular',sans-serif] text-sm md:text-base leading-relaxed mb-8"
              style={{ color: darkMode ? 'white' : '#333333' }}
            >
              The Orange Fox sees the crypto market crashing and tries to panic-sell. However, he trips over his own tail and accidentally faceplants the "MAX BUY" button at the last second. This clumsy mistake triggers a massive price pump (the "Aguero Moment"). The Fox then puts on sunglasses and pretends he planned it all along.
            </p>

            {/* Read Now Button */}
            <button 
              className="w-full md:w-auto mx-auto block px-12 py-4 rounded-full font-['Poppins:Medium',sans-serif] text-lg md:text-xl transition-transform hover:scale-105 active:scale-95"
              style={{ 
                backgroundColor: darkMode ? '#d9d9d9' : '#1a1a1a',
                color: darkMode ? 'black' : 'white'
              }}
              onClick={() => setIsReaderOpen(true)}
            >
              Read Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}