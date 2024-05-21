export interface Dish {
  id: string;
  name: string;
  description: string;
  available: true;
  new: true;
  stock: 0;
  rating: 0;
  delivery: string;
  discountRate: 0;
  price: {
    type: string;
    value: 0;
  };
  size: {
    type: string;
    value: 0;
  };
  tags: string[];
  imageUrl: string;
}
