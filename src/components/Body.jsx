
import { Link } from "react-router-dom";
import Restcard,{Promotedrest} from "./Restcards";
import restaurants from "./utils/mock_data";
import { Link } from "react-router-dom";
import useOnlinestatus from "./utils/useOnlinestatus";


import Shimmers from "./utils/shimmers";

import { useState,useEffect, useContext} from "react";
import useOnlinestatus from "./utils/useOnlinestatus";
import Usercontext from "./utils/Usercontext";
  
const Body=()=>{
   
let [filteredlist,setfilteredlist]=useState([])
let [reallist,setreallist]=useState([])
let [inputs ,setinputs] =useState("")
 let Onlinestatus=useOnlinestatus();
 let Promotedrestr = Promotedrest(Restcard);
 let {setusername} =useContext(Usercontext);
 let data = useContext(Usercontext);


const fetchdata= async()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6139&lng=77.2090&page_type=DESKTOP_WEB_LISTING")
    const jsondata=await data.json();
    
    const restaurantCard = jsondata?.data?.cards?.find(
    (card) =>
      card?.card?.card?.gridElements?.infoWithStyle?.restaurants
  ); // this is the array or list in the cards which contains the restaurants.

  const restaurants =
    restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || []; // this contains the list which has all the restaurants information.
    console.log(restaurants)


  setfilteredlist(restaurants)
  setreallist(restaurants)

   }
  
   
   useEffect(()=>{
    fetchdata();},[]);
    
    if(reallist.length===0){
    return  <Shimmers/>
   }
  
  
   if(Onlinestatus===false){
    return(<h1>you are offline</h1>)
   }
  


   return( <div className="body">
        <div className="searchandToprated">
          <button className="p-2 bg-cyan-300 mb-2 rounded-lg mt-2" onClick={()=>{
       let restaurants1 =reallist.filter((res)=>res.info.avgRating>"4.3")
       setfilteredlist(restaurants1);
        }}>TOP RATED RESTAURANTS</button>
        <input type="text" className="p-1 border border-solid ml-4 mr-1 mt-2"  value = {inputs} onChange={(e)=>{setinputs(e.target.value)}}/>
        <button className="bg-amber-200 p-1.5 " onClick={()=>{
          let searchres=reallist.filter((resdata)=>resdata.info.name.toLowerCase().includes(inputs))
          setfilteredlist(searchres); 
        }}>search</button>

          <input value = {data.PresentUser} onChange={(e)=>setusername(e.target.value)}  className="p-1 border border-solid ml-4 mr-1 mt-2"/> 
          <button className="p-2 bg-cyan-300 mb-2 rounded-lg mt-2" >Enter</button>
        </div>
       
        <div className= "flex flex-wrap gap-6 px-8 py-6 justify-center">
            {filteredlist.map((rest)=>(
              <Link to={"/rest/" + rest.info.id} key={rest.info.id} className="block w-75"  >  {rest.info.avgRating >=4.5? <Promotedrestr className="border-black border-2" resdata={rest}/> : <Restcard   className="border-black border-2"resdata={rest}/> }</Link>
            ))}
         
          
      </div>
    </div>);
    
}
export default Body;