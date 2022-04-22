//girdiler

var anapara;
var VADE;

//çıktılar
var ödenecektutar;
var aylıktaksit;


function hesapla() {
  anapara = document.getElementById("kredıtutar").value;
  var xliste = document.getElementById("vade");

  VADE = xliste.options[xliste.selectedIndex].value;

  if (VADE == 8) {
    ödenecektutar = anapara * 1.3
  }
  else if (VADE == 12) {
    ödenecektutar = anapara * 1.6
  }
  else if (VADE == 18) {
    ödenecektutar = anapara * 1.8
  }

  aylıktaksit = ödenecektutar / VADE;

  document.getElementById("sonuc").innerHTML = "Geri ödenecek Tutar : " + ödenecektutar + "<br>"
    + "Aylık Taksit :" + aylıktaksit.toFixed(2);

}