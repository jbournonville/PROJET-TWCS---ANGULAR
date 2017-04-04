export class Product {
  constructor(
    public designation: string,
    public productType: string,
    public  priceExTax: number,
    public description?: string,
    public imageUrl?: string,) {  }
}
