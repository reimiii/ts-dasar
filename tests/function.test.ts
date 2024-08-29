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
});