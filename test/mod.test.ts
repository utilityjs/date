import { assertEquals, describe, it } from "../test_deps.ts";

import { isIsoDate } from "../mod.ts";

describe("date", function () {
	it("isIsoDate(): positive", function () {
		assertEquals(isIsoDate("2022-12-27T07:40:25.551Z"), true);
	});
	it("isIsoDate(): negative", function () {
		assertEquals(isIsoDate("25/12/2022"), false);
	});
});
