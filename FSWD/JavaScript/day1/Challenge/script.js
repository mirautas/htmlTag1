var matrix = [["Vienna", "bla", "bla", "bla", "bla"], 
			  ["bla", "is", "bla", "bla", "bla"],
			  ["bla", "bla", "a", "bla", "bla"],
			  ["bla", "bla", "bla", "nice", "bla"],
			  ["bla", "bla", "bla", "bla", "city"]]
document.write(matrix[0][0] + " " + matrix[1][1] + " " + matrix[2][2] + " " + matrix[3][3] +" " + matrix[4][4]);
document.write("<hr/>");

var text = "Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$\"properties $flow$down;$actions$flow$up\".";
document.write(text + "<br/>");
var words = text.split("$");
document.write(words.join(" "));
