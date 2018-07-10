var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('./public/index.html', 'utf8');
var options = { 
  "format": 'A4',
  "border": {
    "top": "1cm",            // default is 0, units: mm, cm, in, px
    "right": "3cm",
    "bottom": "2cm",
    "left": "3cm"
  }
 };

pdf.create(html, options).toFile('./static/cv.pdf', function(err, res) {
  if (err) return console.log(err);
  console.log(res);
});