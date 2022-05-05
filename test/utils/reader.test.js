const reader = require("../../libs/utils/reader");

describe("TDD for reader.js", () => {
	test("1) Read json file", () => {
		const visualPartners = reader.readJsonFile("visualPartners.test.json");
		expect(visualPartners.length).toBe(51);
	});
});