
/*
function Myfunction(){

var array = [4, 7, 15, 25],
 git = document.getElementById('function');



if ( array[0] > array[1] && array[0] > array[2] && array[0] > array[3]){
	git.innerHTML = array[0];
}
else if (array[1] > array[0] && array[1] > array[2] && array[1] > array[3]){
	git.innerHTML = array[1];
}
else if (array[2] > array[0] && array[2] > array[1] && array[2] > array[3]){
	git.innerHTML = array[2];
}
else {
	git.innerHTML = array[3];
}
}

*/

test = [1, 3, 7, 10, 2]

function Myfunction2 (array){
		R1 = 1 ;

	for ( i =0; i< array.lenght; i++) {

		R1 = R1 * array[i];
	}
	document.getElementById("output").innerHTML = R1
}