export interface IProduct{
    id:string;
    name:string;
    image:string;
    price:number;
    desc:string
  }
  export type IProductLite = Pick<IProduct,'name'|'image'|'price'|'desc'>