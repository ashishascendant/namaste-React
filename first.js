import React ,{lazy,Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Body from "./src/components/Body";
import Aboutus from "./src/components/Aboutus";
import Contactus from "./src/components/Contactus";
import Error from "./Error";
import Restaurantmenu from "./src/components/Restaurantmenu";
import Usercontext from "./src/components/utils/Usercontext.js";



let Grocery = lazy(()=>import("./src/components/Grocery.jsx"))
const App=() => {
       let [username, setusername]=useState()
useEffect(()=>{
       // api calling and taking the name
       const data = "ashish pandey"
       setusername(data);

},[])
       return(
        <Usercontext.Provider value={{PresentUser:username ,setusername}}> /* here the setusername is passed in the usercontext  */      
        <div>
        <Header/>
        <Outlet/>
        </div> 
        </Usercontext.Provider>     
       )
}
 let Route = createBrowserRouter([
       {
         path: "/",
         element: <App/>,
         errorElement: <Error/>,
         
         children:[{ 
              path:"/",
              element:<Body/>

         },
         {
              path:"/grocery",
              element: <Suspense fallback = {<h1>data loading</h1>}> <Grocery/> </Suspense>
         },
         {
              path: "/aboutus",
              element: <Aboutus/>
       },
       {
              path: "/contact",
              element: <Contactus/>
       },
       {
             path:"/rest/:resId",
             element:<Restaurantmenu/>
       }
],
      
       },
      
 ]);



const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={Route}/>)
