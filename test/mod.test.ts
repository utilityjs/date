import { assertEquals, describe, it } from "../test_deps.ts";

import { isISODate } from "../mod.ts";

describe("date", function () {
  it("isISODate(): positive", function () {
    assertEquals(isISODate("2022-12-27T07:40:25.551Z"), true);
  });
  it("isISODate(): negative", function () {
    assertEquals(isISODate("25/12/2022"), false);
  });
});
