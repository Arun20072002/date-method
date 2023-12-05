document.write("calculate age"+"<br>")
document.write("-------------"+"<br>")

var birthDate = prompt("Enter your birth date (YYYY-MM-DD):");
var birthDateObj = new Date(birthDate);
var currentDate = new Date();
var age = currentDate.getFullYear() - birthDateObj.getFullYear();

alert(`You are ${age} years old.`);


