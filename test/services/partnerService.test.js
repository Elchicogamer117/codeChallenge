const partnerService = require("../../libs/services/partnerService");
const reader = require("../../libs/utils/reader");

describe("Test for partner service", () => {
	test("1) Get emails of students with  certification", () => {
		const visualPartners = reader.readJsonFile("visualPartners.test.json");
		const emailStudents = partnerService.emailsCertifiedStudents(visualPartners);
            
		expect(emailStudents).toContain("Montoya@visualpartnership.xyz");
		expect(emailStudents).toContain("Rosemary@visualpartnership.xyz");
		expect(emailStudents).toContain("Mcpherson@visualpartnership.xyz");
		expect(emailStudents).not.toContain("Landry@visualpartnership.xyz");
		expect(emailStudents).not.toContain("Kerri@visualpartnership.xyz");
		expect(emailStudents).not.toContain("Marie@visualpartnership.xyz");
	});

	test("2) Get students with credits over 500", () => {
		const visualPartners = reader.readJsonFile("visualPartners.test.json");
		const creditsStudents = partnerService.superiorCreditsStudents(visualPartners);
            
		for(let partner of creditsStudents){
			expect(partner.credits).toBeGreaterThan(500);
		}
	});
});