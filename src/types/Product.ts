export interface Product {
  id: number;
  name: string;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  quantity?: number;
}