const partnerService = require("../../libs/services/partnerService")
const reader = require("../../libs/utils/reader");

describe("Test for partner service", () => {
	test("1) Get emails of students with  certification", () => {
		const visualPartners = reader.readJsonFile("visualPartners.test.json");
            const emailStudents = partnerService.emailsCertifiedStudents(visualPartners)
            
            for(let partner of emailStudents){
                  expect(partner.haveCertification).toBe(true);
            }
	});

	test("2) Get students with credits over 500", () => {
		const visualPartners = reader.readJsonFile("visualPartners.test.json");
            const creditsStudents = partnerService.superiorCreditsStudents(visualPartners)
            
            for(let partner of creditsStudents){
                  expect(partner.credits).toBeGreaterThan(500);
            }
	});
});