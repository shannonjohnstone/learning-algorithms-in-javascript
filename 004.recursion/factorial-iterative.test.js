import { factorialIterative } from "./factorial-iterative"

describe("004.recursion", () => {
  describe("factorialIterative", () => {
    test('should be true', () => {
      expect(factorialIterative(5)).toEqual(120)
      expect(factorialIterative(3)).toEqual(6)
    })
  })
})