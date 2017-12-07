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