import { sameSquared, isAnagram, __sameSquared__SLOWER } from "./frequency-counter"

describe("001.frequency-counter-pattern", () => {
  describe("isAnagram", () => {
    test("should be false", () => {
      expect(isAnagram()).toBeFalsy()
      expect(isAnagram("cat", "ta")).toBeFalsy()
    })
  
    test("should be true", () => {
      expect(isAnagram("cat", "tac")).toBeTruthy()
      expect(isAnagram("ziggy", "yiggz")).toBeTruthy()
    })
  })
  
  describe("sameSquared", () => {
    test("length is not equal, should be false", () => {
      expect(sameSquared()).toBeFalsy()
      expect(sameSquared([],[])).toBeTruthy()
      expect(sameSquared([2],[])).toBeFalsy()
    })
  
    test("should be true", () => {
      expect(sameSquared([1,2,2], [1,4,6])).toBeFalsy()
      expect(__sameSquared__SLOWER([1,2,2], [1,4,6])).toBeFalsy()
      expect(sameSquared([1,2], [1,4])).toBeTruthy()
    })
  });
})