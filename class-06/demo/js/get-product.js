'use strict'

var response = prompt('Would you rather have a house or hotel?');
var message;

if (response === 'house') {
  message = 'Houses are nice!';
} else if (response === 'hotel') {
  message = 'Hotels are nice!';
} else {
  message = 'Fine';
}

document.write('<h3>' + message + '</h3>');
