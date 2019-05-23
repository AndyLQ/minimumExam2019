var head = document.getElementsByTagName("HEAD")[0];
var header = document.getElementsByTagName("HEADER")[0];
var footer = document.getElementsByTagName("FOOTER")[0];


head.innerHTML = '<title>Title made with js</title> <link rel="stylesheet" type="text/css" href="Styles/style.css"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">'

header.innerHTML = '<nav> <div id="headflex1"><a href="menu.html" class="burger">&#9776;</a> <ul class="headmenu"> <li class="menu1 menufirst"><a href="female.html">female</a></li><li class="menu1"><a href="moves.html">moves</a></li> <li class="menu1"><a href="male.html">male</a></li>  <li class="menu1 menulast"><button class="openBtn" onclick="openSearch()">search</button></li> </ul> </div> <div id="headflex2"><a href="index.html"> <img id="logo" src="img/minimumlogo_black.png"> </a></div> <div id="headflex3"> <ul class="headmenu2"> <li class="menu2 menufirst"><a href="myaccount.html">my account</a></li> <li class="menu2"><a href="info.html">info</a></li> <li class="menu2"><a href="login.html">log out</a></li> <li class="menu2 menulast"><a href="checkout.html"><img src="img/kurv.png" id="kurven"></a></li> </ul> </div> </nav> <!--overlay til search--> <div id="myOverlay" class="overlay"> <span class="closebtn" onclick="closeSearch()" title="Close Overlay">&#215;</span> <div class="overlay-content"> <form action="male.html"> <input type="text" placeholder="search for styles..." name="search"> <button type="submit"><i class="fa fa-search"></i></button> </form> </div></div>';

footer.innerHTML = '<section class="footercontent"> <div class="footeritem1"> <p>newsletter</p> <p>faq</p> </div> <div class="footeritem2"> <p>socialemedier</p> </div> <div class="footeritem3"> <p>contact</p> </div> </section>';


//Sidenav sticky

window.onscroll = function () {
    myFunction()
};

function myFunction() {
    if (document.body.scrollTop > 130 && document.body.scrollTop < 1400 || document.documentElement.scrollTop > 130 && document.documentElement.scrollTop < 1400) {
        document.getElementsByClassName("sidenav")[0].style.position = "fixed";
        document.getElementsByClassName("sidenav")[0].style.top = "-20px";
        //        document.getElementsByClassName("sidenav")[0].style.border = "green thick solid";
    } else if (document.body.scrollTop > 1400 || document.documentElement.scrollTop > 1400) {
        document.getElementsByClassName("sidenav")[0].style.position = "absolute";
        document.getElementsByClassName("sidenav")[0].style.top = "1400px";
        //        document.getElementsByClassName("sidenav")[0].style.border = "red thick solid";
    } else {
        document.getElementsByClassName("sidenav")[0].style.position = "absolute";
        document.getElementsByClassName("sidenav")[0].style.top = "110px";

    }
}




//for seach overlay
function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
    document.getElementsByClassName("page")[0].style.display = "none";
}

function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
    document.getElementsByClassName("page")[0].style.display = "block";
}





//MOBIL OG TABLET MENU


function shopmenu() {
    document.getElementById("shopmenu").style.display = "block";
    document.getElementById("mshopmenu").style.textDecoration = "underline";
    document.getElementById("mshopmenu").style.fontWeight = "800";
    document.getElementById("mshopmenu").style.color = "black";

    document.getElementById("accountmenu").style.display = "none";
    document.getElementById("maccountmenu").style.textDecoration = "none";
    document.getElementById("maccountmenu").style.fontWeight = "400";
    document.getElementById("maccountmenu").style.color = "gray";

    document.getElementById("mmenu1").style.display = "none";
    document.getElementById("femaleting").style.color = "gray";
    document.getElementById("femaleting").style.fontWeight = "400";
    
    document.getElementById("mmenu2").style.display = "none";
    document.getElementById("movesting").style.color = "gray";
    document.getElementById("movesting").style.fontWeight = "400";
    
    document.getElementById("mmenu3").style.display = "none";
    document.getElementById("maleting").style.color = "gray";
    document.getElementById("maleting").style.fontWeight = "400";
    
    document.getElementById("mmenu4").style.display = "none";
    document.getElementById("myaccountting").style.textDecoration = "none";
    document.getElementById("myaccountting").style.fontWeight = "400";
    document.getElementById("myaccountting").style.color = "gray";
    
    document.getElementById("mmenu5").style.display = "none";
    document.getElementById("infoting").style.fontWeight = "400";
    document.getElementById("infoting").style.textDecoration = "none";
    document.getElementById("infoting").style.color = "gray";
}

