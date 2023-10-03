import { describe, expect, it } from "vitest";
import productExceptSelf from "./238.product-of-array-except-self";

describe("#238.product-of-array-except-self", () => {
  it("Case 1", () => {
    expect(productExceptSelf([1, 2, 3, 4])).toStrictEqual([24, 12, 8, 6]);
  });
  it("Case 2", () => {
    expect(productExceptSelf([-1, 1, 0, -3, 3])).toStrictEqual([
      -0, 0, 9, -0, 0,
    ]);
  });
});
