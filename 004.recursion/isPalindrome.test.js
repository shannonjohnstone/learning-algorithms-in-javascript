import { isPalindrome } from "./isPalindrome"

describe("004.recursion", () => {
  describe("isPalindrome", () => {
    test('should be true', () => {
      expect(isPalindrome('tacocat')).toBeTruthy()
    })
  })
})