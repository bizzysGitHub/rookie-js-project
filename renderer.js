var fs = require("fs");


function mergeValues(values, content) {
  //cycle over the keys
    //replace all {{key}} with the value from the values object
  for (var key in values) {

    content = content.replace("{{"+ key +"}}", values[key]);

  }

  //return merged content
  return content;
}
function view(templateName, values, response){
  // read from the template files
  var fileContents = fs.readFileSync('./views/' + templateName +'.html',{encoding:"utf8"})

  //Insert values into content
  fileContents = mergeValues(values,fileContents);


  //Write out conentes to response
  response.write(fileContents);

}

module.exports.view = view;
