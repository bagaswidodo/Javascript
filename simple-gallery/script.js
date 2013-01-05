function gantiGambar()
{
	var gb = document.galleri.select.value;
	
	//untuk menampilkan
	document.getElementById('album').innerHTML = "<img src=image/" + gb + " width=100 height=100>";
}