import { ButtonHTMLAttributes } from "react";

export type Product = {
  imageUrl?: string;
  title: string;
  description?: string;
  discountedPrice: number;
  price: number;
  id: string;
  reviews?: Review[];
};

export type Review = {
  id: string;
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
  cartItems: CartItemProps[];
  itemCount: number;
  total: number;
  isLoading: boolean;
};

export interface ApiResponse {
  title: string;
  imageUrl: string;
  discountedPrice: number;
  id: string;
}

export type SearchResultsType = {
  value: string;
  filteredData: Product[];
};

export type ButtonType = {
  className: string;
  label: string;
  onClick?: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type ProductCardProps = {
  imageUrl: string;
  title: string;
  discountedPrice: number;
  id: string;
};

export type ProductReviewsProps = {
  rating: number;
  username: string;
  description: string;
};

export type CartItemProps = {
  id?: number;
  itemName: string;
  price: number;
  imageUrl: string;
  quantity: number;
};
