export class Product {

  public constructor(title:String, price:Number, description:String, imageUrl:String) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
  }

  public id: number;
  public title: String;
  public description: String;
  public imageUrl: String;
  public price: Number;
  
}