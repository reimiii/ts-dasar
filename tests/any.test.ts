describe('Any', () => {
    it('should support in ts', () => {
        const person: any = {
            id: 1,
            name: "Mee",
            age: 20
        };

        person.age = 16;
        person.address = "bgr";

        console.info(person)
    });
});