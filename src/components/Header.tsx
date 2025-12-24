import { useState } from "react";
import svgPaths from "../imports/svg-4aiayugaav";
import logo from "../assets/img5.png";
import { X, Moon, Sun } from "lucide-react";

function MenuIcon() {
  return (
    <div
      className="relative shrink-0 size-[48px]"
      data-name="jam:menu"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 48 48"
      >
        <g id="jam:menu">
          <path
            d={svgPaths.p29989b00}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export function Header({ darkMode, setDarkMode }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const categories = [
    "Bitcoin Stories",
    "NFT Adventures",
    "DeFi Chronicles",
    "Meme Coins",
    "Crypto Chaos",
    "Web3 Tales",
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-12">
        <div className="flex items-center justify-between">
          <div className="relative rounded-2xl shrink-0 w-[61px] h-[61px]">
            <img
              alt="Crypto Comic Logo"
              className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-2xl size-full"
              src={logo}
            />
          </div>
          <button
            className="cursor-pointer z-50 relative"
            aria-label="Menu"
            onClick={toggleMenu}
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      />

      {/* Side Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] md:w-[450px] z-50 transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          backgroundImage: darkMode
            ? "linear-gradient(158.743deg, rgb(0, 0, 0) 1.5877%, rgb(41, 41, 41) 37.073%, rgb(66, 66, 66) 65.461%, rgb(0, 0, 0) 100%)"
            : "linear-gradient(158.743deg, rgb(255, 255, 255) 1.5877%, rgb(240, 240, 240) 37.073%, rgb(230, 230, 230) 65.461%, rgb(255, 255, 255) 100%)",
        }}
      >
        <div className="h-full overflow-y-auto">
          {/* Menu Header */}
          <div
            className="flex items-center justify-between px-6 md:px-8 py-8 border-b"
            style={{
              borderColor: darkMode
                ? "rgba(255,255,255,0.1)"
                : "rgba(0,0,0,0.1)",
            }}
          >
            <h2
              className="text-xl"
              style={{ color: darkMode ? "white" : "#1a1a1a" }}
            >
              Menu
            </h2>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Close menu"
            >
              <X
                size={24}
                color={darkMode ? "white" : "black"}
              />
            </button>
          </div>

          {/* Categories Section */}
          <div className="px-6 md:px-8 py-8">
            <h3
              className="font-['Poppins:Bold',sans-serif] mb-6"
              style={{ color: darkMode ? "white" : "#1a1a1a" }}
            >
              Categories
            </h3>
            <ul className="space-y-4">
              {categories.map((category, index) => (
                <li key={index}>
                  <button
                    className="w-full text-left font-['Poppins:Regular',sans-serif] py-3 px-4 rounded-lg transition-all hover:pl-6"
                    style={{
                      color: darkMode ? "#d1d1d1" : "#4a4a4a",
                      backgroundColor: darkMode
                        ? "rgba(255,255,255,0.05)"
                        : "rgba(0,0,0,0.03)",
                    }}
                    onClick={toggleMenu}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Theme Toggle Section */}
          <div
            className="px-6 md:px-8 py-8 border-t"
            style={{
              borderColor: darkMode
                ? "rgba(255,255,255,0.1)"
                : "rgba(0,0,0,0.1)",
            }}
          >
            <h3
              className="font-['Poppins:Bold',sans-serif] mb-6"
              style={{ color: darkMode ? "white" : "#1a1a1a" }}
            >
              Theme
            </h3>
            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="flex items-center justify-between w-full p-4 rounded-xl transition-all"
                style={{
                  backgroundColor: darkMode
                    ? "rgba(255,255,255,0.1)"
                    : "rgba(0,0,0,0.1)",
                }}
              >
                <div className="flex items-center gap-3">
                  {darkMode ? (
                    <>
                      <Moon size={24} color="white" />
                      <span
                        className="font-['Poppins:Medium',sans-serif]"
                        style={{ color: "white" }}
                      >
                        Dark Mode
                      </span>
                    </>
                  ) : (
                    <>
                      <Sun size={24} color="#1a1a1a" />
                      <span
                        className="font-['Poppins:Medium',sans-serif]"
                        style={{ color: "#1a1a1a" }}
                      >
                        Light Mode
                      </span>
                    </>
                  )}
                </div>
                <div
                  className="w-14 h-8 rounded-full p-1 transition-colors"
                  style={{
                    backgroundColor: darkMode
                      ? "#eb55ff"
                      : "#336699",
                  }}
                >
                  <div
                    className="w-6 h-6 rounded-full bg-white transition-transform"
                    style={{
                      transform: darkMode
                        ? "translateX(24px)"
                        : "translateX(0)",
                    }}
                  />
                </div>
              </button>
            </div>
          </div>

          {/* Footer Info */}
          <div className="px-6 md:px-8 py-8 mt-auto">
            <p
              className="font-['Poppins:Regular',sans-serif] text-xs text-center"
              style={{ color: darkMode ? "#888" : "#666" }}
            >
              © 2025 Crypto Comic
              <br />
              Built by Spidernation and Crew
            </p>
          </div>
        </div>
      </div>
    </>
  );
}