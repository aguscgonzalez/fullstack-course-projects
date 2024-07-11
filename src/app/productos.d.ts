
export interface DetalleCompletoProducto {
  id: string;
  title: string;
  price: number;
  thumbnail: string | number | boolean;
  accepts_mercadopago: boolean;
  stop_time: Date;
  seller?: {
    id: string;
    nickname: string;
  };
  attributes: Attributes[];
  pictures: Picture[];
}
