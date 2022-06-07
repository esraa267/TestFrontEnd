export interface ResturantDetails {
  menu?: [
    {
      image: string;
      name: string;
      products: [
        {
          name: string;
          description: string;
          price: string;
          video: string;
          icon: string;
          images: string;
          sizes: string;
          rate_count: number;
          model_type: string;
        }
      ];
    }
  ];
  restaurant?: {
    name: string;
    description: string;
    logo: string;
    phone: string;

    governorate: {
      name: string;
    };
    region: {
      region_id: string;
    };
    address: string;

    rate_count: string;
  };
  offers: [
    {
      name: string;
      price: string;
      video: string;
      images: string;
      restaurant_id: string;
      restaurant_name: string;
      restaurant_logo: string;
      products: [
        {
          quantity: string;
          product_id: string;
          product: string;
          icon: string;
        }
      ];
      rate: string;
      rate_count: string;
      model_type: string;
      qty_cart: string;
    }
  ];
  extras: [
    {
      id: string;
      extra_id: string;
      name: string;
      price: string;
      image: string;
      qty_cart: number;
    }
  ];
}
