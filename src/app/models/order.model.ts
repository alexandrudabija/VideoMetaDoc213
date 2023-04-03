import { Product } from './product.model';

export interface Order {
  address: {
    city: string | null;
    country: string | null;
    houseNumber: string | null;
    street: string | null;
    zipcode: string | null;
  };
  user: {
    dateOrder: Date;
    email: string;
    firstname: string;
    idOrder: number;
    items: Array<Product>;
    lastname: string;
    phone: string;
  };
}
