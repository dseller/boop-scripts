/**
{
	"api": 1,
	"name": "Generate GUID",
	"description": "Generates a new GUID",
	"author": "Dennis Seller",
	"icon": "aaa",
	"tags": "guid"
}
**/

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

function main(input) {
	input.insert(uuidv4());
}
