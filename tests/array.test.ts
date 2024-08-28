describe('Array', () => {
    it('should return arrays', () => {
        const names: string[] = ["hilmi", "arip", "thq"];
        const ages: number[] = [1, 2, 3];

        console.info(names)
        console.info(ages)
    });

    it('should readonly array', () => {
        const theName: ReadonlyArray<string> = ["makan", "minum", "hmm"];
        console.info(theName)

        // theName[0] = "ugh"; // error in tsc
    });

    it('should support tuple', () => {
        const person: readonly [number, string, boolean] = [1, "hilmi", true];
        console.info(person)
    });
});