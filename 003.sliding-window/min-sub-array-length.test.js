import { minSubArrayLen } from "./min-sub-array-length"

describe("003.sliding-window", () => {
  describe("minSubArrayLen", () => {
    test("should return 10", () => {
      expect(minSubArrayLen([4, 3, 2, 3, 1, 2], 7)).toEqual(2)
    })
  })
})