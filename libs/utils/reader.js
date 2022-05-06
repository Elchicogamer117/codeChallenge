const fs = require("fs");

class reader{
      
	static readJsonFile(patch){
		const rawdata = fs.readFileSync(patch);
		return JSON.parse(rawdata);
	}
}

module.exports = reader;
