
var eur;

// Tehdään API kutsu valuuttakursseihin
var exhangeRequest = new XMLHttpRequest();
exhangeRequest.open('GET', 'https://openexchangerates.org/api/latest.json?app_id=ff90657c974644dfb85422788c149ba9', true);
exhangeRequest.onload = function(){
    var exchangeData = JSON.parse(exhangeRequest.responseText);
    eur = exchangeData.rates.EUR
}
exhangeRequest.send();


let maxPriceField = document.querySelector("#max-price");
let submitButton = document.querySelector("#submit");
var gameContainer = document.querySelector("#games-container")
var htmlString = "";

submitButton.addEventListener("click", function(){getDeals()});


function getDeals(){

    // Tyhjentää aikaisemman haun
    gameContainer.innerHTML = "";
    htmlString = "";

    // Nappaa käyttäjän asettaman luvun
    var maxPrice = document.querySelector("#max-price").value

    // Luo käyttäjän luvun perusteella hakuosoitteen
    url = "https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=" + maxPrice

    // Tehdään API kutsu
    var myRequest = new XMLHttpRequest();
    myRequest.open('GET', url, true);
    myRequest.onload = function(){
        var steamData = JSON.parse(myRequest.responseText);
        // Järjestetään pelit alehinnan mukaan suurimmasta pienempään
        steamData.sort(function (a, b) {
            return b.salePrice - a.salePrice;
        });
        // Lähetetään saatu data renderHTML funktioon kirjoittmaan haluttu data dokumenttiin
        renderHTML(steamData);
        };
    myRequest.send();
}

function renderHTML(data){

    // Hakee JSON tiedostosta kaikki pelit, joiden hinta on pienempi, kuin käyttäjän laittama luku
    for (i = 0; i < data.length; i++){
        htmlString += "<div class=\"item\"> <img src=\""+data[i].thumb+"\" class=\"icon\"> <br><p class=\"game-title\">"+data[i].title+"</p><p class=\"og-price\">" + (((data[i].normalPrice * eur) * 100) / 100).toFixed(2) + " €</p> <p class=\"sale-price\">\<span class = \"disco\">" + (((data[i].salePrice * eur) * 100) / 100).toFixed(2) +  " €</span></p><a class=\"steam-link\" href=\"https://store.steampowered.com/app/" + data[i].steamAppID + "\" target= \"_blank\" \">Buy on Steam</a></div>";
    }

    gameContainer.innerHTML += htmlString
    
};