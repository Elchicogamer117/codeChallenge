const reader = require("../../libs/utils/reader");
const partnerController = require("../../libs/controller/partnerController");

const visualPartners = reader.readJsonFile("visualPartners.test.json")

describe("Test for partner controller", () => {
	test("1) Get all students with all fields", () => {
		const allStudents = partnerController.getAllExplorers(visualPartners);
		expect(allStudents.lenght).tobe(51);
	});

	test("2) Get emails from certified students", () => {
		const emailsCertifiedStudents = partnerController.getEmailsCertifiedStudents(visualPartners);
		expect(emailsCertifiedStudents.lenght).toBe(29)
	});

	test("3) Get student with credits over 500", () => {
		const superiorCreditsStudents = partnerController.getSuperiorCreditsStudents(visualPartners);
		expect(superiorCreditsStudents.lenght).toBe(27);
	});
});