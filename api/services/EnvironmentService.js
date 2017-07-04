const execSync = require('child_process').execSync;

exports.getSailsVersion = function(){

  v = execSync('node ./node_modules/sails/bin/sails -v');

	return v;
}


exports.getDate = function(){
  return new Date();
}
