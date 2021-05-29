import { test } from "@jest/globals"
import { countdown } from "./countdown"

describe("004.recursion", () => {
  describe("countdown", () => {
    test('should be 0', () => {
      expect(countdown(3)).toEqual(0)
    })
  })
})