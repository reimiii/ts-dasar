describe('Optional param', () => {
    it('should support in ts', () => {
        function sayHello(name?: string | null): void {
            if (name) {
                console.info(`Hello ${name}`)
            } else {
                console.info(`Hello`)
            }
        }

        sayHello("Dar")

        const name: string | undefined = undefined;
        sayHello(name)
        sayHello(null)
    });
});