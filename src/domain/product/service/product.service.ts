import Product from "../entity/product";
import ProductInterface from "../entity/product.interface";

export default class ProductService {
  static increasePrice(products: ProductInterface[], percentage: number): ProductInterface[] {
    products.forEach((product) => {
      product.changePrice((product.price * percentage) / 100 + product.price);
    });
    return products;
  }
}
