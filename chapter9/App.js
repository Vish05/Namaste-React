import React from 'react';
import ReactDOM from 'react-dom/client';
// import {createElement} from 'react';
import logo from './images/logo.png';
import avatar from './images/avatar.png'

 
const Title = () => (
<img 
className='logo'
alt="logo"
src={logo}
/>);


const Header = () => {
   return (
      <div className='header'>
        <Title/>
        <div className='nav-items'>
         <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>cart</li>
         </ul>
        </div>
      </div>
   );
};
// Config Driven UI
// const config = {
//       type: "carousel",
//       cards: [
//          {
//             offerName: "50% off"
//          },
//          {
//             offerName: "No Delivery Charges"
//          },
//          {
//             offerName: "40% off"
//          },
//       ],
//       type: "restaurants",
//       cards: [
      
//    ]
// }

const restaurantList = [
            {
              "type": "restaurant",
              "data": {
                "type": "F",
                "id": "137529",
                "name": "FNP Cakes N More",
                "uuid": "7dc6662b-3c52-4fde-94f0-4e48b2fa35d7",
                "city": "65",
                "area": "Patel Nagar",
                "totalRatingsString": "500+ ratings",
                "cloudinaryImageId": "unyj9ivdyjb1ca7ugwcs",
                "cuisines": [
                  "Cafe",
                  "Desserts"
                ],
                "tags": [
                  
                ],
                "costForTwo": 22500,
                "costForTwoString": "₹225 FOR TWO",
                "deliveryTime": 27,
                "minDeliveryTime": 27,
                "maxDeliveryTime": 27,
                "slaString": "27 MINS",
                "lastMileTravel": 5,
                "slugs": {
                  "restaurant": "fnp-cakes-n-more-city-center-city-centre",
                  "city": "gwalior"
                },
                "cityState": "65",
                "address": "G 183, Patel Nagar, Green Garden Road, City Center, Gwalior",
                "locality": "LASHKAR",
                "parentId": 15442,
                "unserviceable": false,
                "veg": true,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [
                  
                ],
                "aggregatedDiscountInfo": {
                  "header": "60% off",
                  "shortDescriptionList": [
                    {
                      "meta": "60% off | Use WELCOMEBACK",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "subHeader": "",
                  "headerType": 0,
                  "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                  "header": "60% OFF",
                  "shortDescriptionList": [
                    {
                      "meta": "Use WELCOMEBACK",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "subHeader": "",
                  "headerType": 0,
                  "superFreedel": ""
                },
                "ribbon": [
                  {
                    "type": "PROMOTED"
                  }
                ],
                "chain": [
                  
                ],
                "feeDetails": {
                  "fees": [
                    {
                      "name": "distance",
                      "fee": 2900,
                      "message": ""
                    },
                    {
                      "name": "time",
                      "fee": 0,
                      "message": ""
                    },
                    {
                      "name": "special",
                      "fee": 0,
                      "message": ""
                    }
                  ],
                  "totalFees": 2900,
                  "message": "",
                  "title": "Delivery Charge",
                  "amount": "2900",
                  "icon": ""
                },
                "availability": {
                  "opened": true,
                  "nextOpenMessage": "",
                  "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "cid=5594646~p=1~eid=00000185-a95a-5199-2f68-31540089010e",
                "badges": {
                  "imageBased": [
                    
                  ],
                  "textBased": [
                    
                  ],
                  "textExtendedBadges": [
                    
                  ]
                },
                "lastMileTravelString": "5 kms",
                "hasSurge": false,
                "sla": {
                  "restaurantId": "137529",
                  "deliveryTime": 27,
                  "minDeliveryTime": 27,
                  "maxDeliveryTime": 27,
                  "lastMileTravel": 5,
                  "lastMileDistance": 0,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "NONE",
                  "longDistance": "NOT_LONG_DISTANCE",
                  "preferentialService": false,
                  "iconType": "EMPTY"
                },
                "promoted": true,
                "avgRating": "3.7",
                "totalRatings": 500,
                "new": false
              },
              "subtype": "basic"
            },
            {
              "type": "restaurant",
              "data": {
                "type": "F",
                "id": "239830",
                "name": "Subhash Mishtan Bhandar",
                "uuid": "07f1ad66-c7a5-4788-adc3-243d26b46a00",
                "city": "65",
                "area": "Shinde Ki Chhawani",
                "totalRatingsString": "100+ ratings",
                "cloudinaryImageId": "skxwcuubvdeu2fn5uelu",
                "cuisines": [
                  "Sweets"
                ],
                "tags": [
                  
                ],
                "costForTwo": 15000,
                "costForTwoString": "₹150 FOR TWO",
                "deliveryTime": 20,
                "minDeliveryTime": 20,
                "maxDeliveryTime": 20,
                "slaString": "20 MINS",
                "lastMileTravel": 1.7000000476837158,
                "slugs": {
                  "restaurant": "subhash-mishtan-bhandar-lashkar-lashkar",
                  "city": "gwalior"
                },
                "cityState": "65",
                "address": "Shinde Ki Chawani Lashkar Gwalior",
                "locality": "Lashkar",
                "parentId": 196271,
                "unserviceable": false,
                "veg": true,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [
                  
                ],
                "aggregatedDiscountInfo": {
                  "header": "60% off",
                  "shortDescriptionList": [
                    {
                      "meta": "60% off | Use WELCOMEBACK",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "subHeader": "",
                  "headerType": 0,
                  "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                  "header": "60% OFF",
                  "shortDescriptionList": [
                    {
                      "meta": "Use WELCOMEBACK",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "subHeader": "",
                  "headerType": 0,
                  "superFreedel": ""
                },
                "chain": [
                  
                ],
                "feeDetails": {
                  "fees": [
                    {
                      "name": "distance",
                      "fee": 1900,
                      "message": ""
                    },
                    {
                      "name": "time",
                      "fee": 0,
                      "message": ""
                    },
                    {
                      "name": "special",
                      "fee": 0,
                      "message": ""
                    }
                  ],
                  "totalFees": 1900,
                  "message": "",
                  "title": "Delivery Charge",
                  "amount": "1900",
                  "icon": ""
                },
                "availability": {
                  "opened": true,
                  "nextOpenMessage": "",
                  "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                  "imageBased": [
                    
                  ],
                  "textBased": [
                    
                  ],
                  "textExtendedBadges": [
                    
                  ]
                },
                "lastMileTravelString": "1.7 kms",
                "hasSurge": false,
                "sla": {
                  "restaurantId": "239830",
                  "deliveryTime": 20,
                  "minDeliveryTime": 20,
                  "maxDeliveryTime": 20,
                  "lastMileTravel": 1.7000000476837158,
                  "lastMileDistance": 0,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "NONE",
                  "longDistance": "NOT_LONG_DISTANCE",
                  "preferentialService": false,
                  "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "4.0",
                "totalRatings": 100,
                "new": false
              },
              "subtype": "basic"
            },
            {
              "type": "restaurant",
              "data": {
                "type": "F",
                "id": "170542",
                "name": "KremyKraft (A Unit of Amrat Bakers)",
                "uuid": "854ded11-e197-407e-ac74-89add4aceea9",
                "city": "65",
                "area": "Fort View Colony",
                "totalRatingsString": "500+ ratings",
                "cloudinaryImageId": "up0nkshsbvvvxe6bil87",
                "cuisines": [
                  "Bakery",
                  "Desserts"
                ],
                "tags": [
                  
                ],
                "costForTwo": 17500,
                "costForTwoString": "₹175 FOR TWO",
                "deliveryTime": 29,
                "minDeliveryTime": 29,
                "maxDeliveryTime": 29,
                "slaString": "29 MINS",
                "lastMileTravel": 1.100000023841858,
                "slugs": {
                  "restaurant": "kremykraft-a-unit-of-amrat-bakers-lashkar",
                  "city": "gwalior"
                },
                "cityState": "65",
                "address": "A 13, New Fort View Colony, Koteshwar Road, Gwalior",
                "locality": "Koteshwar Road",
                "parentId": 120610,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [
                  
                ],
                "aggregatedDiscountInfo": {
                  "header": "60% off",
                  "shortDescriptionList": [
                    {
                      "meta": "60% off | Use TRYNEW",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "60% off up to ₹120 | Use code TRYNEW",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "subHeader": "",
                  "headerType": 0,
                  "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                  "header": "60% OFF",
                  "shortDescriptionList": [
                    {
                      "meta": "Use TRYNEW",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "60% off up to ₹120 | Use code TRYNEW",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "subHeader": "",
                  "headerType": 0,
                  "superFreedel": ""
                },
                "chain": [
                  
                ],
                "feeDetails": {
                  "fees": [
                    {
                      "name": "distance",
                      "fee": 1900,
                      "message": ""
                    },
                    {
                      "name": "time",
                      "fee": 0,
                      "message": ""
                    },
                    {
                      "name": "special",
                      "fee": 0,
                      "message": ""
                    }
                  ],
                  "totalFees": 1900,
                  "message": "",
                  "title": "Delivery Charge",
                  "amount": "1900",
                  "icon": ""
                },
                "availability": {
                  "opened": true,
                  "nextOpenMessage": "",
                  "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                  "imageBased": [
                    
                  ],
                  "textBased": [
                    
                  ],
                  "textExtendedBadges": [
                    
                  ]
                },
                "lastMileTravelString": "1.1 kms",
                "hasSurge": false,
                "sla": {
                  "restaurantId": "170542",
                  "deliveryTime": 29,
                  "minDeliveryTime": 29,
                  "maxDeliveryTime": 29,
                  "lastMileTravel": 1.100000023841858,
                  "lastMileDistance": 0,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "NONE",
                  "longDistance": "NOT_LONG_DISTANCE",
                  "preferentialService": false,
                  "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "3.3",
                "totalRatings": 500,
                "new": false
              },
              "subtype": "basic"
            },
            {
              "type": "restaurant",
              "data": {
                "type": "F",
                "id": "557930",
                "name": "Shri Panwadi Poha Center",
                "uuid": "f6265937-706c-4fee-85c3-837ba81fa450",
                "city": "65",
                "area": "Lashkar",
                "totalRatingsString": "50+ ratings",
                "cloudinaryImageId": "ov4hgpsd3lhppqpseo0i",
                "cuisines": [
                  "Snacks"
                ],
                "tags": [
                  
                ],
                "costForTwo": 10000,
                "costForTwoString": "₹100 FOR TWO",
                "deliveryTime": 25,
                "minDeliveryTime": 25,
                "maxDeliveryTime": 25,
                "slaString": "25 MINS",
                "lastMileTravel": 2.4000000953674316,
                "slugs": {
                  "restaurant": "shri-panwadi-poha-center-lashkar-lashkar",
                  "city": "gwalior"
                },
                "cityState": "65",
                "address": "GROUND FLOOR GHAU GHAT INDERGANJ CHAURAHA LASHKAR   474001",
                "locality": "Lashkar",
                "parentId": 335509,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [
                  
                ],
                "chain": [
                  
                ],
                "feeDetails": {
                  "fees": [
                    {
                      "name": "distance",
                      "fee": 1900,
                      "message": ""
                    },
                    {
                      "name": "time",
                      "fee": 0,
                      "message": ""
                    },
                    {
                      "name": "special",
                      "fee": 0,
                      "message": ""
                    }
                  ],
                  "totalFees": 1900,
                  "message": "",
                  "title": "Delivery Charge",
                  "amount": "1900",
                  "icon": ""
                },
                "availability": {
                  "opened": true,
                  "nextOpenMessage": "",
                  "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                  "imageBased": [
                    
                  ],
                  "textBased": [
                    
                  ],
                  "textExtendedBadges": [
                    
                  ]
                },
                "lastMileTravelString": "2.4 kms",
                "hasSurge": false,
                "sla": {
                  "restaurantId": "557930",
                  "deliveryTime": 25,
                  "minDeliveryTime": 25,
                  "maxDeliveryTime": 25,
                  "lastMileTravel": 2.4000000953674316,
                  "lastMileDistance": 0,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "NONE",
                  "longDistance": "NOT_LONG_DISTANCE",
                  "preferentialService": false,
                  "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "3.8",
                "totalRatings": 50,
                "new": false
              },
              "subtype": "basic"
            },
            {
              "type": "restaurant",
              "data": {
                "type": "F",
                "id": "122009",
                "name": "Shan-Shaukat",
                "uuid": "dfc3dfaf-9c18-4452-9699-1423336a35a3",
                "city": "65",
                "area": "Shinde Ki Chhawani",
                "totalRatingsString": "1000+ ratings",
                "cloudinaryImageId": "nsxl9dmzosp9anykxvgx",
                "cuisines": [
                  "Snacks",
                  "Sweets"
                ],
                "tags": [
                  
                ],
                "costForTwo": 22500,
                "costForTwoString": "₹225 FOR TWO",
                "deliveryTime": 23,
                "minDeliveryTime": 23,
                "maxDeliveryTime": 23,
                "slaString": "23 MINS",
                "lastMileTravel": 1.7000000476837158,
                "slugs": {
                  "restaurant": "shan-shaukat-shinde-ki-chhawani-lashkar",
                  "city": "gwalior"
                },
                "cityState": "65",
                "address": "Mlb Road, Shinde Ki Chhawani, Gwalior",
                "locality": "Shinde Ki Chhawani",
                "parentId": 181830,
                "unserviceable": false,
                "veg": true,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [
                  
                ],
                "aggregatedDiscountInfo": {
                  "header": "60% off",
                  "shortDescriptionList": [
                    {
                      "meta": "60% off | Use WELCOMEBACK",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "subHeader": "",
                  "headerType": 0,
                  "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                  "header": "60% OFF",
                  "shortDescriptionList": [
                    {
                      "meta": "Use WELCOMEBACK",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "subHeader": "",
                  "headerType": 0,
                  "superFreedel": ""
                },
                "chain": [
                  
                ],
                "feeDetails": {
                  "fees": [
                    {
                      "name": "distance",
                      "fee": 1900,
                      "message": ""
                    },
                    {
                      "name": "time",
                      "fee": 0,
                      "message": ""
                    },
                    {
                      "name": "special",
                      "fee": 0,
                      "message": ""
                    }
                  ],
                  "totalFees": 1900,
                  "message": "",
                  "title": "Delivery Charge",
                  "amount": "1900",
                  "icon": ""
                },
                "availability": {
                  "opened": true,
                  "nextOpenMessage": "",
                  "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                  "imageBased": [
                    
                  ],
                  "textBased": [
                    
                  ],
                  "textExtendedBadges": [
                    
                  ]
                },
                "lastMileTravelString": "1.7 kms",
                "hasSurge": false,
                "sla": {
                  "restaurantId": "122009",
                  "deliveryTime": 23,
                  "minDeliveryTime": 23,
                  "maxDeliveryTime": 23,
                  "lastMileTravel": 1.7000000476837158,
                  "lastMileDistance": 0,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "NONE",
                  "longDistance": "NOT_LONG_DISTANCE",
                  "preferentialService": false,
                  "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "3.8",
                "totalRatings": 1000,
                "new": false
              },
              "subtype": "basic"
            },
            {
              "type": "restaurant",
              "data": {
                "type": "F",
                "id": "93723",
                "name": "Handi - Hotel Banjara",
                "uuid": "99acb916-cc7b-46ec-b1f7-dfd514f0c3f3",
                "city": "65",
                "area": "Jayendraganj",
                "totalRatingsString": "100+ ratings",
                "cloudinaryImageId": "q0kejxhffmgnz7daj3s4",
                "cuisines": [
                  "Indian",
                  "Chinese",
                  "Beverages"
                ],
                "tags": [
                  
                ],
                "costForTwo": 35000,
                "costForTwoString": "₹350 FOR TWO",
                "deliveryTime": 41,
                "minDeliveryTime": 41,
                "maxDeliveryTime": 41,
                "slaString": "41 MINS",
                "lastMileTravel": 2.0999999046325684,
                "slugs": {
                  "restaurant": "handi-hotel-banjara-lashkar-lashkar",
                  "city": "gwalior"
                },
                "cityState": "65",
                "address": "old high court lane,lashkar",
                "locality": "lashkar",
                "parentId": 93067,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [
                  
                ],
                "aggregatedDiscountInfo": {
                  "header": "60% off",
                  "shortDescriptionList": [
                    {
                      "meta": "60% off | Use WELCOMEBACK",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "subHeader": "",
                  "headerType": 0,
                  "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                  "header": "60% OFF",
                  "shortDescriptionList": [
                    {
                      "meta": "Use WELCOMEBACK",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "subHeader": "",
                  "headerType": 0,
                  "superFreedel": ""
                },
                "chain": [
                  
                ],
                "feeDetails": {
                  "fees": [
                    {
                      "name": "distance",
                      "fee": 1900,
                      "message": ""
                    },
                    {
                      "name": "time",
                      "fee": 0,
                      "message": ""
                    },
                    {
                      "name": "special",
                      "fee": 0,
                      "message": ""
                    }
                  ],
                  "totalFees": 1900,
                  "message": "",
                  "title": "Delivery Charge",
                  "amount": "1900",
                  "icon": ""
                },
                "availability": {
                  "opened": true,
                  "nextOpenMessage": "",
                  "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                  "imageBased": [
                    
                  ],
                  "textBased": [
                    
                  ],
                  "textExtendedBadges": [
                    
                  ]
                },
                "lastMileTravelString": "2 kms",
                "hasSurge": false,
                "sla": {
                  "restaurantId": "93723",
                  "deliveryTime": 41,
                  "minDeliveryTime": 41,
                  "maxDeliveryTime": 41,
                  "lastMileTravel": 2.0999999046325684,
                  "lastMileDistance": 0,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "NONE",
                  "longDistance": "NOT_LONG_DISTANCE",
                  "preferentialService": false,
                  "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "3.2",
                "totalRatings": 100,
                "new": false
              },
              "subtype": "basic"
            },
            {
              "type": "restaurant",
              "data": {
                "type": "F",
                "id": "159633",
                "name": "Suresh Ji Ke Namkeen",
                "uuid": "aeb1a2d1-bdd1-4a61-b012-830156f7ff50",
                "city": "65",
                "area": "Dana Oli",
                "totalRatingsString": "100+ ratings",
                "cloudinaryImageId": "hzgtlpwu7n4cu04ho9as",
                "cuisines": [
                  "Bakery",
                  "Sweets"
                ],
                "tags": [
                  
                ],
                "costForTwo": 15000,
                "costForTwoString": "₹150 FOR TWO",
                "deliveryTime": 29,
                "minDeliveryTime": 29,
                "maxDeliveryTime": 29,
                "slaString": "29 MINS",
                "lastMileTravel": 2.0999999046325684,
                "slugs": {
                  "restaurant": "suresh-ji-ke-namkeen-lashkar",
                  "city": "gwalior"
                },
                "cityState": "65",
                "address": "DANA ALI, NEAR GIVE & TAKE, LASHKAR",
                "locality": "lashkar",
                "parentId": 197816,
                "unserviceable": false,
                "veg": true,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [
                  
                ],
                "chain": [
                  
                ],
                "feeDetails": {
                  "fees": [
                    {
                      "name": "distance",
                      "fee": 1900,
                      "message": ""
                    },
                    {
                      "name": "time",
                      "fee": 0,
                      "message": ""
                    },
                    {
                      "name": "special",
                      "fee": 0,
                      "message": ""
                    }
                  ],
                  "totalFees": 1900,
                  "message": "",
                  "title": "Delivery Charge",
                  "amount": "1900",
                  "icon": ""
                },
                "availability": {
                  "opened": true,
                  "nextOpenMessage": "",
                  "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                  "imageBased": [
                    
                  ],
                  "textBased": [
                    
                  ],
                  "textExtendedBadges": [
                    
                  ]
                },
                "lastMileTravelString": "2 kms",
                "hasSurge": false,
                "sla": {
                  "restaurantId": "159633",
                  "deliveryTime": 29,
                  "minDeliveryTime": 29,
                  "maxDeliveryTime": 29,
                  "lastMileTravel": 2.0999999046325684,
                  "lastMileDistance": 0,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "NONE",
                  "longDistance": "NOT_LONG_DISTANCE",
                  "preferentialService": false,
                  "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "3.9",
                "totalRatings": 100,
                "new": false
              },
              "subtype": "basic"
            },
            {
              "type": "restaurant",
              "data": {
                "type": "F",
                "id": "100677",
                "name": "Lama Bakery",
                "uuid": "561e8ebb-1889-4ca1-9799-fc25f3836e16",
                "city": "65",
                "area": "Daulat Ganj",
                "totalRatingsString": "1000+ ratings",
                "cloudinaryImageId": "qnwelc3ofqyqzqvv5xqn",
                "cuisines": [
                  "Desserts"
                ],
                "tags": [
                  
                ],
                "costForTwo": 22500,
                "costForTwoString": "₹225 FOR TWO",
                "deliveryTime": 25,
                "minDeliveryTime": 25,
                "maxDeliveryTime": 25,
                "slaString": "25 MINS",
                "lastMileTravel": 2.0999999046325684,
                "slugs": {
                  "restaurant": "lama-bakery-lashkar-lashkar",
                  "city": "gwalior"
                },
                "cityState": "65",
                "address": "Behind Bank Of Maharashtra, Patankar Bazar, Lashkar, Gwalior",
                "locality": "lashkar",
                "parentId": 123388,
                "unserviceable": false,
                "veg": true,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [
                  
                ],
                "aggregatedDiscountInfo": {
                  "header": "20% off",
                  "shortDescriptionList": [
                    {
                      "meta": "20% off | Use JUMBO",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "20% off up to ₹100 on orders above ₹400 | Use code JUMBO",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "subHeader": "",
                  "headerType": 0,
                  "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                  "header": "20% OFF",
                  "shortDescriptionList": [
                    {
                      "meta": "Use JUMBO",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "20% off up to ₹100 on orders above ₹400 | Use code JUMBO",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "subHeader": "",
                  "headerType": 0,
                  "superFreedel": ""
                },
                "chain": [
                  
                ],
                "feeDetails": {
                  "fees": [
                    {
                      "name": "distance",
                      "fee": 1900,
                      "message": ""
                    },
                    {
                      "name": "time",
                      "fee": 0,
                      "message": ""
                    },
                    {
                      "name": "special",
                      "fee": 0,
                      "message": ""
                    }
                  ],
                  "totalFees": 1900,
                  "message": "",
                  "title": "Delivery Charge",
                  "amount": "1900",
                  "icon": ""
                },
                "availability": {
                  "opened": true,
                  "nextOpenMessage": "",
                  "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                  "imageBased": [
                    
                  ],
                  "textBased": [
                    
                  ],
                  "textExtendedBadges": [
                    
                  ]
                },
                "lastMileTravelString": "2 kms",
                "hasSurge": false,
                "sla": {
                  "restaurantId": "100677",
                  "deliveryTime": 25,
                  "minDeliveryTime": 25,
                  "maxDeliveryTime": 25,
                  "lastMileTravel": 2.0999999046325684,
                  "lastMileDistance": 0,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "NONE",
                  "longDistance": "NOT_LONG_DISTANCE",
                  "preferentialService": false,
                  "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "3.7",
                "totalRatings": 1000,
                "new": false
              },
              "subtype": "basic"
            },
            {
              "type": "restaurant",
              "data": {
                "type": "F",
                "id": "156876",
                "name": "Maa Pitambara Poha and Lassi Center",
                "uuid": "5e337059-10b5-4808-b193-7ee36a854ca8",
                "city": "65",
                "area": "Phoolbagh",
                "totalRatingsString": "1000+ ratings",
                "cloudinaryImageId": "xzjkyocyb0qixmvjurq5",
                "cuisines": [
                  "Indian",
                  "North Indian"
                ],
                "tags": [
                  
                ],
                "costForTwo": 15000,
                "costForTwoString": "₹150 FOR TWO",
                "deliveryTime": 24,
                "minDeliveryTime": 24,
                "maxDeliveryTime": 24,
                "slaString": "24 MINS",
                "lastMileTravel": 3,
                "slugs": {
                  "restaurant": "maa-pitambara-poha-and-lassi-center-lashkar",
                  "city": "gwalior"
                },
                "cityState": "65",
                "address": "SHOP NO 12, LAXMI BAI COLONY, PADAV",
                "locality": "lashkar",
                "parentId": 127849,
                "unserviceable": false,
                "veg": true,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [
                  
                ],
                "aggregatedDiscountInfo": {
                  "header": "60% off",
                  "shortDescriptionList": [
                    {
                      "meta": "60% off | Use WELCOMEBACK",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "subHeader": "",
                  "headerType": 0,
                  "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                  "header": "60% OFF",
                  "shortDescriptionList": [
                    {
                      "meta": "Use WELCOMEBACK",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "subHeader": "",
                  "headerType": 0,
                  "superFreedel": ""
                },
                "chain": [
                  
                ],
                "feeDetails": {
                  "fees": [
                    {
                      "name": "distance",
                      "fee": 1900,
                      "message": ""
                    },
                    {
                      "name": "time",
                      "fee": 0,
                      "message": ""
                    },
                    {
                      "name": "special",
                      "fee": 0,
                      "message": ""
                    }
                  ],
                  "totalFees": 1900,
                  "message": "",
                  "title": "Delivery Charge",
                  "amount": "1900",
                  "icon": ""
                },
                "availability": {
                  "opened": true,
                  "nextOpenMessage": "",
                  "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                  "imageBased": [
                    
                  ],
                  "textBased": [
                    
                  ],
                  "textExtendedBadges": [
                    
                  ]
                },
                "lastMileTravelString": "3 kms",
                "hasSurge": false,
                "sla": {
                  "restaurantId": "156876",
                  "deliveryTime": 24,
                  "minDeliveryTime": 24,
                  "maxDeliveryTime": 24,
                  "lastMileTravel": 3,
                  "lastMileDistance": 0,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "NONE",
                  "longDistance": "NOT_LONG_DISTANCE",
                  "preferentialService": false,
                  "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "4.4",
                "totalRatings": 1000,
                "new": false
              },
              "subtype": "basic"
            },
            {
              "type": "restaurant",
              "data": {
                "type": "F",
                "id": "253139",
                "name": "Chaurasiya Poha & Lassi - Nai Sadak",
                "uuid": "05582497-8978-4406-ac27-0ea096efc88f",
                "city": "65",
                "area": "Shekh Ki Bagiya",
                "totalRatingsString": "100+ ratings",
                "cloudinaryImageId": "zoeq4qj5lsz3dpjgefsa",
                "cuisines": [
                  "Indian",
                  "Continental",
                  "Fast Food"
                ],
                "tags": [
                  
                ],
                "costForTwo": 5000,
                "costForTwoString": "₹50 FOR TWO",
                "deliveryTime": 26,
                "minDeliveryTime": 26,
                "maxDeliveryTime": 26,
                "slaString": "26 MINS",
                "lastMileTravel": 2.299999952316284,
                "slugs": {
                  "restaurant": "chaurasiya-poha---foolbagh-lashkar-lashkar",
                  "city": "gwalior"
                },
                "cityState": "65",
                "address": "Near filmistan talkies nai sadak lashkar gwalior",
                "locality": "Lashkar",
                "parentId": 58796,
                "unserviceable": false,
                "veg": true,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [
                  
                ],
                "aggregatedDiscountInfo": {
                  "header": "60% off",
                  "shortDescriptionList": [
                    {
                      "meta": "60% off | Use WELCOMEBACK",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "subHeader": "",
                  "headerType": 0,
                  "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                  "header": "60% OFF",
                  "shortDescriptionList": [
                    {
                      "meta": "Use WELCOMEBACK",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "subHeader": "",
                  "headerType": 0,
                  "superFreedel": ""
                },
                "chain": [
                  
                ],
                "feeDetails": {
                  "fees": [
                    {
                      "name": "distance",
                      "fee": 1900,
                      "message": ""
                    },
                    {
                      "name": "time",
                      "fee": 0,
                      "message": ""
                    },
                    {
                      "name": "special",
                      "fee": 0,
                      "message": ""
                    }
                  ],
                  "totalFees": 1900,
                  "message": "",
                  "title": "Delivery Charge",
                  "amount": "1900",
                  "icon": ""
                },
                "availability": {
                  "opened": true,
                  "nextOpenMessage": "",
                  "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                  "imageBased": [
                    
                  ],
                  "textBased": [
                    
                  ],
                  "textExtendedBadges": [
                    
                  ]
                },
                "lastMileTravelString": "2.2 kms",
                "hasSurge": false,
                "sla": {
                  "restaurantId": "253139",
                  "deliveryTime": 26,
                  "minDeliveryTime": 26,
                  "maxDeliveryTime": 26,
                  "lastMileTravel": 2.299999952316284,
                  "lastMileDistance": 0,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "NONE",
                  "longDistance": "NOT_LONG_DISTANCE",
                  "preferentialService": false,
                  "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "3.5",
                "totalRatings": 100,
                "new": false
              },
              "subtype": "basic"
            },
            {
              "type": "restaurant",
              "data": {
                "type": "F",
                "id": "351760",
                "name": "SS Kachori Wala",
                "uuid": "4784a8f6-6610-4b1d-b4f2-b0dbb5876a96",
                "city": "65",
                "area": "Lohiya Bazaar",
                "totalRatingsString": "100+ ratings",
                "cloudinaryImageId": "yi4jofmeji962y9rzvow",
                "cuisines": [
                  "Chaat",
                  "Sweets"
                ],
                "tags": [
                  
                ],
                "costForTwo": 25000,
                "costForTwoString": "₹250 FOR TWO",
                "deliveryTime": 28,
                "minDeliveryTime": 28,
                "maxDeliveryTime": 28,
                "slaString": "28 MINS",
                "lastMileTravel": 3,
                "slugs": {
                  "restaurant": "ss-kachori---ram-sawaroop-ram-charan-lashkar-lashkar",
                  "city": "gwalior"
                },
                "cityState": "65",
                "address": "Naya Bazar, Kampoo, Lashkar",
                "locality": "Lashkar",
                "parentId": 195107,
                "unserviceable": false,
                "veg": true,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [
                  
                ],
                "aggregatedDiscountInfo": {
                  "header": "15% off",
                  "shortDescriptionList": [
                    {
                      "meta": "15% off | Use PARTY",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "15% off | Use code PARTY",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "subHeader": "",
                  "headerType": 0,
                  "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                  "header": "15% OFF",
                  "shortDescriptionList": [
                    {
                      "meta": "Use PARTY",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "15% off | Use code PARTY",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "subHeader": "",
                  "headerType": 0,
                  "superFreedel": ""
                },
                "chain": [
                  
                ],
                "feeDetails": {
                  "fees": [
                    {
                      "name": "distance",
                      "fee": 1900,
                      "message": ""
                    },
                    {
                      "name": "time",
                      "fee": 0,
                      "message": ""
                    },
                    {
                      "name": "special",
                      "fee": 0,
                      "message": ""
                    }
                  ],
                  "totalFees": 1900,
                  "message": "",
                  "title": "Delivery Charge",
                  "amount": "1900",
                  "icon": ""
                },
                "availability": {
                  "opened": true,
                  "nextOpenMessage": "",
                  "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                  "imageBased": [
                    
                  ],
                  "textBased": [
                    
                  ],
                  "textExtendedBadges": [
                    
                  ]
                },
                "lastMileTravelString": "3 kms",
                "hasSurge": false,
                "sla": {
                  "restaurantId": "351760",
                  "deliveryTime": 28,
                  "minDeliveryTime": 28,
                  "maxDeliveryTime": 28,
                  "lastMileTravel": 3,
                  "lastMileDistance": 0,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "NONE",
                  "longDistance": "NOT_LONG_DISTANCE",
                  "preferentialService": false,
                  "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "4.2",
                "totalRatings": 100,
                "new": false
              },
              "subtype": "basic"
            },
            {
              "type": "restaurant",
              "data": {
                "type": "F",
                "id": "125828",
                "name": "Atithi Inn",
                "uuid": "50923574-8e02-41cd-8e2a-93e98cdc2f2d",
                "city": "65",
                "area": "Ravi Nagar",
                "totalRatingsString": "Too Few Ratings",
                "cloudinaryImageId": "rmib3vjuwx5nde1zs2ks",
                "cuisines": [
                  "Indian",
                  "Chinese",
                  "North Indian"
                ],
                "tags": [
                  
                ],
                "costForTwo": 45000,
                "costForTwoString": "₹450 FOR TWO",
                "deliveryTime": 35,
                "minDeliveryTime": 35,
                "maxDeliveryTime": 35,
                "slaString": "35 MINS",
                "lastMileTravel": 2.5999999046325684,
                "slugs": {
                  "restaurant": "atithi-inn-lashkar-lashkar",
                  "city": "gwalior"
                },
                "cityState": "65",
                "address": "City Square, Main Phoolbagh, Sai Baba Mandir Road, Near GDA Office, Ravi Nagar, Lashkar, Gwalior",
                "locality": "LASHKAR",
                "parentId": 37581,
                "unserviceable": false,
                "veg": true,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [
                  
                ],
                "chain": [
                  
                ],
                "feeDetails": {
                  "fees": [
                    {
                      "name": "distance",
                      "fee": 1900,
                      "message": ""
                    },
                    {
                      "name": "time",
                      "fee": 0,
                      "message": ""
                    },
                    {
                      "name": "special",
                      "fee": 0,
                      "message": ""
                    }
                  ],
                  "totalFees": 1900,
                  "message": "",
                  "title": "Delivery Charge",
                  "amount": "1900",
                  "icon": ""
                },
                "availability": {
                  "opened": true,
                  "nextOpenMessage": "",
                  "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                  "imageBased": [
                    
                  ],
                  "textBased": [
                    
                  ],
                  "textExtendedBadges": [
                    
                  ]
                },
                "lastMileTravelString": "2.5 kms",
                "hasSurge": false,
                "sla": {
                  "restaurantId": "125828",
                  "deliveryTime": 35,
                  "minDeliveryTime": 35,
                  "maxDeliveryTime": 35,
                  "lastMileTravel": 2.5999999046325684,
                  "lastMileDistance": 0,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "NONE",
                  "longDistance": "NOT_LONG_DISTANCE",
                  "preferentialService": false,
                  "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "--",
                "totalRatings": 0,
                "new": false
              },
              "subtype": "basic"
            },
            {
              "type": "restaurant",
              "data": {
                "type": "F",
                "id": "357989",
                "name": "Jay Kali Mata Nasta Corner",
                "uuid": "19ef9244-de58-44e8-95a1-f884199a2706",
                "city": "65",
                "area": "Lashkar",
                "totalRatingsString": "Too Few Ratings",
                "cloudinaryImageId": "pa7wrigjeazhlj42p7hx",
                "cuisines": [
                  "Street Food",
                  "Indian",
                  "Snacks"
                ],
                "tags": [
                  
                ],
                "costForTwo": 15000,
                "costForTwoString": "₹150 FOR TWO",
                "deliveryTime": 36,
                "minDeliveryTime": 36,
                "maxDeliveryTime": 36,
                "slaString": "36 MINS",
                "lastMileTravel": 2.4000000953674316,
                "slugs": {
                  "restaurant": "jay-kali-mata-nasta-corner-city-centre-city-centre",
                  "city": "gwalior"
                },
                "cityState": "65",
                "address": "IN FRONT OF PATRIKA OFFICE PHOIOLBAGH GWALIOR , 474001",
                "locality": "Lashkar",
                "parentId": 110129,
                "unserviceable": false,
                "veg": true,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [
                  
                ],
                "aggregatedDiscountInfo": {
                  "header": "60% off",
                  "shortDescriptionList": [
                    {
                      "meta": "60% off | Use WELCOMEBACK",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "subHeader": "",
                  "headerType": 0,
                  "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                  "header": "60% OFF",
                  "shortDescriptionList": [
                    {
                      "meta": "Use WELCOMEBACK",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "subHeader": "",
                  "headerType": 0,
                  "superFreedel": ""
                },
                "chain": [
                  
                ],
                "feeDetails": {
                  "fees": [
                    {
                      "name": "distance",
                      "fee": 3000,
                      "message": ""
                    },
                    {
                      "name": "time",
                      "fee": 0,
                      "message": ""
                    },
                    {
                      "name": "special",
                      "fee": 0,
                      "message": ""
                    }
                  ],
                  "totalFees": 3000,
                  "message": "",
                  "title": "Delivery Charge",
                  "amount": "3000",
                  "icon": ""
                },
                "availability": {
                  "opened": true,
                  "nextOpenMessage": "",
                  "nextCloseMessage": "Closes soon"
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                  "imageBased": [
                    
                  ],
                  "textBased": [
                    
                  ],
                  "textExtendedBadges": [
                    
                  ]
                },
                "lastMileTravelString": "2.4 kms",
                "hasSurge": false,
                "sla": {
                  "restaurantId": "357989",
                  "deliveryTime": 36,
                  "minDeliveryTime": 36,
                  "maxDeliveryTime": 36,
                  "lastMileTravel": 2.4000000953674316,
                  "lastMileDistance": 0,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "NONE",
                  "longDistance": "NOT_LONG_DISTANCE",
                  "preferentialService": false,
                  "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "--",
                "totalRatings": 0,
                "new": false
              },
              "subtype": "basic"
            },
            {
              "type": "restaurant",
              "data": {
                "type": "F",
                "id": "92615",
                "name": "Parmanand Sweets",
                "uuid": "9f929b33-214b-4dcf-8d6d-87b8444113c7",
                "city": "65",
                "area": "Lohiya Bazaar",
                "totalRatingsString": "1000+ ratings",
                "cloudinaryImageId": "uaxwsccxbvjklekdgx3a",
                "cuisines": [
                  "Sweets",
                  "Bakery",
                  "Snacks",
                  "Desserts",
                  "Beverages"
                ],
                "tags": [
                  
                ],
                "costForTwo": 25000,
                "costForTwoString": "₹250 FOR TWO",
                "deliveryTime": 26,
                "minDeliveryTime": 26,
                "maxDeliveryTime": 26,
                "slaString": "26 MINS",
                "lastMileTravel": 3,
                "slugs": {
                  "restaurant": "parmanand-sweets-madhav-ganj-lashkar",
                  "city": "gwalior"
                },
                "cityState": "65",
                "address": "Naya Bazaar, Gwalior",
                "locality": "lashkar",
                "parentId": 155760,
                "unserviceable": false,
                "veg": true,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [
                  
                ],
                "aggregatedDiscountInfo": {
                  "header": "60% off",
                  "shortDescriptionList": [
                    {
                      "meta": "60% off | Use WELCOMEBACK",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "subHeader": "",
                  "headerType": 0,
                  "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                  "header": "60% OFF",
                  "shortDescriptionList": [
                    {
                      "meta": "Use WELCOMEBACK",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "subHeader": "",
                  "headerType": 0,
                  "superFreedel": ""
                },
                "chain": [
                  
                ],
                "feeDetails": {
                  "fees": [
                    {
                      "name": "distance",
                      "fee": 1900,
                      "message": ""
                    },
                    {
                      "name": "time",
                      "fee": 0,
                      "message": ""
                    },
                    {
                      "name": "special",
                      "fee": 0,
                      "message": ""
                    }
                  ],
                  "totalFees": 1900,
                  "message": "",
                  "title": "Delivery Charge",
                  "amount": "1900",
                  "icon": ""
                },
                "availability": {
                  "opened": true,
                  "nextOpenMessage": "",
                  "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                  "imageBased": [
                    
                  ],
                  "textBased": [
                    
                  ],
                  "textExtendedBadges": [
                    
                  ]
                },
                "lastMileTravelString": "3 kms",
                "hasSurge": false,
                "sla": {
                  "restaurantId": "92615",
                  "deliveryTime": 26,
                  "minDeliveryTime": 26,
                  "maxDeliveryTime": 26,
                  "lastMileTravel": 3,
                  "lastMileDistance": 0,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "NONE",
                  "longDistance": "NOT_LONG_DISTANCE",
                  "preferentialService": false,
                  "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "3.8",
                "totalRatings": 1000,
                "new": false
              },
              "subtype": "basic"
            },
   ] 

// Optional chaining =?
const RestaurantCard = ({name, cuisines, cloudinaryImageId, avgRating}) => {
  
   return (
      <div className="card"> 
         <img 
         src= {
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + 
            cloudinaryImageId}/>
         <h2>{name}</h2>
         <h3>{cuisines.join(", ")}</h3>
         <h4>{avgRating} Stars</h4>
      </div>
   )
}

const Body = () => {
   return (
      <div className='restaurant-List'>
       {restaurantList.map((restaurant) => {
        return <RestaurantCard {...restaurant.data} key={restaurant.data.key}/>;
        }  )}
      </div>
   )
}

const Footer = () => {
   return <h4>Footer </h4>
}

const AppLayout = () => {
   return (
      <React.Fragment>
      <Header/>
      <Body/>
      <Footer/>
      </React.Fragment>
      );
   };



 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<AppLayout/>);
 
