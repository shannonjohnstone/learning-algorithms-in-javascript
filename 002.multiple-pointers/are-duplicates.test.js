import { areDuplicates } from "./are-duplicates"

describe("002.multiple-pointers", () => {
  describe("areDuplicates", () => {
    test("has duplicates, should be true", () => {
      expect(areDuplicates(2, 3, 2, 1)).toBeTruthy()
    })
  })
})