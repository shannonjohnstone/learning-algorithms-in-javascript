import { collectOddValues } from "./pure-recursion"

describe("004.recursion", () => {
  describe("collectOddValues", () => {
    test('should return odd numbers', () => {
      expect(collectOddValues([1,2,3,4,5,6,7,8,9])).toEqual([1,3,5,7,9])
    })
  })
})