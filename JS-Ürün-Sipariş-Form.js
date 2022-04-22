//girdiler
var uruntipi;
var urunadet;
var uruntaksiit;
//çıktılar
var maxtutar;
var aylıktaksit;
//global değişken
var LİSTE;
var SECENEK;
//değişken
var j;

var erkekurun = ["sapka", 100, "kazak", 150, "pantolon", 260, "saat", 330];
var bayanurun = ["çanta", 280, "yelek", 140, "kolye", 80, "parfüm", 130];

function urunadeti() 
{
    for (j = 0; j <= 6; j++) {
        SECENEK = document.createElement("option");
        LİSTE = document.getElementById("urunadeti");
        LİSTE.options.add(SECENEK);
        SECENEK.text = j;
    }
 }
function uruntaksiti()
 {
    for (j = 1; j <= 12; j = j + 3) {
        SECENEK = document.createElement("option");
        LİSTE = document.getElementById("uruntaksiti");
        LİSTE.options.add(SECENEK);
        SECENEK.text = j;
    } 
 }
function urungetir() {
    // erkek-bayan RADIO secimi yapıldığında lıste sıfırlansın sadece secilinin optıonları gelsin ==>
    document.querySelectorAll('#urunliste option').forEach(option => option.remove());
    //foreach = her eleman ıcın" butun optıonlar ıcın"
    LİSTE = document.getElementsByName("cins");

    for (j = 0; j < LİSTE.length; j++)
    {
        if (LİSTE[j].checked) {
            uruntipi = LİSTE[j].value;
        }
    }

    if (uruntipi == "00erkek")
    {
        for (j = 0; j < erkekurun.length; j = j + 2) {
            SECENEK = document.createElement("option");//optıon tıpınde nesneler olusturuyoruz
            LİSTE = document.getElementById("urunliste");
            LİSTE.options.add(SECENEK);// listenın icıne secenek nesnesınde ne varsa onu eklıyoruz
            SECENEK.text = erkekurun[j];
            SECENEK.value = erkekurun[j + 1];
        }
    }
    else if (uruntipi == "00bayan") 
    {
        for (j = 0; j < bayanurun.length; j = j + 2) {
            SECENEK = document.createElement("option");
            LİSTE = document.getElementById("urunliste");
            LİSTE.options.add(SECENEK);
            SECENEK.text = bayanurun[j];
            SECENEK.value = bayanurun[j + 1];
        }
    }
}
function btnhesap()
{
   LİSTE = document.getElementById("urunliste");
   var urunsecimi = LİSTE[LİSTE.selectedIndex].value;

   LİSTE = document.getElementById("urunadeti");
   urunadet = LİSTE[LİSTE.selectedIndex].value;

   LİSTE = document.getElementById("uruntaksiti");
   uruntaksiit = LİSTE[LİSTE.selectedIndex].value;

   maxtutar = urunsecimi * urunadet;
   
   if(uruntaksiit == 1)
   {
     maxtutar = maxtutar *1.0;
   }
   else if(uruntaksiit == 4)
   {
     maxtutar = maxtutar * 1.2;
   }

   else if(uruntaksiit == 7)
    {
        maxtutar = maxtutar * 1.5;
    }

    else if(uruntaksiit == 10)
    {
        maxtutar = maxtutar * 1.8;
    }

    document.getElementById("SNC00").innerHTML = "Ödemeniz Gereken Toplam Tutar :" + maxtutar;
}