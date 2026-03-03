import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "./utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleclearCart= ()=>{
      dispatch(clearCart())
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Your Cart
        </h1>
      <button
  className="mb-6 px-6 py-2 bg-red-500 text-white font-semibold 
             rounded-lg shadow-md 
             hover:bg-red-600 hover:shadow-lg 
             active:scale-95 
             transition-all duration-200"
             onClick={()=> handleclearCart()}
>
  Clear Cart
</button>
        {cartItems.map((item, index) => {
          const info = item.card ? item.card.info : item;
          const price = (info.price || info.defaultPrice) / 100;

          return (
            <div
              key={info.id + index}
              className="flex justify-between items-center py-6 border-b last:border-none"
            >
              <div>
                <p className="text-lg font-semibold text-gray-800">
                  {info.name}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  ₹ {price}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <button className="px-4 py-1 border border-green-600 text-green-600 rounded-lg hover:bg-green-600 hover:text-white transition">
                  +
                </button>

                <span className="font-medium">1</span>

                <button className="px-4 py-1 border border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition">
                  −
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;