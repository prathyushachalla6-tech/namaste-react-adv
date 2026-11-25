import RestaurantCard from './RestaurantCard';
import resList from '../utils/mockData';
import { useState } from 'react';

const Body = () => {
  let listOfRestaurants = [
    {
    name: 'Theobroma',
    cloudinaryImageId:
      'RX_THUMBNAIL/IMAGES/VENDOR/2026/11/24/2fe3b69f-a5bc-4f96-8459-52dd156d3e4e_18904.JPG',
    cuisines: ['Bakery'],
    avgRating: 4.2,
    costForTwo: '₹200 for two',
    sla: {
      deliveryTime: 25
    }
  },
    {
      name: 'Pizza Hut',
      cloudinaryImageId:
        'RX_THUMBNAIL/IMAGES/VENDOR/2026/11/3/497dbb1c-3b0e-4bed-b447-5512d8f28107_11095.JPG',
      cuisines: ['Pizzas', 'Italian'],
      avgRating: 3.2,
      costForTwo: '₹250 for two',
      sla: {
        deliveryTime: 45
      }
    },
    {
      name: 'Subway',
      cloudinaryImageId:
        'RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/a27e968f-7052-4c08-b3a4-b26e9cd73912_8792.jpg',
      cuisines: ['sandwich', 'Salads', 'wrap', 'Healthy Food'],
      avgRating: '4.7',
      costForTwo: '₹300 for two',
      sla: {
        deliveryTime: 30
      }
    }
  ]

    const [restaturants,setRestaurants]= useState(resList);
  return (
    <div className='body'>
      <div className='filter'>
        <button
          className='filter-btn'
          onClick={() => {
           let filteredList = restaturants.filter(restaurant => restaurant.avgRating >4)
           setRestaurants(filteredList)
          }
        }
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className='res-container'>
        {restaturants.map(restaurant => (
          <RestaurantCard key={restaurant.name} resData={restaurant} />
        ))}
      </div>
    </div>
  )
}

export default Body
