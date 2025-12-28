import { useState, useEffect } from 'react';
import { X, ChevronUp, ChevronDown, Maximize, Minimize } from 'lucide-react';
import comicPage1 from "../assets/1.jpeg";
import comicPage2 from "../assets/2.png";
import comicPage3 from "../assets/3.png";
import comicPage4 from "../assets/4.png";
import comicPage5 from "../assets/5.png";
import comicPage6 from "../assets/6.png";
import comicPage7 from "../assets/7.png";
import comicPage8 from "../assets/8.png";
import comicPage9 from "../assets/9.png";
import comicPage10 from "../assets/10.png";
import comicPage11 from "../assets/11.png";
import comicPage12 from "../assets/12.png";
import comicPage13 from "../assets/13.png";
import comicPage14 from "../assets/14.png";
import comicPage15 from "../assets/15.png";


interface ComicReaderProps {
  darkMode: boolean;
  onClose: () => void;
}

export function ComicReader({ darkMode, onClose }: ComicReaderProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  
  const pages = [
    comicPage1,
    comicPage2,
    comicPage3,
    comicPage4,
    comicPage5,
    comicPage6,
    comicPage7,
    comicPage8,
    comicPage9,
    comicPage10,
    comicPage11,
    comicPage12,
    comicPage13,
    comicPage14,
    comicPage15
  ];

  const totalPages = pages.length;

  const goToNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Enter fullscreen
  const enterFullscreen = async () => {
    try {
      const elem = document.documentElement;
      if (elem.requestFullscreen) {
        await elem.requestFullscreen();
      } else if ((elem as any).webkitRequestFullscreen) {
        await (elem as any).webkitRequestFullscreen();
      } else if ((elem as any).mozRequestFullScreen) {
        await (elem as any).mozRequestFullScreen();
      } else if ((elem as any).msRequestFullscreen) {
        await (elem as any).msRequestFullscreen();
      }
      setIsFullscreen(true);
    } catch (err) {
      console.error('Error entering fullscreen:', err);
    }
  };

  // Exit fullscreen
  const exitFullscreen = async () => {
    try {
      if (document.exitFullscreen) {
        await document.exitFullscreen();
      } else if ((document as any).webkitExitFullscreen) {
        await (document as any).webkitExitFullscreen();
      } else if ((document as any).mozCancelFullScreen) {
        await (document as any).mozCancelFullScreen();
      } else if ((document as any).msExitFullscreen) {
        await (document as any).msExitFullscreen();
      }
      setIsFullscreen(false);
    } catch (err) {
      console.error('Error exiting fullscreen:', err);
    }
  };

  // Toggle fullscreen
  const toggleFullscreen = () => {
    if (isFullscreen) {
      exitFullscreen();
    } else {
      enterFullscreen();
    }
  };

  // Listen for fullscreen changes (e.g., user pressing ESC)
  useEffect(() => {
    const handleFullscreenChange = () => {
      const isCurrentlyFullscreen = !!(
        document.fullscreenElement ||
        (document as any).webkitFullscreenElement ||
        (document as any).mozFullScreenElement ||
        (document as any).msFullscreenElement
      );
      setIsFullscreen(isCurrentlyFullscreen);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('msfullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('msfullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        goToNextPage();
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        goToPrevPage();
      } else if (e.key === 'Escape') {
        if (isFullscreen) {
          exitFullscreen();
        }
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, isFullscreen]);

  // Handle touch navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    e.stopPropagation();
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.stopPropagation();
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    e.stopPropagation();
    if (!touchStart) return;
    
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    // Swipe left (next page)
    if (diff > 75) {
      goToNextPage();
    }
    // Swipe right (previous page)
    else if (diff < -75) {
      goToPrevPage();
    }

    setTouchStart(null);
  };

  return (
    <div 
      className="min-h-screen w-full relative overflow-hidden"
      style={{ 
        background: darkMode 
          ? 'linear-gradient(166.03deg, rgb(0, 0, 0) 1.5877%, rgb(41, 41, 41) 37.073%, rgb(66, 66, 66) 65.461%, rgb(0, 0, 0) 100%)'
          : 'linear-gradient(166.03deg, rgb(240, 240, 240) 1.5877%, rgb(255, 255, 255) 37.073%, rgb(245, 245, 245) 65.461%, rgb(235, 235, 235) 100%)'
      }}
    >
      {/* Close Button */}
      <div className="absolute top-4 right-4 md:top-8 md:right-8 z-20">
        <button 
          onClick={onClose}
          className="size-[48px] rounded-full flex items-center justify-center"
          style={{ 
            background: 'linear-gradient(180deg, #EB55FF 0%, #336699 100%)'
          }}
          aria-label="Close reader"
        >
          <X className="size-6 text-white" />
        </button>
      </div>

      {/* Page Counter & Fullscreen Toggle */}
      <div className="absolute top-4 left-4 md:top-8 md:left-8 z-20 flex items-center gap-3">
        <div 
          className="px-4 py-2 rounded-full font-['Poppins:Medium',sans-serif] text-sm"
          style={{ 
            backgroundColor: darkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)',
            color: darkMode ? 'white' : '#1a1a1a'
          }}
        >
          {currentPage + 1} / {totalPages}
        </div>
        <button 
          onClick={toggleFullscreen}
          className="size-[48px] rounded-full flex items-center justify-center transition-transform hover:scale-105"
          style={{ 
            backgroundColor: darkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'
          }}
          aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
        >
          {isFullscreen ? (
            <Minimize className="size-5" style={{ color: darkMode ? 'white' : '#1a1a1a' }} />
          ) : (
            <Maximize className="size-5" style={{ color: darkMode ? 'white' : '#1a1a1a' }} />
          )}
        </button>
      </div>

      {/* Vertical Carousel */}
      <div className="flex flex-col items-center justify-center h-screen py-16 md:py-20 px-4 overflow-y-auto">
        
        {/* Previous Page Preview */}
        {currentPage > 0 && (
          <div 

          className="mb-4 cursor-pointer transition-all hover:scale-105"
            onClick={goToPrevPage}
          >
            <div className="relative w-[100px] h-[62px] md:w-[150px] md:h-[93px] lg:w-[200px] lg:h-[123px] rounded-3xl overflow-hidden opacity-20 hover:opacity-40">
              <img 
                alt={`Page ${currentPage}`}
                className="absolute inset-0 w-full h-full object-cover" 
                src={pages[currentPage - 1]} 
              />
            </div>
            <ChevronUp 
              className="size-6 mx-auto mt-2"
              style={{ color: darkMode ? 'white' : '#1a1a1a' }}
            />
          </div>
        )}

        {/* Current Page (Main Display) */}
        <div className="relative w-full max-w-[340px] bg-red-500 md:max-w-[100px] lg:max-w-[540px] aspect-[440/244] rounded-3xl overflow-hidden shadow-2xl">
          <img 
            alt={`Page ${currentPage + 1}`}
            className="absolute inset-0 w-full h-full object-cover cursor-pointer" 
            src={pages[currentPage]}
            onClick={() => setIsFullscreen(true)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          />
        </div>

        {/* Next Page Preview */}
        {currentPage < totalPages - 1 && (
          <div 
            className="mt-4 cursor-pointer transition-all hover:scale-105"
            onClick={goToNextPage}
          >
            <ChevronDown 
              className="size-6 mx-auto mb-2"
              style={{ color: darkMode ? 'white' : '#1a1a1a' }}
            />
            <div className="relative w-[100px] h-[62px] md:w-[150px] md:h-[93px] lg:w-[200px] lg:h-[123px] rounded-3xl overflow-hidden opacity-20 hover:opacity-40">
              <img 
                alt={`Page ${currentPage + 2}`}
                className="absolute inset-0 w-full h-full object-cover" 
                src={pages[currentPage + 1]} 
              />
            </div>
          </div>
        )}

        {/* Navigation Instructions */}
        <div 
          className="mt-8 text-center font-['Poppins:Regular',sans-serif] text-sm opacity-70"
          style={{ color: darkMode ? 'white' : '#1a1a1a' }}
        >
          <p className="hidden md:block">Use arrow keys or click to navigate</p>
          <p className="md:hidden">Tap to navigate</p>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ 
            backgroundColor: darkMode ? 'rgba(0, 0, 0, 0.95)' : 'rgba(255, 255, 255, 0.95)'
          }}
          onClick={() => setIsFullscreen(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Close Button */}
          <button 
            onClick={() => setIsFullscreen(false)}
            className="absolute top-4 right-4 md:top-8 md:right-8 size-[48px] rounded-full flex items-center justify-center z-10"
            style={{ 
              background: 'linear-gradient(180deg, #EB55FF 0%, #336699 100%)'
            }}
            aria-label="Close fullscreen"
          >
            <X className="size-6 text-white" />
          </button>

          {/* Fullscreen Image */}
          <img 
            alt={`Page ${currentPage + 1} - Fullscreen`}
            className="max-w-full max-h-full object-contain"
            src={pages[currentPage]}
            onClick={(e) => e.stopPropagation()}
          />

          {/* Page Info */}
          <div 
            className="absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full font-['Poppins:Medium',sans-serif]"
            style={{ 
              backgroundColor: darkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)',
              color: darkMode ? 'white' : '#1a1a1a'
            }}
          >
            Page {currentPage + 1} of {totalPages}
          </div>
        </div>
      )}
    </div>
  );
}