import { product } from "./product"

describe("004.recursion", () => {
  describe("product", () => {
    test('should return 16', () => {
      expect(product([1,2,3])).toEqual(6);
      expect(product([1,2,3,10])).toEqual(60);
    })
  })
})