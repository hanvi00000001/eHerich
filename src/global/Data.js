export const filterData = [
  {name: 'Racquets', image: require('../assets/racquets.png'), id: '0'},
  {name: 'Shoes', image: require('../assets/shoes.png'), id: '1'},
  {name: 'T-Shirt', image: require('../assets/t-shirt.png'), id: '2'},
  {name: 'Polo', image: require('../assets/polo.png'), id: '3'},
  {name: 'Short', image: require('../assets/short.png'), id: '4'},
  {name: 'Bags', image: require('../assets/bags.png'), id: '5'},
  {name: 'Accessories', image: require('../assets/accessories.png'), id: '6'},
];

export const restaurantsData = [
  {
    restaurantName: 'Mc Donalds',
    farAway: '21.2',
    businessAddress: '22 Bessie street, Cape Town',
    images: 'https://shopvnb.com/uploads/danh_muc/1_3.webp',
    averageReview: 4.9,
    numberOfReview: 272,
    coordinates: {lat: -26.1888612, lng: 28.246325},
    discount: 10,
    deliveryTime: 15,
    collectTime: 5,
    foodType: 'Burgers, Wraps,Milkshakes...',
    productData: [
      {
        name: 'Hand cut chips',
        price: 29.3,
        image: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png',
      },
      {
        name: 'Big Mac',
        price: 50.8,
        image: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png',
      },
      {
        name: 'Chicken Burger',
        price: 70,
        image: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png',
      },
    ],
    id: 0,
  },

  {
    restaurantName: 'KFC',
    farAway: '12.7',
    businessAddress: '22 Bessie street, Cape Town',
    images: 'https://bukasapics.s3.us-east-2.amazonaws.com/macdo.png',
    averageReview: 4.3,
    numberOfReview: 306,
    coordinates: {lat: -26.1891648, lng: 28.2441808},
    discount: 20,
    deliveryTime: 30,
    collectTime: 10,
    foodType: 'Chicken,Chicken wings... ',
    productData: [
      {
        name: 'Hand cut chips',
        price: 29.3,
        image: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png',
      },
      {
        name: 'Big Mac',
        price: 50.8,
        image: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png',
      },
      {
        name: 'Chicken Burger',
        price: 70,
        image: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png',
      },
    ],
    id: 1,
  },

  {
    restaurantName: 'Steers',
    farAway: '5',
    businessAddress: ' 17 Olivia Rd, Johannesburg',
    images: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png',
    coordinates: {lat: -26.1886781, lng: 28.244879},
    averageReview: 4.9,
    numberOfReview: 1272,
    discount: 12,
    deliveryTime: 25,
    collectTime: 15,
    foodType: 'Flame grilled beef Burgers',
    productData: [
      {
        name: 'Hand cut chips',
        price: 29.3,
        image: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png',
      },
      {
        name: 'Big Mac',
        price: 50.8,
        image: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png',
      },
      {
        name: 'Chicken Burger',
        price: 70,
        image: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png',
      },
    ],
    id: 2,
  },

  {
    restaurantName: 'Roman Pizza',
    farAway: '7',
    businessAddress: ' 15 Atlas Rd, Kempton Park',
    images: 'https://bukasapics.s3.us-east-2.amazonaws.com/pizza6.png',
    averageReview: 4.3,
    numberOfReview: 700,
    coordinates: {lat: -26.1845336, lng: 28.2481691},
    discount: null,
    deliveryTime: 20,
    collectTime: 10,
    foodType: 'Chicken pizza, Vegetarian pizza...',
    productData: [
      {
        name: 'Hand cut chips',
        price: 29.3,
        image: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png',
      },
      {
        name: 'Big Mac',
        price: 50.8,
        image: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png',
      },
      {
        name: 'Chicken Burger',
        price: 70,
        image: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png',
      },
    ],
    id: 3,
  },
];

export const productData = [
  {
    name: 'Hand cut chips',
    price: 29.3,
    image: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png',
    details: 'Two 100% fresh beef burger patties that are hot,deliciously',
    id: 0,
  },
  {
    name: 'Big Mac',
    price: 50.8,
    image: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png',
    details: 'McFeast features two 100% fresh beef burger patties that are hot',
    id: 1,
  },
  {
    name: 'Chicken Burger',
    price: 70,
    image: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png',
    details: '',
    id: 2,
  },

  {
    name: 'Hand cut chips',
    price: 29.3,
    image: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png',
    details: 'Two 100% fresh beef burger patties that are hot,deliciously',
    id: 3,
  },
  {
    name: 'Big Mac',
    price: 70.2,
    image: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate1.png',
    details: 'McFeast features two 100% fresh beef burger patties that are hot',
    id: 4,
  },
  {
    name: 'Chicken Burger',
    price: 70,
    image: 'https://bukasapics.s3.us-east-2.amazonaws.com/chicken.png',
    details: '',
    id: 5,
  },
];
