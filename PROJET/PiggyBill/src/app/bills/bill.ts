import {Client} from "../clients/client";
import {BillArticle} from "./bill-article";
export class Bill {
  constructor(
    public reference: string,
    public client: Client,
    public products: BillArticle[],
    public date: string,
    public state: boolean
  ){}
}
