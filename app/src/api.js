const products = [
    {
      id: 1,
      name: '48" Full HD Flat Smart TV',
      description: "48 inch smart TV that has so high of a resolution it will blow your mind",
      price: "$749",
      image: require("./pictures/smarttv.png"),
    },
  
    {
      id: 2,
      name: "Acer Aspire 5 Laptop",
      description: "Need a good laptop for school? we got it!",
      price: "$829",
      image: require("./pictures/acerlaptop.png"),
    },
  
    {
      id: 3,
      name: "Beats Wireless Headphones",
      description: "we love music too!, try these and tell us what you think",
      price: "$199",
      image: require("./pictures/beatsheadphones.png"),
    },
  
    {
      id: 4,
      name: "Google Pixel 8 Pro",
      description: "want features that apple products dont have, switch to google",
      price: "$1029",
      image: require("./pictures/phone.png"),
    },
  
    {
      id: 5,
      name: "JBL Wireless Speaker",
      description: "Nothing better then a good speaker by the pool",
      price: "$159",
      image: require("./pictures/jblspeaker.png"),
    },
  
    {
      id: 6,
      name: "Samsung Galaxy Tab A9+",
      description: "what child wouldn't like this",
      price: "$239",
      image: require("./pictures/tablet.png"),
    },
  
    {
      id: 7,
      name: "Bose TV Soundbar Speaker",
      description: "Imagine watching a StarWars marathon with this beast of a sound system",
      price: "$329",
      image: require("./pictures/soundbar.png"),
    },
  
    {
      id: 8,
      name: 'LG 27" FHD Monitor',
      description: "this monitor is the best for gaming, dont be fooled by the cheap price",
      price: "$139",
      image: require("./pictures/monitor.png"),
    },
  
    {
      id: 9,
      name: "Logitech Wireless Keyboard",
      description: "Working on the go? dont look further then this portable keyboard",
      price: "$149",
      image: require("./pictures/keyboard.png"),
    },
  ];
  
  export const getProducts = () => products;
  
  export const getProductById = (productId) =>
    products.find((product) => product.id === productId);
  