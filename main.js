document.getElementById("btn").addEventListener("click", btnclicked);

function btnclicked(){

//Input
let A = document.getElementById("A-in").value;
let B = document.getElementById("B-in").value;

//process
let C = A**2 + B**2;
let total = Math.sqrt(C)
//output
document.getElementById("C").innerHTML = total;
}