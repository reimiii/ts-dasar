import {Seller} from "../src/seller";

describe('Interface', () => {
    it('should be support in ts', () => {
        const seller: Seller = {
            id: 1,
            name: "Saipul Cell",
            nib: "1112233"
        };

        seller.name = "Toko GWEH";
        // seller.nib = "ERROR"; // ga mau karna readonly

        console.info(seller);
    });

});