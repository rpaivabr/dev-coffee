import { Product } from './products';

export interface Address {
  zipcode: string;
  street: string;
}

export interface Order {
  id?: number;
  items: Product[];
  address: Address;
}
