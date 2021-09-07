function sayilariYazdir(){
    for(var i=1;i<=10;i++)
	{
		document.write(i+"<br>")
	}
    }

function kareleriHesapla(){
    for (var i=1; i<=10; i++)
{
	document.write(Math.pow(i, 2) +"<br>");
}
}

function kupleriHesapla(){
    for (var i=1; i<=10; i++)
{
    document.write(Math.sqrt(i)+"<br>");
}
}

function basamaklaraAyir(){
    for (i=10000; i<=99999; i++)
{
    var birler =(i%100)%10;
    var onlar = Math.floor((i%100)/10);
	var yuzler = Math.floor((i/100)%10);
    var binler = Math.floor((i/1000)%10);
    var onbinler = Math.floor((i/10000)%10);
	document.write("Sayı: "+i+"  Basamakları:"+" OnBinler: "+onbinler+" Binler: "+binler+" Yüzler: "+yuzler+ " Onlar: "+"\t"+onlar+" Birler: "+"\t"+birler+"<br>");
}
}

function enBuyuguBul(){
    var a ;
    var b ;
    var c ;
    a = prompt("Birinci Sayıyı Giriniz");
    b = prompt("İkinci Sayıyı Giriniz");
    c = prompt("Üçüncü Sayıyı Giriniz");
    if(a>b){
        if (b>c) {
            alert("En Büyük: "+a);
        }
        else {
            alert("En Büyük: "+c);
        }
    } 
    else {
        if(b>c){
            alert("En Büyük: "+b);
        }
        else{
            alert("En Büyük: "+c);
        }
    }
}   

function enKucuguBul(){
    var a ;
    var b ;
    var c ;
    a = prompt("Birinci Sayıyı Giriniz");
    b = prompt("İkinci Sayıyı Giriniz");
    c = prompt("Üçüncü Sayıyı Giriniz");
    if(a<b){
        if (b<c) {
            alert("En Küçük: "+a);
        }
        else {
            alert("En Küçük: "+c);
        }
    } 
    else {
        if(b<c){
            alert("En Küçük: "+b);
        }
        else{
            alert("En Küçük: "+c);
        }
    }
}   

function toplamiBul(){
    var a = Number;
    var b = Number;
    var c = Number;
    a = prompt("Birinci Sayıyı Giriniz");
    b = prompt("İkinci Sayıyı Giriniz");
    c = prompt("Üçüncü Sayıyı Giriniz");
    var toplam = parseInt(a) + parseInt(b) + parseInt(c);     
    alert("Toplam: "+ toplam);
    }
    
function ortalamaBul(){
    var a = Number;
    var b = Number;
    var c = Number;
    a = prompt("Birinci Sayıyı Giriniz");
    b = prompt("İkinci Sayıyı Giriniz");
    c = prompt("Üçüncü Sayıyı Giriniz");
    var toplam = parseInt(a) + parseInt(b) + parseInt(c);
    var ortalama = toplam / 3 ;     
    alert("Ortalama: "+ ortalama);
}
