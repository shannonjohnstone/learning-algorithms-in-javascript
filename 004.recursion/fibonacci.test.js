import { fibonacci } from "./fibonacci"

describe("004.recursion", () => {
  describe("fibonacci", () => {
    test('should return 16', () => {
      expect(fibonacci(3)).toEqual(2)
      // expect(fibonacci(4)).toEqual(3)
    })
  })
})