import { power } from "./power"

describe("004.recursion", () => {
  describe("power", () => {
    test('should return 16', () => {
      expect(power(2, 4)).toEqual(16)
    })
    test('should return 1', () => {
      expect(power(2, 0)).toEqual(1)
    })
  })
})