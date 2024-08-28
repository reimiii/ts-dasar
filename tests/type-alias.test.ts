import {Category, Product} from "../src/alias-type";

describe('Type Alias', () => {
    it('should usage like this', () => {
        const category: Category = {
            id: "1",
            name: "electron"
        };

        const product: Product = {
            id: "111",
            name: "Pavilon",
            price: 22000222,
            category: category
        };

        console.info(category);
        console.info(product);
    });
});