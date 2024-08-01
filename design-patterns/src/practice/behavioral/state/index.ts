import { Product } from "./entities/product.entity";
import { VendingMachine } from "./main/app";

const machine = new VendingMachine();
machine.insertCoin(1);
machine.selectProduct(new Product("soda", 2));
machine.insertCoin(1);
machine.selectProduct(new Product("chips", 1));
machine.insertCoin(2);
machine.selectProduct(new Product("soda", 2));
machine.refund();
