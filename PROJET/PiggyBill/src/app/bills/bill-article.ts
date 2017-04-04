import {Product} from "../products/product";
export class BillArticle {

  constructor(
    public billProduct: Product,
    public billProductQuantity: number
  ){}
}
