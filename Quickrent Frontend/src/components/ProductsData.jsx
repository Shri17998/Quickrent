const products = [
    {
      id: 1,
      title: 'A1S Cushioned Lounge Chair',
      image: '/images/Category page images/yellow-chair.jpg',
      category: 'Furnitures',
      seller: 'Team5',
      location: 'Mumbai',
      features: [
        'Style and Modern',
        'Quality and very comfortable chair',
        'The chair is a delight and has exceeded expectations',
      ],
    },
    {
      id: 2,
      title: 'A2S Cushioned Lounge Chair',
      image: '/images/Category page images/white-chair.jpg',
      category: 'Furnitures',
      seller: 'Team5',
      location: 'Mumbai',
      features: [
        'Style and Modern',
        'Quality and very comfortable chair',
        'The chair is a delight and has exceeded expectations',
      ],
    },
    {
      id: 3,
      title: 'Luxury Wooden Dining Table',
      image: '/images/Category page images/dining-table.jpg',
      category: 'Furnitures',
      seller: 'HomeDecor Inc.',
      location: 'Delhi',
      features: [
        'Spacious table with a classic wooden finish',
        'Seats up to six people comfortably',
        'Durable and easy to clean surface',
      ],
    },
    {
      id: 4,
      title: 'Modern Sofa Set',
      image: '/images/Category page images/Modernsofaset.jpg',
      category: 'Furnitures',
      seller: 'FurniCo',
      location: 'Bangalore',
      features: [
        'Luxurious and stylish design',
        'Perfect for living rooms or offices',
        'Durable cushions with washable covers',
      ],
    },

    {
      id: 5,
      title: 'Portable Vacuum Cleaner',
      image: '/images/Category page images/vacuum-cleaner.jpg',
      category: 'Appliances',
      seller: 'CleanUpTech',
      location: 'Pune',
      features: [
        'Lightweight and portable design',
        'Powerful suction with energy-efficient motor',
        'Comes with multiple nozzles for versatile cleaning',
      ],
    },
    {
      id: 6,
      title: 'Advanced Microwave Oven',
      image: '/images/Category page images/microwave.jpg',
      category: 'Appliances',
      seller: 'KitchenGuru',
      location: 'Mumbai',
      features: [
        'Multi-mode cooking with smart presets',
        'Compact and energy-saving design',
        'Easy-to-use control panel with digital display',
      ],
    },
    {
      id: 7,
      title: 'High-Speed Blender',
      image: '/images/Category page images/blender.jpg',
      category: 'Appliances',
      seller: 'Blendify',
      location: 'Delhi',
      features: [
        'Durable stainless steel blades for smooth blending',
        'Comes with multiple speed settings and a pulse function',
        'Perfect for smoothies, soups, and more',
      ],
    },
    {
      id: 8,
      title: 'Energy-Efficient Washing Machine',
      image: '/images/Category page images/washing-machine.jpg',
      category: 'Appliances',
      seller: 'LaundryMate',
      location: 'Hyderabad',
      features: [
        'Large capacity drum for family-sized loads',
        'Advanced water and energy-saving technology',
        'Quiet operation with multiple wash modes',
      ],
    },
    {
      id: 9,
      title: 'Digital Air Fryer',
      image: '/images/Category page images/air-fryer.jpg',
      category: 'Appliances',
      seller: 'CrispTech',
      location: 'Bangalore',
      features: [
        'Oil-free cooking for healthier meals',
        'Touchscreen interface with preset cooking modes',
        'Compact design suitable for small kitchens',
      ],
    },

    {
      id: 10,
      title: 'Wireless Noise-Cancelling Headphones',
      image: '/images/Category page images/headphones.jpg',
      category: 'Electronics',
      seller: 'AudioMax',
      location: 'Mumbai',
      features: [
        'High-quality sound with active noise cancellation',
        'Bluetooth connectivity with long battery life',
        'Foldable design with a carrying case',
      ],
    },
    {
      id: 11,
      title: '4K Ultra HD Smart TV',
      image: '/images/Category page images/smart-tv.jpg',
      category: 'Electronics',
      seller: 'VisionTech',
      location: 'Delhi',
      features: [
        'Stunning 4K resolution with HDR support',
        'Built-in streaming apps like Netflix and Prime Video',
        'Slim and stylish design with wall-mount option',
      ],
    },
    {
      id: 12,
      title: 'Latest Smartphone Model X',
      image: '/images/Category page images/smartphone.jpg',
      category: 'Electronics',
      seller: 'MobileWorld',
      location: 'Bangalore',
      features: [
        'Fast performance with 5G connectivity',
        'High-resolution camera with night mode',
        'Long-lasting battery with fast charging',
      ],
    },
    {
      id: 13,
      title: 'Laptop with Intel i7 Processor',
      image: '/images/Category page images/laptop.jpg',
      category: 'Electronics',
      seller: 'TechHub',
      location: 'Hyderabad',
      features: [
        'Powerful performance with 16GB RAM',
        'Slim and lightweight design for portability',
        'Pre-installed with the latest Windows OS',
      ],
    },
    {
      id: 14,
      title: 'Smart Watch Series 5',
      image: '/images/Category page images/smart-watch.jpg',
      category: 'Electronics',
      seller: 'GadgetMart',
      location: 'Chennai',
      features: [
        'Fitness tracking and heart rate monitoring',
        'Stylish design with customizable watch faces',
        'Water-resistant and compatible with all devices',
      ],
    },

    {
      id: 15,
      title: 'Cricket Bat',
      image: '/images/Category page images/cricket-bat.jpg',
      category: 'Sports',
      seller: 'SportsZone',
      location: 'Delhi',
      features: [
        'Made from high-quality English willow',
        'Perfect balance and lightweight design',
        'Ideal for both professionals and beginners',
      ],
    },
    {
      id: 16,
      title: 'Football',
      image: '/images/Category page images/football.jpg',
      category: 'Sports',
      seller: 'GoalKick',
      location: 'Mumbai',
      features: [
        'Durable and water-resistant material',
        'Official size and weight',
        'Perfect for training and matches',
      ],
    },
    {
      id: 17,
      title: 'Yoga Mat',
      image: '/images/Category page images/yoga-mat.jpg',
      category: 'Sports',
      seller: 'FitLife',
      location: 'Chennai',
      features: [
        'Non-slip surface for stability',
        'Eco-friendly and lightweight material',
        'Ideal for yoga, pilates, and stretching',
      ],
    },
    {
      id: 18,
      title: 'Badminton Racket',
      image: '/images/Category page images/badminton-racket.jpg',
      category: 'Sports',
      seller: 'ShuttleSports',
      location: 'Pune',
      features: [
        'Lightweight and durable frame',
        'Comes with a carrying case',
        'Perfect for indoor and outdoor games',
      ],
    },
    {
      id: 19,
      title: 'Treadmill',
      image: '/images/Category page images/treadmill.jpg',
      category: 'Sports',
      seller: 'HomeFitness',
      location: 'Bangalore',
      features: [
        'Digital display with speed and distance tracking',
        'Compact foldable design',
        'Perfect for home workouts',
      ],
    },
  ];

  export default products;
