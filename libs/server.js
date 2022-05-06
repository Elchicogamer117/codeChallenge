const partnerController = require("./controller/partnerController");
const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/",(request, response) => {
	response.json({message: "Visual Thinking API welcome 🖖!"});
});

app.get("/v1/visualpartners",(request, response) => {
	const partnerList = partnerController.getAllExplorers();
	response.json(partnerList);
});

app.get("/v1/visualpartners/certified",(request, response) => {
	const emailsCertifiedPartners = partnerController.getEmailsCertifiedStudents();
	response.json(emailsCertifiedPartners);
});

app.get("/v1/visualpartners/500",(request, response) => {
	const superiorCreditsPartners = partnerController.getSuperiorCreditsStudents();
	response.json(superiorCreditsPartners);
});

let server = app.listen(port, () => {
	console.log(`Visual Thinking API in localhost: ${port}`);
});

let finish = () => {
	server.close();
};

module.exports = {app, finish};