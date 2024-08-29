describe('If Statement', () => {
    it('should support in TS', () => {
        const v: number = 90;

        if (v > 80) {
            console.info("good");
        } else {
            console.info("meh");
        }
    });

    it('should ternary operator', () => {
        const n: number = 100;

        const say: string = (n >= 70) ? "congrats" : "try again";
        console.info(say)
    });
});