const reader = require("../utils/reader");
const partnerService = require("../services/partnerService");

const visualPartners = reader.readJsonFile("visualPartners.test.json");

class partnerController {
	static getAllExplorers(){
		return visualPartners;
	}
	static getEmailsCertifiedStudents(){
		return partnerService.emailsCertifiedStudents(visualPartners);
	}
	static getSuperiorCreditsStudents(){
		return partnerService.superiorCreditsStudents(visualPartners);
	}

}

module.exports = partnerController;