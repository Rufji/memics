interface HeroProps {
  darkMode: boolean;
}

export function Hero({ darkMode }: HeroProps) {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12 pb-9">
      <div className="flex flex-col gap-5 items-center">
        <h1 
          className="text-3xl md:text-4xl lg:text-5xl text-center"
          style={{ color: darkMode ? 'white' : '#1a1a1a' }}
        >
          Meme Stories,
          <br />
          Told in Comics.
        </h1>
        <p 
          className="font-['Poppins:Regular',sans-serif] text-sm md:text-base text-center max-w-2xl"
          style={{ color: darkMode ? 'white' : '#4a4a4a' }}
        >
          Short comics inspired by crypto culture, chaos.
        </p>
      </div>
    </div>
  );
}