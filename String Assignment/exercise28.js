// 28. Write a JavaScript function to convert Hexadecimal to ASCII format.
// Test Data :
// console.log(hex_to_ascii('3132'));
// console.log(hex_to_ascii('313030'));
// Output :
// "12"
// "100"


function hexToAscii(str1)
 {
	var hex  = str1.toString();
	var str = '';
	for (var n = 0; n < hex.length; n += 2) {
		str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
	}
	return str;
 }
console.log(hexToAscii('3132'));
console.log(hexToAscii('313030'));