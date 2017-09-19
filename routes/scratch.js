
function testSpecialChar(str){
  // var regEx = /\D\W/
  var regEx = /[^A-Za-z0-9]/
  return regEx.test(str)
}

console.log(testSpecialChar($));
