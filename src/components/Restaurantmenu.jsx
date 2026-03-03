import React, { useState } from "react";
import Shimmers from "./utils/shimmers";
import { useParams } from "react-router-dom";
import useRestaurant from "./utils/useRestaurant";

const Restaurantmenu = () => {
  const { resId } = useParams();
  const restrainfo = useRestaurant(resId);
  const [openIndex, setOpenIndex] = useState(null);

  if (!restrainfo) return <Shimmers />;

  const name =
    restrainfo?.data?.cards?.[0]?.card?.card?.info?.name;

  const categories =
    restrainfo?.data?.cards
      ?.find((card) => card.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards
      ?.filter((card) => card.card?.card?.itemCards);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-10">
        {name}
      </h1>

      {categories?.map((category, index) => {
        const data = category.card.card;

        return (
          <div
            key={data.title}
            className="mb-5 bg-white rounded-2xl shadow-md overflow-hidden border"
          >
            {/* Accordion Header */}
            <div
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="flex justify-between items-center px-6 py-4 cursor-pointer hover:bg-gray-50 transition"
            >
              <h3 className="text-lg font-semibold">
                {data.title}
              </h3>
              <span className="text-xl font-bold">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>

            {/* Items */}
            {openIndex === index && (
              <div className="px-6 pb-4">
                {data.itemCards.map((item) => {
                  const info = item.card.info;
                  const price =
                    (info.price || info.defaultPrice) / 100;

                  return (
                    <div
                      key={info.id}
                      className="flex justify-between items-center py-4 border-b last:border-none"
                    >
                      <div>
                        <p className="font-medium text-gray-800">
                          {info.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          ₹ {price}
                        </p>
                      </div>

                      {/* Button Design Only */}
                      <button
                        className="px-6 py-1.5 text-sm font-bold 
                                   border border-green-600 
                                   text-green-600 
                                   rounded-lg 
                                   shadow-sm 
                                   hover:bg-green-600 
                                   hover:text-white 
                                   hover:shadow-md 
                                   transition-all duration-200"
                                  
                      >
                        ADD
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Restaurantmenu;