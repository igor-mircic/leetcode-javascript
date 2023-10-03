import { describe, expect, it } from "vitest";
import productExceptSelf from "./238.product-of-array-except-self";

describe("#238.product-of-array-except-self", () => {
  it("Case 1", () => {
    expect(productExceptSelf([1, 2, 3, 4])).toBe([24, 12, 8, 6]);
  });
});
