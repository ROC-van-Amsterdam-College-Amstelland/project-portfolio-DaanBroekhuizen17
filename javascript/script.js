function changeImage() {
    var image = document.getElementById('myImage1');
    if (image.src.match("yeet")) {
        image.src = "images/baby.jpg";
    }
    else {
        image.src = "images/yeet.jpg";
    }
}

function initArray() {
    this.length = initArray.arguments.length;
    for (var i = 0; i < this.length; i++)
    this[i+1] = initArray.arguments[i];
    }
     
    var dagArray = new initArray("zondag","maandag", "dinsdag","woensdag","donderdag","vrijdag","zaterdag");
     
    var maandArray = new initArray("januari","februari","maart","april","mei","juni","juli", "augustus","september","oktober","november","december");
     
    var nu = new Date();
    var dagtekst = dagArray[(nu.getDay()+1)];
    var dag = nu.getDate();
    var maandtekst = maandArray[(nu.getMonth()+1)];
    var jaar = nu.getYear();
    var jaar4 = ((jaar < 1900) ? (jaar + 1900) : (jaar));
     
    var datumweergave = "Het is vandaag " + dagtekst + " " + dag + " " + maandtekst + " " + jaar4;
     
    document.getElementById("vandaag").innerHTML = datumweergave;