import React from 'react'
import ReactDOM from 'react-dom/client'

const Header = () => {
  return (
    <div className='header'>
      <div className='logo-container'>
        <img
          src='https://img.magnific.com/free-vector/hand-drawn-healthy-food-logo-design_23-2149669984.jpg?semt=ais_hybrid&w=740&q=80'
          alt='todo'
        />
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const resList = [
  {
    name: 'Millet Express',
    cloudinaryImageId:
      'RX_THUMBNAIL/IMAGES/VENDOR/2025/10/3/a86a613b-4068-42b1-9868-04dd93b21663_746378.JPG',
    cuisines: ['Healthy Food', 'South Indian'],
    avgRating: 4.2,
    costForTwo: '₹200 for two',
    sla: {
      deliveryTime: 25
    }
  },
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
    avgRating: 4.7,
    costForTwo: '₹300 for two',
    sla: {
      deliveryTime: 30
    }
  }
]

/*
const resObj =  {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "746378",
                      "name": "Millet Express",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/3/a86a613b-4068-42b1-9868-04dd93b21663_746378.JPG",
                      "locality": "Gandipet",
                      "areaName": "Nanakramguda",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Healthy Food",
                        "South Indian"
                      ],
                      "avgRating": 4.2,
                      "veg": true,
                      "parentId": "10639",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "5.0K+",
                      "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 2.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "2.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-11-25 03:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          },
                          {
                            "imageId": "Health%20Hub/RX%20BADGE/BADGE2.png",
                            "description": "Meals with high protein, low calorie and no added sugar"
                          },
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "Serves only 100% vegetarian food, with no non-veg items."
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "android/static-assets/icons/big_rx.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Meals with high protein, low calorie and no added sugar",
                                  "imageId": "Health%20Hub/RX%20BADGE/BADGE2.png",
                                  "theme": ""
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Serves only 100% vegetarian food, with no non-veg items.",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "theme": ""
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "loyaltyDiscoverPresentationInfo": {
                        "logoCtx": {
                          "text": "BENEFITS",
                          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                        },
                        "freedelMessage": "FREE DELIVERY"
                      },
                      "orderabilityCommunication": {
                        "title": {

                        },
                        "subTitle": {

                        },
                        "message": {

                        },
                        "customIcon": {

                        "commsStyling": {

                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                      "priceComparisonComms": {

                      }
                    },
                    "analytics": {
                      "context": "seo-data-bde547f4-7d51-4c36-8500-0e51ac7b193f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/hyderabad/millet-express-gandipet-nanakramguda-rest746378",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
              },
              "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                  "text": "BENEFITS",
                  "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "98986a51-ccbc-4706-b7fc-a2074ef83c62",
              "priceComparisonComms": {

              }
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=774041&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food",
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
          }
        
*/

const styleCard = {
  backgroundColor: '#f0f0f0'
}
const RestaurantCard = props => {
  const { resData } = props
  const { name, cuisines, avgRating, costForTwo, sla } = resData
  const { deliveryTime } = sla
  return (
    <div className='res-card' style={styleCard}>
      <img
        className='res-logo'
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData.cloudinaryImageId}`}
        alt='res-logo'
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{deliveryTime} minutes</h4>
      <h4>{costForTwo}</h4>
    </div>
  )
}
const Body = () => {
  return (
    <div className='body'>
      <div className='search'>Search</div>
      <div className='res-container'>
        {resList.map(restaurant => (
          <RestaurantCard key={restaurant.name} resData={restaurant} />
        ))}
      </div>
    </div>
  )
}
const AppLayout = () => {
  return (
    <div className='app'>
      <Header />
      <Body />
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<AppLayout />)
