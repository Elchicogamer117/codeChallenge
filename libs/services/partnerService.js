class partnerService {
	static emailsCertifiedStudents(visualPartners){
		const  certifiedStudents = visualPartners.filter((partner) => partner.haveCertification === true);
		return certifiedStudents.map( partner => partner.email);
	}

	static superiorCreditsStudents(visualPartners){
		return visualPartners.filter( partner => partner.credits > 500);
	}
}

module.exports = partnerService;