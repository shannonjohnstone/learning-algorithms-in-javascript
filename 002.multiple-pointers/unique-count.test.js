import { uniqueCount, uniqueCountNoMutating } from "./unique-count"

describe("002.multiple-pointers", () => {
  describe("uniqueCount", () => {
    test("should return 3", () => {
      expect(uniqueCount([1, 1, 2, 3])).toEqual(3)
      expect(uniqueCountNoMutating([1, 1, 2, 3])).toEqual(3)
      expect(uniqueCountNoMutating([1, 2])).toEqual(2)
    })
    test("should return 1", () => {
      expect(uniqueCount([1])).toEqual(1)
    })
  })
})