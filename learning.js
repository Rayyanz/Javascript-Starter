// this is how you can covert a decimal number into binary and then return the representation of binary as if you are looking for the representation of 2 it is 1 as its shown below.
var countBits = function(n) {
  // Program Me

var result = n.toString(2); //Converts to binary
var count = result.split(1);//  count -1 is your answer
return((result.split('1')));

};

countBits(2), 2;


