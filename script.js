//your JS code here. If required.
function upperCase(){
const theName = document.getElementById("fname");

theName.addEventListener("blur", function(){
	theName.value = theName.value.toUpperCase();
});
}
upperCase();