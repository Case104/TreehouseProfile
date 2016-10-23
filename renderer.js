var fs = require('fs');

function mergeValues(values, content){
	Object.keys(values).forEach(function(key){
		content = content.replace(`{{${key}}}`, values[key]);
	})
	return content;
}

function view(templateName, values, response){
	var fileContents = fs.readFileSync(`./views/${templateName}.html`, {encoding: 'utf-8'});
	fileContents = mergeValues(values, fileContents);
	response.write(fileContents);
}

module.exports.view = view;