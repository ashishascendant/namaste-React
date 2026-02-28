import { Link } from "react-router-dom";
import useOnlinestatus from "./utils/useOnlinestatus";
const Header=()=>{
    let OnlineStatus = useOnlinestatus();
   return (
  <div className="bg-white shadow-md sticky top-0 z-50">

    {/* container */}
    <div className="flex justify-between items-center px-8 py-4">

      {/* Logo */}
      <div className="flex items-center">
        <img
          className="w-16 hover:scale-110 transition duration-300"
          src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
          alt="logo"
        />
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-8 text-gray-700 font-medium">

        <span className="flex items-center gap-1">
          onlineStatus:
          {OnlineStatus ? (
            <span className="text-green-500 font-bold">●</span>
          ) : (
            <span className="text-red-500 font-bold">●</span>
          )}
        </span>

        <Link
          to="/"
          className="hover:text-orange-500 transition duration-200"
        >
          HOME
        </Link>

        <Link
          to="/grocery"
          className="hover:text-orange-500 transition duration-200"
        >
          GROCERY
        </Link>

        <Link
          to="/aboutus"
          className="hover:text-orange-500 transition duration-200"
        >
          ABOUT US
        </Link>

        <Link
          to="/contactus"
          className="hover:text-orange-500 transition duration-200"
        >
          CONTACT US
        </Link>

        <Link
          to="/cart"
          className="hover:text-orange-500 transition duration-200"
        >
          CART 🛒
        </Link>

      </div>

    </div>

  </div>
);

}
export default Header;