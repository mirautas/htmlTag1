var carBrands = ["Tesla", "BWM", "Renault", "Volvo", "Mazda", "Fiat", "Ferari"];
document.write("Unsorted list of car brands " + carBrands);
carBrands.sort();
document.write("<br/> Sorted list of car brands " + carBrands);
document.write("<hr/>");

var fruits = ["apple", "banana", "kiwi"];
document.write("Start = " + fruits);
fruits.push("orange");
document.write("<br/>After push = " + fruits);
fruits.pop();
document.write("<br/>After pop = " + fruits);
document.write("<hr/>");

var text = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon";
var fruits2 = text.split("/");
document.write(fruits2[0] + "<br/>");
document.write(fruits2[1] + "<br/>");
document.write(fruits2[2] + "<br/>");
document.write(fruits2[3] + "<br/>");
document.write(fruits2[4] + "<br/>");
document.write(fruits2[5] + "<br/>");
document.write(fruits2[6] + "<br/>");
document.write(fruits2[7] + "<br/></br/>");

//for loop
document.write("For loop iteration: <br/>"); 
for (var i = 0; i< fruits2.length; i++) {
	document.write(fruits2[i] + "<br/><br/>");
}

//while loop
document.write("While loop iteration: <br/>"); 
var i = 0; 
while (i< fruits2.length) {
    document.write(fruits2[i] + "<br/>");
    i++;
}
document.write("<hr/>");


