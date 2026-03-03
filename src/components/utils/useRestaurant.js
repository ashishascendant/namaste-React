import { useEffect, useState } from "react";
import menuData from "./mock_data.json";

const useRestaurant = (resId) => {
  const [restrainfo, setrestrainfo] = useState(null);

  useEffect(() => {
    // Simulating API delay (optional)
    setTimeout(() => {
      setrestrainfo(menuData);
    }, 500);
  }, [resId]);

  return restrainfo;
};

export default useRestaurant;