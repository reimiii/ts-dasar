import {sayHello} from "../src/say-hello";

describe('say hello', () => {
    it('should return Hello Me', () => {
        expect(sayHello("Me")).toBe("Hello Me")
    });
});