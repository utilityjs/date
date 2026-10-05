import { afterAll, assertEquals, beforeAll, describe, it } from "../test_deps.ts";

import { isISODate } from "../mod.ts";

function isISODateCases() {
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
    assertEquals(isISODate("2016-12-31T23:59:60.000Z"), false);
  });
  it("isISODate(): leap day", function () {
    assertEquals(isISODate("2024-02-29T00:00:00.000Z"), true);
    assertEquals(isISODate("2023-02-29T00:00:00.000Z"), false);
  });
}

describe("date", function () {
  describe("with Temporal", function () {
    it("Temporal is available", function () {
      assertEquals(typeof globalThis.Temporal, "object");
    });
    isISODateCases();
  });

  describe("without Temporal (Date fallback)", function () {
    const descriptor = Object.getOwnPropertyDescriptor(globalThis, "Temporal");

    beforeAll(function () {
      // Simulate a runtime that lacks Temporal.
      delete (globalThis as { Temporal?: unknown }).Temporal;
    });

    afterAll(function () {
      if (descriptor) Object.defineProperty(globalThis, "Temporal", descriptor);
    });

    it("Temporal is unavailable", function () {
      assertEquals(typeof globalThis.Temporal, "undefined");
    });
    isISODateCases();
  });
});
