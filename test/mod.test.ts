import { assertEquals, describe, it } from "../test_deps.ts";

import { isISODate } from "../mod.ts";

describe("date", function () {
  it("isISODate(): positive", function () {
    assertEquals(isISODate("2022-12-27T07:40:25.551Z"), true);
  });
  it("isISODate(): negative", function () {
    assertEquals(isISODate("25/12/2022"), false);
  });
  it("isISODate(): out-of-range or malformed values return false", function () {
    assertEquals(isISODate("2022-13-45T07:40:25.551Z"), false);
    assertEquals(isISODate("2023-02-30T00:00:00.000Z"), false);
    assertEquals(isISODate("x2022-12-27T07:40:25.551Z"), false);
    assertEquals(isISODate("2022-12-27T07:40:25X551Z"), false);
    assertEquals(isISODate(""), false);
  });
});
