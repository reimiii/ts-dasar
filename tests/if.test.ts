describe('If Statement', () => {
    it('should support in TS', () => {
        const v: number = 90;

        if (v > 80) {
            console.info("good");
        } else {
            console.info("meh");
        }
    });
});