function accountmenu() {
    document.getElementById("shopmenu").style.display = "none";
    document.getElementById("mshopmenu").style.textDecoration = "none";
    document.getElementById("mshopmenu").style.fontWeight = "400";
    document.getElementById("mshopmenu").style.color = "gray";

    document.getElementById("accountmenu").style.display = "block";
    document.getElementById("maccountmenu").style.textDecoration = "underline";
    document.getElementById("maccountmenu").style.fontWeight = "800";
    document.getElementById("maccountmenu").style.color = "black";

    document.getElementById("mmenu1").style.display = "none";
    document.getElementById("femaleting").style.textDecoration = "none";
    document.getElementById("femaleting").style.fontWeight = "400";
    document.getElementById("femaleting").style.color = "gray";
    
    document.getElementById("mmenu2").style.display = "none";
    document.getElementById("movesting").style.textDecoration = "none";
    document.getElementById("movesting").style.fontWeight = "400";
    document.getElementById("movesting").style.color = "gray";
    
    document.getElementById("mmenu3").style.display = "none";
      document.getElementById("maleting").style.textDecoration = "none";
    document.getElementById("maleting").style.fontWeight = "400";
    document.getElementById("maleting").style.color = "gray";
    
    document.getElementById("mmenu4").style.display = "none";
    document.getElementById("myaccountting").style.color = "gray";
    document.getElementById("myaccountting").style.fontWeight = "400";
    
    document.getElementById("mmenu5").style.display = "none";
    document.getElementById("infoting").style.color = "gray";
    document.getElementById("infoting").style.fontWeight = "400";
    
}

function femaleting() {
    document.getElementById("mmenu1").style.display = "block";
    document.getElementById("femaleting").style.textDecoration = "underline";
    document.getElementById("femaleting").style.fontWeight = "800";
    document.getElementById("femaleting").style.color = "black";
    
    document.getElementById("mmenu2").style.display = "none";
    document.getElementById("movesting").style.textDecoration = "none";
    document.getElementById("movesting").style.fontWeight = "400"
    document.getElementById("movesting").style.fcolor = "gray";
    
    document.getElementById("mmenu3").style.display = "none";
    document.getElementById("maleting").style.textDecoration = "none";
    document.getElementById("maleting").style.fontWeight = "400";
    document.getElementById("maleting").style.color = "gray";
    
    document.getElementById("mmenu4").style.display = "none";
    document.getElementById("mmenu5").style.display = "none";
}

function movesting() {
    document.getElementById("mmenu1").style.display = "none";
    document.getElementById("femaleting").style.textDecoration = "none";
    document.getElementById("femaleting").style.fontWeight = "400";
    document.getElementById("femaleting").style.color = "gray";
    
    document.getElementById("mmenu2").style.display = "block";
    document.getElementById("movesting").style.textDecoration = "underline";
    document.getElementById("movesting").style.fontWeight = "800";
    document.getElementById("movesting").style.color = "black";
    
    document.getElementById("mmenu3").style.display = "none";
    document.getElementById("maleting").style.textDecoration = "none";
    document.getElementById("maleting").style.fontWeight = "400";
    document.getElementById("maleting").style.color = "gray";
    
    document.getElementById("mmenu4").style.display = "none";
    document.getElementById("mmenu5").style.display = "none";
}

function maleting() {
    document.getElementById("mmenu1").style.display = "none";
    document.getElementById("femaleting").style.textDecoration = "none";
    document.getElementById("femaleting").style.fontWeight = "400";
    document.getElementById("femaleting").style.color = "gray";
    
    document.getElementById("mmenu2").style.display = "none";
    document.getElementById("movesting").style.textDecoration = "none";
    document.getElementById("movesting").style.fontWeight = "400";
    document.getElementById("movesting").style.color = "gray";
    
    document.getElementById("mmenu3").style.display = "block";
    document.getElementById("maleting").style.textDecoration = "underline";
    document.getElementById("maleting").style.fontWeight = "800";
    document.getElementById("maleting").style.color = "black";
    
    document.getElementById("mmenu4").style.display = "none";
    document.getElementById("mmenu5").style.display = "none";
}

function myaccountting() {
    document.getElementById("mmenu1").style.display = "none";
    document.getElementById("mmenu2").style.display = "none";
    document.getElementById("mmenu3").style.display = "none";
    
    document.getElementById("mmenu4").style.display = "block";
    document.getElementById("myaccountting").style.textDecoration = "underline";
    document.getElementById("myaccountting").style.fontWeight = "800";
    document.getElementById("myaccountting").style.color = "black";
    
    document.getElementById("mmenu5").style.display = "none";
    document.getElementById("infoting").style.fontWeight = "400";
    document.getElementById("infoting").style.textDecoration = "none";
    document.getElementById("infoting").style.color = "gray";
}

function infoting() {
    document.getElementById("mmenu1").style.display = "none";
    document.getElementById("mmenu2").style.display = "none";
    document.getElementById("mmenu3").style.display = "none";
    
    document.getElementById("mmenu4").style.display = "none";
    document.getElementById("myaccountting").style.textDecoration = "none";
    document.getElementById("myaccountting").style.fontWeight = "400";
    document.getElementById("myaccountting").style.color = "gray";
    
    document.getElementById("mmenu5").style.display = "block";
    document.getElementById("infoting").style.fontWeight = "800";
    document.getElementById("infoting").style.textDecoration = "underline";
    document.getElementById("infoting").style.color = "black";
}
