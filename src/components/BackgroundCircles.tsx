interface BackgroundCirclesProps {
  darkMode: boolean;
}

export function BackgroundCircles({ darkMode }: BackgroundCirclesProps) {
  return (
    <>
      {/* Left Circle */}
      <div className="absolute -left-[250px] md:-left-[350px] lg:-left-[483px] w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[515px] lg:h-[515px] top-[75px] pointer-events-none">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 515 515">
          <circle 
            cx="257.5" 
            cy="257.5" 
            r="252.5" 
            stroke="url(#paint0_linear_left)" 
            strokeOpacity={darkMode ? "0.6" : "0.3"}
            strokeWidth="10" 
          />
          <defs>
            <linearGradient 
              gradientUnits="userSpaceOnUse" 
              id="paint0_linear_left" 
              x1="278" 
              x2="257" 
              y1="33" 
              y2="544"
            >
              <stop stopColor="#EB55FF" />
              <stop offset="1" stopColor="#336699" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Right Circle */}
      <div className="absolute -right-[250px] md:-right-[350px] lg:-right-[483px] w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[515px] lg:h-[515px] top-[75px] pointer-events-none">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 515 515">
          <circle 
            cx="257.5" 
            cy="257.5" 
            r="252.5" 
            stroke="url(#paint0_linear_right)" 
            strokeOpacity={darkMode ? "0.6" : "0.3"}
            strokeWidth="10" 
          />
          <defs>
            <linearGradient 
              gradientUnits="userSpaceOnUse" 
              id="paint0_linear_right" 
              x1="278" 
              x2="257" 
              y1="33" 
              y2="544"
            >
              <stop stopColor="#EB55FF" />
              <stop offset="1" stopColor="#336699" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
}