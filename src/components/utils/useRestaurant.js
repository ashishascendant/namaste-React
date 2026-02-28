import React from 'react'
import { RESTAURANTS } from './menumock';
import { useState, useEffect } from "react";

const useRestaurant = (resId) => {
  
   let [restrainfo, setrestrainfo] = useState(null);


useEffect(() => {
  setrestrainfo(RESTAURANTS);
}, [resId]);




 return restrainfo;
  }

export default useRestaurant
