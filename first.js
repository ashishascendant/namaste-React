import React ,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Body from "./src/components/Body";
import Aboutus from "./src/components/Aboutus";
import Contactus from "./src/components/Contactus";
import Error from "./Error";
import Restaurantmenu from "./src/components/Restaurantmenu";


let Grocery = lazy(()=>import("./src/components/Grocery.jsx"))
const App=() => {
       return(
        <div>
        <Header/>
        <Outlet/>
        </div>     
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
