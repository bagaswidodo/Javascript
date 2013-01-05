var a = document.kalk.angka1.value;
var b = document.kalk.angka2.value;
function tambahkan()
{
	var hasil = Number(a)+Number(b);
	document.kalk.hasil.value = "" + hasil;
	//alert('call me');
	
	return false;
}