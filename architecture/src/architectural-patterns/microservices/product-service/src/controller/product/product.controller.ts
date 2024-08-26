import { Product } from "../../model/entities/product.entity";
import { ProductService } from "../../model/services/product.service";

export class ProductController {
    private productService: ProductService;

    constructor() {
        this.productService = new ProductService();
    }

    public create(product: Product): void {
        this.productService.create(product);
    }

    public findAll(): Product[] {
        return this.productService.findAll();
    }
}
