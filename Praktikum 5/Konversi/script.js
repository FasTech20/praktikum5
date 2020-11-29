function konversi() {	

		let a = eval(document.getElementById('nilai').value);
		let b  = document.getElementById('valas').value;
		let c = document.getElementById('hasil').value;

		if (b == "dolaras" ) {
			 hasil = a * 9915;
			document.getElementById('hasil').value = "Rp." + hasil;
		}else if (b == "dolarsingapore") {
			 hasil = a * 13472;
			document.getElementById('hasil').value = "Rp." + hasil;
		}else if (b == "ringgit" ) {
			 hasil = a * 874;
			document.getElementById('hasil').value = "Rp." + hasil;
		}else if (b == "yen") {
			 hasil = a * 120;
			document.getElementById('hasil').value = "Rp." + hasil;
		}else if (b == "euro") {
			 hasil = a * 15888;
			document.getElementById('hasil').value = "Rp." + hasil;
		}else if (b == "real") {
			 hasil = a * 3592;
			document.getElementById('hasil').value = "Rp." + hasil;
		}else{
			alert("Silahkan masukkan pilihan konversi mata uang");
		}
	}
	