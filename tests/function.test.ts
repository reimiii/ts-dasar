describe('Function', () => {
    it('should be support in TS', () => {
        function sayHi(name: string): string {
            return `Hi ${name}`;
        }

        expect(sayHi("Me")).toBe("Hi Me");

        function printHi(name: string): void {
            console.info(`hi ${name}`);
        }

        printHi("me");
    });

    it('should support default value', () => {
        function sayHi(name: string = "Guest"): string {
            return `Hi ${name}`;
        }

        expect(sayHi()).toBe("Hi Guest");
        expect(sayHi("UM")).toBe("Hi UM");
    });

    it('should support rest param', () => {
        function sum(...values: number[]): number {
            let total: number = 0;
            for (const value: number of values) {
                total += value;
            }

            return total;
        }

        expect(sum(1, 2, 3, 4, 5)).toBe(15);
    });

    it('should support optional param', () => {

        function sayHi(name: string, username?: string): string {
            if (username) {
                return `Hi ${name}, with ${username}`;
            } else {
                return `Hi ${name}`;
            }
        }

        expect(sayHi("me")).toBe("Hi me");
        expect(sayHi("me", "saa")).toBe("Hi me, with saa");


    });
});