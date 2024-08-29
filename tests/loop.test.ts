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

    it('should while loop', () => {
        let i: number = 0;

        while (i < 5) {
            console.info(i);
            i++;
        }
    });

    it('should do while loop', () => {
        let i: number = 0;

        do {
            console.log(i);
            i++;
        } while (i < 5);

    });

    it('should break and continue', () => {
        let counter: number = 0;
        do {
            counter++;

            if (counter == 10) {
                break;
            }

            if (counter % 2 == 0) {
                continue;
            }

            console.info(counter);
        } while (true);
    });
});