import { NavbarData } from "../data/Navbar";
import { NavLink } from "react-router-dom";
import { useTheme } from '../context/ThemeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="relative w-full h-[45px] flex justify-between items-center p-4 bg-gray-800 dark:bg-gray-900 gap-x-5">
      <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-x-5 ">
        {NavbarData.map((link, idx) => (
          <NavLink
            key={idx}
            to={link.path}
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-semibold text-xl"
                : "text-white font-medium text-xl hover:text-blue-300"
            }
          >
            {link.title}
          </NavLink>
        ))}
      </div>
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full bg-gray-700 dark:bg-gray-800 text-white hover:bg-gray-600"
      >
        {theme === 'dark' ? (
          <SunIcon className="h-6 w-6" />
        ) : (
          <MoonIcon className="h-6 w-6" />
        )}
      </button>
    </div>
  );
};

export default Navbar;