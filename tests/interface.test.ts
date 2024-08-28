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

    it('should support function interface', () => {
        interface AddFunc {
            (x: number, y: number): number;
        }

        const add: AddFunc = (x: number, y: number): number => {
            return x + y;
        }

        expect(add(2, 2)).toBe(4);
    });

});