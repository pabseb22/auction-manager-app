import { Buyer } from "./buyer";

export class Item {
  constructor(
    public id:number,
    public name:string,
    public imgsrc:string,
    public des:string,
    public available:number,
    public starting_price:number,
    public interested: string[]
  ){
  }
  }
