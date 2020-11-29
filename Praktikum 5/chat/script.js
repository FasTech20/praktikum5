function kirim() {
	var pesan    = document.getElementById("pesan").value;
	var tampilan  = document.getElementById('tampilan').innerHTML;
	if (pesan != "" && tampilan =="") {
		document.getElementById('tampilan').innerHTML = pesan;
		document.getElementById("pesan").value = "";
		chat();
	}
	else if (pesan != "") {
		document.getElementById('tampilan').innerHTML = tampilan +"<br>"+ pesan;
		document.getElementById("pesan").value = "";
		chat();
	}
}
function chat(){
	var input    = document.getElementById("tampilan");
	input.chat();

}
document.getElementById('pesan').addEventListener("keyup", function(event){
	event.preventDefault();
	if (event.keyCode === 13) {
		document.getElementById("kirim").click();
	}
})