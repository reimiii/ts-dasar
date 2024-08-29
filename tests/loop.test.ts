describe('Loop', () => {
    it('should loop', () => {

        const names: string[] = ["Hilmi", "Akbar", "Muharrom"];

        for (let i: number = 0; i < names.length; i++) {
            console.info(names[i]);
        }

        for (const name of names) {
            console.info(name);
        }

        for (const namesKey in names) {
            console.info(names[namesKey])
        }
    });
});