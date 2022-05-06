const request = require("supertest");
const {app, finish} = require("../libs/server");

describe("Test for server", () =>{
	test("1) Welcome message", async () => { 
		const response = await request(app).get("/");
		expect(response.body.message).toBe("Visual Thinking API welcome 🖖!");
		expect(response.statusCode).toBe(200);
		finish();
	});
	test("2) Endpoint 1: Visual partner list", async () => {
		const response = await request(app).get("/v1/visualpartners");
		expect(response.body.length).toBe(51);
		expect(response.statusCode).toBe(200);
		finish();
	});
	test("3) Endpoint 2: Emails from certified partners", async () => {
		const response = await request(app).get("/v1/visualpartners/certified");
		expect(response.body.length).toBe(29);
		expect(response.statusCode).toBe(200);
		finish();
	});
	test("4) Endpoint 3: Partners with credits over 500", async () => {
		const response = await request(app).get("/v1/visualpartners/500");
		expect(response.body.length).toBe(26);
		expect(response.statusCode).toBe(200);
		finish();
	});
});