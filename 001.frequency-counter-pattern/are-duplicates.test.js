import { areDuplicates } from "./are-duplicates"

describe("001.frequency-counter-pattern", () => {
  describe("areDuplicates", () => {
    test("no duplicates, should be false", () => {
      expect(areDuplicates()).toBeFalsy()
    })
    test("has duplicates, should be true", () => {
      expect(areDuplicates(1, 1)).toBeTruthy()
      expect(areDuplicates("a", "b", "a")).toBeTruthy()
    })
  })
})