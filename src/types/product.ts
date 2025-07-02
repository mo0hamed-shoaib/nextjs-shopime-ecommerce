export default interface Products {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  brand?: string;
  model?: string;
  color?: string;
  category: string;
  discount?: number;
  popular?: boolean;
  onSale?: boolean;
}