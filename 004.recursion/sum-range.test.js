import { sumRange } from "./sum-range"

describe("004.recursion", () => {
  describe("sumRange", () => {
    test('should be true', () => {
      expect(sumRange(3)).toEqual(6)
      expect(sumRange()).toEqual(0)
      expect(sumRange(0)).toEqual(0)
    })
  })
})