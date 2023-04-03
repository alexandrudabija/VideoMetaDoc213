

export interface Products {
  products: Array<Product>;
}


export interface Product {
  id: number,
  manufacturer: string,
  model: string,
  quantity: number,
  price: number
  image: string,
  category:string,
  description?: string,
  info1?: string,
  info2?: string,
  info3?: string,
  info4?: string,
  info5?: string,
  info6?: string,
}

// export interface VideoCamera extends Product {


//   resolution?: string,
//   Lens?: string,
//   MinimalLighting?: string,
//   IRdistance?: string,
//   TemperatureOperate?: string,
//   feeding?: string,
//   ProtectionIndicator?: string,
//   OutputFormat?: string,
//   WDR?: string,
//   Wifi?: string
// }

export type CartItem = Product;

export type Cart = {
  items: CartItem[];
};
