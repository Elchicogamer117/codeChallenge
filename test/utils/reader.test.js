const reader = require("../../libs/utils/reader");

describe("TDD for reader.js", () => {
	test("1) Read json file", () => {
		const visualPartners = reader.readJsonFile("visualPartners.test.json");
		expect(visualPartners).toHaveLength(51);
		expect(visualPartners[5].name).toBe("Taylor");
		expect(typeof(visualPartners[5].credits) == "number").toBe(true);
	});
	test("2) Read json file complete", () => {
		const visualPartners = reader.readJsonFile("visualPartners.test.json");
		
		for(let partner of visualPartners){
			expect(partner.name && partner.id &&
				partner.email && partner.credits &&
				partner.enrollments && partner.previousCourses &&
				partner.haveCertification).not.toBeNull();
			expect(partner.name && partner.id &&
				partner.email && partner.credits &&
				partner.enrollments && partner.previousCourses &&
				partner.haveCertification).not.toBeUndefined();
			expect(typeof(partner.credits) == "number" &&
				typeof(partner.previousCourses) == "number").toBe(true);
		}
	});
});