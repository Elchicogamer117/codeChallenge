const reader = require("../../libs/utils/reader");
const partnerController = require("../../libs/controller/partnerController");

describe("Test for partner controller", () => {
	test("1) Get all students with all fields", () => {
		const allStudents = partnerController.getAllExplorers();
		expect(allStudents.length).toBe(51);
	});

	test("2) Get emails from certified students", () => {
		const emailsCertifiedStudents = partnerController.getEmailsCertifiedStudents();
		expect(emailsCertifiedStudents.length).toBe(29);
	});

	test("3) Get student with credits over 500", () => {
		const superiorCreditsStudents = partnerController.getSuperiorCreditsStudents();
		expect(superiorCreditsStudents.length).toBe(26);
	});
});
