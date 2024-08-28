import {Seller} from "../src/seller";

describe('Interface', () => {
    it('should be support in ts', () => {
        const seller: Seller = {
            id: 1,
            name: "Saipul Cell"
        };

        console.info(seller);
    });

});