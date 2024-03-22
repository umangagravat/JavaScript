// Write a JavaScript function to escape special characters (&, <, >, ', ") for use in HTML.

// Test Data:
// console.log(escape_html('PHP & MySQL'));
// "PHP &amp; MySQL"
// console.log(escape_html('3 > 2'));
// "3 &gt; 2"

function html(str) {

    if ((str === null) || (str === ''))
        return false;
    else
        str = str.toString();

    var map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };

    return str.replace(/[&<>"']/, function (m) { return map[m]; });
}
console.log(html('PHP & MySQL'));
console.log(html('3 " 2'));