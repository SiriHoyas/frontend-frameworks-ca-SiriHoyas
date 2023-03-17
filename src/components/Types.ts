export type Product = {
  imageUrl: string;
  title: string;
  discountedPrice: number;
  id: string;
  reviews?: Review[];
};

export type Review = {
  id?: string;
  username: string;
  rating: number;
  description: string;
};

export type Inputs = {
  fullName: string;
  subject: string;
  email: string;
  body: string;
};

export type cartState = {
  cartItems: string[];
  itemCount: number;
  total: number;
  isLoading: boolean;
};
