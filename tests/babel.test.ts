describe('data type', () => {
    it('should return data type primitive', () => {
       let name: string = "Mee";
       let balance: number = 1000000;
       let isGood: boolean = true;

        console.info(name);
        console.info(balance);
        console.info(isGood);

        // name = 10; // in compile error
        // balance = "st";
        // isGood = "1..1";

        // but in test babel jest not error
        // be carefully
    });
});