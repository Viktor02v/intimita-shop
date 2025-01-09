export interface Product {
  $id: string;
  name: string;
  price: number;
  foto_url: string;
  candleType?: string;
  description: string;
  diffusersType?: string;
  flavorIntensity?: number;
  giftsType?: string;
  isOnSale: boolean;
  onSalePrice?: number;
  selfCareType?: string;
  type: string;
}
