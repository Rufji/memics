interface FooterProps {
  darkMode: boolean;
}

export function Footer({ darkMode }: FooterProps) {
  return (
    <div 
      className="w-full border-t"
      style={{ borderColor: darkMode ? 'white' : '#333' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-12">
        <div className="flex flex-col gap-15 items-center">
          {/* Branding Section */}
          <div className="flex flex-col gap-2 items-center text-center">
            <h2 
              className="text-4xl md:text-5xl"
              style={{ color: darkMode ? 'white' : '#1a1a1a' }}
            >
              CRYPTO MEMICS
            </h2>
            <div className="flex flex-col gap-2">
              <p 
                className="font-['Poppins:Bold',sans-serif] text-xs md:text-sm"
                style={{ color: darkMode ? 'white' : '#1a1a1a' }}
              >
                Turning complex moment into simple stories
                <br />
                you can actually enjoy
              </p>
              <p 
                className="font-['Poppins:Medium',sans-serif] text-xs"
                style={{ color: darkMode ? '#d1d1d1' : '#666' }}
              >
                Community-driven stories 2025
              </p>
            </div>
          </div>

          {/* Credits */}
          <div className="font-['Poppins:Medium',sans-serif] text-xs text-center mt-12">
            <span style={{ color: darkMode ? '#d1d1d1' : '#666' }}>Built by</span>
            <span style={{ color: darkMode ? 'white' : '#1a1a1a' }}> Spidernation and Crew</span>
          </div>
        </div>
      </div>
    </div>
  );
}