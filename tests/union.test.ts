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
});