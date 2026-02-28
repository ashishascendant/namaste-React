import React from 'react'
import { useState,useEffect } from 'react'
import { RESTAURANTS } from './utils/menumock';
import Shimmers from './utils/shimmers';
import { useParams } from 'react-router-dom';
import useRestaurant from './utils/useRestaurant';


const Restaurantmenu = () => {
  const {resId}= useParams();
let restrainfo=useRestaurant(resId);


if (restrainfo === null) return <Shimmers/>;

const { name } =
  restrainfo?.data?.cards[0]?.card?.card?.info;

const menuCategory =
  restrainfo?.data?.cards[2]
    ?.groupedCard?.cardGroupMap
    ?.REGULAR?.cards[0]?.card?.card;

const itemCards = menuCategory?.itemCards || [];

return (
  <div>
    <h1>{name}</h1>
    <h2>MENU</h2>

    <ul>
      {itemCards.map((item) => (
        <li key={item.card.info.id}>
          {item.card.info.name}
        </li>
      ))}
    </ul>
  </div>
);
}
 export default Restaurantmenu;