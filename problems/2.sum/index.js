var pwd = process.cwd();

// Problem def, quick tip use ES6 template strings.
exports.problem = 'Write a seneca "sum" service. ' +
  '	[TODO: Add a little explaination from tutorial] ';

// Verifier
exports.verify = function(args,cb) {

  // Propose solution
  var proposedSolution = require(pwd + '/' + args[0]);

  // TODO: Check if the solution is correct.

  if ( proposed(3,4) == 7 ) {
    console.log("You have solved it!");
    return cb(true);
  } else {
    console.log("Sorry, your solution is wrong :(");
  }
};
