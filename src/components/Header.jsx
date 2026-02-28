import { Link } from "react-router-dom";
import useOnlinestatus from "./utils/useOnlinestatus";
import Usercontext from "./utils/Usercontext";
import { useContext } from "react";
const Header=()=>{
    let OnlineStatus = useOnlinestatus();
    let data = useContext(Usercontext);
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

       <ul className="flex items-center gap-8 text-gray-700 font-medium">

  <li className="flex items-center gap-1">
    onlineStatus:
    {OnlineStatus ? (
      <span className="text-green-500 font-bold">●</span>
    ) : (
      <span className="text-red-500 font-bold">●</span>
    )}
  </li>

  <li>
    <Link to="/" className="hover:text-orange-500 transition duration-200">
      HOME
    </Link>
  </li>

  <li>
    <Link to="/grocery" className="hover:text-orange-500 transition duration-200">
      GROCERY
    </Link>
  </li>

  <li>
    <Link to="/aboutus" className="hover:text-orange-500 transition duration-200">
      ABOUT US
    </Link>
  </li>

  <li>
    <Link to="/contactus" className="hover:text-orange-500 transition duration-200">
      CONTACT US
    </Link>
  </li>

  <li>
    <Link to="/cart" className="hover:text-orange-500 transition duration-200">
      CART 🛒
    </Link>
  </li>

  {/* New Item */}
  <li>
    <Link to="/profile" className="hover:text-orange-500 transition duration-200">
      PROFILE
    </Link>
  </li>

  <li>
      {data.PresentUser}
  </li>

</ul>
      </div>

    </div>

  </div>
);

}
export default Header;