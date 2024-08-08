const products = [

    { id: 1, name: '48" Full HD Flat Smart TV', description: 'Description of Product 1', price: 749, image: '/pictures/smarttv.png' },
    
    { id: 2, name: 'Acer Aspire 5 Laptop', description: 'Description of Product 2', price: 829, image: 'pictures/acerlaptop.png' },
    
    { id: 3, name: 'Beats Wireless Headphones', description: 'Description of Product 3', price: 199, image: '/pictures/beatsheadphones.png' },

    { id: 4, name: 'Google Pixel 8 Pro', description: 'Description of Product 4', price: 1029, image: '/pictures/phone.png' },

    { id: 5, name: 'JBL Wireless Speaker', description: 'Description of Product 5', price: 159, image: '/pictures/jblspeaker.png' },

    { id: 6, name: 'Samsung Galaxy Tab A9+', description: 'Description of Product 6', price: 239, image: '/pictures/tablet.png' },

    { id: 7, name: 'Bose TV Soundbar Speaker', description: 'Description of Product 7', price: 329, image: '/pictures/soundbar.png' },

    { id: 8, name: 'LG 27" FHD Monitor', description: 'Description of Product 8', price: 139, image: '/pictures/' },

    { id: 9, name: 'Logitech Wireless Keyboard', description: 'Description of Product 9', price: 149, image: '/pictures/' },
    
    ];
    
    export const getProducts = () => products;
    
    export const getProductById = (productId) =>
    
    products.find((product) => product.id === productId);