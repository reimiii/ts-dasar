import {Seller} from "../src/seller";
import {Employee, Manager} from "../src/employee";

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

    it('should support index array interface', () => {
        interface StArr {
            [index: number]: string;
        }

        const names: StArr = ["mee", "zee", "xee"];
        console.info(names)
        console.info(names[0])
    });

    it('should support index object interface', () => {
        interface StrDi {
            [key: string]: string;
        }

        const dictionary: StrDi = {
            name: "Umm",
            address: "Yeah"
        };

        console.info(dictionary["name"]);
        console.info(dictionary["address"]);
    });

    it('should support extends interface', () => {
       const emply: Employee = {
           id: "123",
           name: "rahmat",
           division: "Slamet"
       };

       const managr: Manager = {
           id: "111",
           name: "Haannd",
           division: "IT",
           numOfEmployees: 11100
       };

        console.info(emply);
        console.info(managr);
    });

    it('should support function in interface', () => {
        interface Person {
            name: string;
            sayHello(name: string): string;
        }

        const per: Person = {
            name: "Mee",
            sayHello: function (name: string): string {
                return `hello ${name}, my name is ${this.name}`;
            }
        };

        console.info(per.sayHello("Ak"))
    });
});