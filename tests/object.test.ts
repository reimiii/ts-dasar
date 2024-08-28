describe('Object', () => {
    it('should support in ts', () => {
        const person: { id: number, name: string } = {
            id: 1,
            name: "Mee"
        }

        person.id = 2;
        console.info(person)
    });
});