import { isSubsequence } from "./is-subsequence"

describe("002.multiple-pointers", () => {
  describe("isSubsequence", () => {
    test("should be true", () => {
      expect(isSubsequence('hello', 'hello world')).toBeTruthy()
      expect(isSubsequence('sing', 'sting')).toBeTruthy()
      expect(isSubsequence('abc', 'acb')).toBeFalsy()
    })
  })
})