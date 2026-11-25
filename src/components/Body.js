import RestaurantCard from './RestaurantCard'
import { useState, useEffect } from 'react'
import {
  GET_RESTAURANTS_URL,
  GET_RESTAURANT_MENU_URL
} from '../utils/constants'
import Shimmer from './shimmer'

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([])
  const [filteredRestaurants, setFilteredRestaurants] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(GET_RESTAURANT_MENU_URL)
        if (!response.ok) {
          throw new Error(`Restaurant request failed (${response.status}).`)
        }

        const result = await response.json()
        const restaurants = (result?.data?.cards ?? [])
          .flatMap(card => {
            // const cardData = card?.card?.card ?? card?.data?.data
            const cardData = card?.card?.card
            const nestedRestaurants =
              cardData?.gridElements?.infoWithStyle?.restaurants ??
              cardData?.cards
            if (nestedRestaurants?.length) {
              return nestedRestaurants
            }
            return cardData?.info ? [cardData] : []
          })
          .map(restaurant => restaurant?.info ?? restaurant)

        if (restaurants.length === 0) {
          throw new Error('The restaurant API returned no restaurants.')
        }

        setListOfRestaurants(restaurants)
        setFilteredRestaurants(restaurants)
      } catch (fetchError) {
        setError(
          fetchError instanceof Error
            ? fetchError.message
            : 'Unable to load restaurants.'
        )
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  return isLoading ? (
    <Shimmer />
  ) : (
    <div className='body'>
      <div className='filter'>
        <div className='search'>
          <input
            type='text'
            placeholder='Search for restaurants...'
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              const searchedList = searchText.trim().toLowerCase()
              const filteredList = listOfRestaurants.filter(restaurant => {
                return restaurant.name.toLowerCase().includes(searchedList)
              })
              setFilteredRestaurants(filteredList)
            }}
          >
            Search
          </button>
        </div>
        <button
          className='filter-btn'
          onClick={() => {
            let filteredList = listOfRestaurants.filter(
              restaurant => restaurant.avgRating >= 4
            )
            setFilteredRestaurants(filteredList)
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      {error && <p role='alert'>{error}</p>}
      <div className='res-container'>
        {filteredRestaurants.map(restaurant => (
          <RestaurantCard
            key={restaurant.id ?? restaurant.name}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  )
}

export default Body
