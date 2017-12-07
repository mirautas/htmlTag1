var text = "With the online map of Vienna you can easily navigate through Vienna.";
var words = text.split(" ");
document.write(words + "<br/>");

words.splice(words.indexOf("Vienna"), 1);
document.write(words + "<br/>");
var vienna1 = "Vienna";

words.splice(words.indexOf("Vienna"), 1);
document.write(words + "<br/>");
var vienna2 = "Vienna";

document.write(vienna1 + " <br/>" + vienna2);

/*while (words.indexOf("Vienna") != -1){
	words.splice(words.indexOf("Vienna"), 1);
	document.write(words + "<br/>");
}*/
document.write("<hr/>")

var a = 7;
var b = 14;
var c = "21";
var d = '36';
var e = 42;

var sum = a + b + Number(c) + Number(d) + e;
document.write("Sum " + sum + "<br/>");

var f = '1';
var g = 15;
var h = 8;
var i = "1";
var multiplication = Number(f) * g * h * Number(i);
document.write("Multiplication result " + multiplication + "<br/>");

document.write("Divison result " + sum/multiplication + "<br/>");

document.write("<hr/>")

var matrix = [ [1, 2, 1, 24], 
  			   [8, 11, 9, 4], 
			   [7, 0, 7, 27], 
			   [7, 4, 28, 14], 
			   [3, 10, 25, 7], 
			   [21, 4, 6, 17], 
			   [3, 5, 26, 3] ]
document.write(matrix[1][1] + "<br/>");
document.write(matrix[4][2] + "<br/>");
document.write(matrix[5][3] + "<br/>");
document.write(matrix[2][3] + "<br/>");
document.write(matrix[2][1] + "<br/>");


