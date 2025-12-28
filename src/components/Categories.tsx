import categoryPreview from "../assets/coming-soon.jpeg";

interface CategoriesProps {
  darkMode: boolean;
}

export function Categories({ darkMode }: CategoriesProps) {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-12">
      <div className="flex flex-col gap-4">
        <h2 
          style={{ color: darkMode ? 'white' : '#1a1a1a' }}
        >
          Categories
        </h2>
        
        <div className="relative inline-block max-w-[389px]">
          {/* Blurred background image */}
          <div className="relative h-[199px] w-full rounded-3xl overflow-hidden">
            <img 
              alt="Category preview" 
              className="absolute inset-0 w-full h-full object-cover blur-[5px] filter" 
              src={categoryPreview} 
            />
            
            {/* Coming Soon Badge */}
            <div className="absolute top-[68px] left-1/2 -translate-x-1/2 w-[144px]">
              <div 
                className="rounded-full p-2.5"
                style={{ backgroundColor: darkMode ? 'white' : '#1a1a1a' }}
              >
                <div className="text-center">
                  <span 
                    className="font-['Poppins:Bold',sans-serif] text-xs bg-clip-text bg-gradient-to-r from-[#eb55ff] to-[#112233]"
                    style={{ WebkitTextFillColor: "transparent" }}
                  >
                    COMING SOON!!!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}