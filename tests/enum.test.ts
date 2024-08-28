import {Customer, CustomerType} from "../src/enum";

describe('Enum', () => {
    it('should support enum in ts', () => {
        const person: Customer = {
            id: 1,
            name: "HIMMLII",
            type: CustomerType.PREMIUM
        } // default type nya number yang ke print

        console.info(person)
    });
});