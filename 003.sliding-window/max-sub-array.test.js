import { maxSubArraySumSimple, maxSubArraySum } from "./max-sub-array"

describe("003.sliding-window", () => {
  describe("maxSubArraySumSimple", () => {
    test("should return 10", () => {
      expect(maxSubArraySumSimple([1, 2, 5, 2, 8, 1, 5], 2)).toEqual(10)
      expect(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2)).toEqual(10)
    })
    test("should return null", () => {
      expect(maxSubArraySumSimple([1, 2], 10)).toEqual(null)
    })
  })
})