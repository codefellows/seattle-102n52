'use strict' 

function askName() {
  var userName = prompt('What is your name?');
  return document.write('<h3>Nice to meet you ' + userName + '</h3>');
}

askName();

