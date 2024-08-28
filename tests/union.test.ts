describe('Union Type', () => {
    it('should support in ts', () => {
        let sample: string | number | boolean = 1;

        console.info(sample);

        sample = "hmm";
        console.info(sample)

        sample = true;
        console.info(sample)

        // sample = []; // error in tsc
    });

    it('should using typeof for union', () => {
        function process(v: string | number | boolean): any {
           if (typeof v === "string") {
               return v.toUpperCase();
           } else if (typeof v === "number") {
               return v + 10;
           } else {
               return !v;
           }
        }

        expect(process("aku suka aku suka")).toBe("AKU SUKA AKU SUKA");
        expect(process(10)).toBe(20);
        expect(process(true)).toBe(false);
    });
});