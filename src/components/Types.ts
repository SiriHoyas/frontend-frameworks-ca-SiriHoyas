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
