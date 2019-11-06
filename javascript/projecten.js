function duitsland(){
    document.getElementById("bovenkant").style.backgroundColor = "black";
    document.getElementById("middenkant").style.backgroundColor = "red";
    document.getElementById("onderkant").style.backgroundColor = "gold";

    document.getElementById("bovenkant").style.display = "block";
    document.getElementById("middenkant").style.display = "block";
    document.getElementById("onderkant").style.display = "block";

    document.getElementById("bovenkant").style.height = "100px";
    document.getElementById("middenkant").style.height = "100px";
    document.getElementById("onderkant").style.height = "100px";

    document.getElementById("middenkant").style.borderBottom = "0px";
    document.getElementById("middenkant").style.borderTop = "0px";

    document.getElementById("bovenkant").style.width = "450px";
    document.getElementById("middenkant").style.width = "450px";
    document.getElementById("onderkant").style.width = "450px";
    
    document.getElementById("container").style.backgroundImage = "url('none')"
    document.getElementById("middenkant").style.borderRadius = "0px";
    document.getElementById("middenkant").style.marginLeft = "0px";
    document.getElementById("middenkant").style.marginTop = "0px";
}

function nederland(){
    document.getElementById("bovenkant").style.backgroundColor = "red";
    document.getElementById("middenkant").style.backgroundColor = "white";
    document.getElementById("onderkant").style.backgroundColor = "blue";

    document.getElementById("bovenkant").style.display = "block";
    document.getElementById("middenkant").style.display = "block";
    document.getElementById("onderkant").style.display = "block";

    document.getElementById("bovenkant").style.height = "100px";
    document.getElementById("middenkant").style.height = "100px";
    document.getElementById("onderkant").style.height = "100px";

    document.getElementById("middenkant").style.borderBottom = "0px";
    document.getElementById("middenkant").style.borderTop = "0px";

    document.getElementById("bovenkant").style.width = "450px";
    document.getElementById("middenkant").style.width = "450px";
    document.getElementById("onderkant").style.width = "450px";
    document.getElementById("container").style.backgroundImage = "url('none')"
    document.getElementById("middenkant").style.borderRadius = "0px";
    document.getElementById("middenkant").style.marginLeft = "0px";
    document.getElementById("middenkant").style.marginTop = "0px";
}

function polen(){
    document.getElementById("bovenkant").style.backgroundColor = "transparent";
    document.getElementById("middenkant").style.backgroundColor = "white";
    document.getElementById("onderkant").style.backgroundColor = "red";

    document.getElementById("bovenkant").style.height = "0px";
    document.getElementById("middenkant").style.height = "150px";
    document.getElementById("onderkant").style.height = "150px";

    document.getElementById("bovenkant").style.width = "0px";
    document.getElementById("middenkant").style.width = "450px";
    document.getElementById("onderkant").style.width = "450px";

    document.getElementById("middenkant").style.borderBottom = "0px";
    document.getElementById("middenkant").style.borderTop = "0px";

    document.getElementById("bovenkant").style.display = "block";
    document.getElementById("middenkant").style.display = "block";
    document.getElementById("onderkant").style.display = "block";
    document.getElementById("container").style.backgroundImage = "url('none')"
    document.getElementById("middenkant").style.borderRadius = "0px";
    document.getElementById("middenkant").style.marginLeft = "0px";
    document.getElementById("middenkant").style.marginTop = "0px";
}

function colombia(){
    document.getElementById("bovenkant").style.backgroundColor = "gold";
    document.getElementById("middenkant").style.backgroundColor = "blue";
    document.getElementById("onderkant").style.backgroundColor = "red";

    document.getElementById("bovenkant").style.width = "450px";
    document.getElementById("middenkant").style.width = "450px";
    document.getElementById("onderkant").style.width = "450px";

    document.getElementById("bovenkant").style.height = "150px";
    document.getElementById("middenkant").style.height = "75px";
    document.getElementById("onderkant").style.height = "75px";

    document.getElementById("middenkant").style.borderBottom = "0px";
    document.getElementById("middenkant").style.borderTop = "0px";

    document.getElementById("bovenkant").style.display = "block";
    document.getElementById("middenkant").style.display = "block";
    document.getElementById("onderkant").style.display = "block";
    document.getElementById("container").style.backgroundImage = "url('none')"
    document.getElementById("middenkant").style.borderRadius = "0px";
    document.getElementById("middenkant").style.marginLeft = "0px";
    document.getElementById("middenkant").style.marginTop = "0px";
}

function botswana(){
    document.getElementById("bovenkant").style.backgroundColor = "rgb(116, 152, 250)";
    document.getElementById("middenkant").style.backgroundColor = "black";
    document.getElementById("onderkant").style.backgroundColor = "rgb(116, 152, 250)";

    document.getElementById("bovenkant").style.width = "450px";
    document.getElementById("middenkant").style.width = "450px";
    document.getElementById("onderkant").style.width = "450px";

    document.getElementById("bovenkant").style.height = "100px";
    document.getElementById("middenkant").style.height = "50px";
    document.getElementById("onderkant").style.height = "100px";

    document.getElementById("middenkant").style.borderBottom = "25px solid white"
    document.getElementById("middenkant").style.borderTop = "25px solid white"

    document.getElementById("bovenkant").style.display = "block";
    document.getElementById("middenkant").style.display = "block";
    document.getElementById("onderkant").style.display = "block";
    document.getElementById("container").style.backgroundImage = "url('none')"
    document.getElementById("middenkant").style.borderRadius = "0px";
    document.getElementById("middenkant").style.marginLeft = "0px";
    document.getElementById("middenkant").style.marginTop = "0px";
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