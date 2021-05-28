import { sumZeroMultiplePointer, sumZeroSimple } from "./sum-zero"

describe("002.multiple-pointers", () => {
  describe("sumZero", () => {
    test("should be return [2, -2]", () => {
      expect(sumZeroSimple([2, 3, -2, 1])).toEqual([-2,2])
      expect(sumZeroMultiplePointer([2, 3, -2, 1])).toEqual([-2,2])
      expect(sumZeroMultiplePointer([2, 3, 4, 0, -2, 1])).toEqual([-2,2])
    })
    test("should be undefined", () => {
      expect(sumZeroSimple([])).toEqual(undefined)
      expect(sumZeroSimple([2, 3, 1])).toEqual(undefined)
      expect(sumZeroSimple()).toEqual(undefined)
    })
  })
})