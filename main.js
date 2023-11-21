let maxPriceField = document.querySelector("#max-price");
let submitButton = document.querySelector("#submit");
var gameContainer = document.querySelector("#games-container")
var htmlString = "";

submitButton.addEventListener("click", function(){getDeals()});

function getDeals(){
    gameContainer.innerHTML = "";
    htmlString = "";
    var maxPrice = document.querySelector("#max-price").value
    url = "https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=" + maxPrice

    var myRequest = new XMLHttpRequest();
    myRequest.open('GET', url, true);
    myRequest.onload = function(){
        var steamData = JSON.parse(myRequest.responseText);
        renderHTML(steamData);
        };
    myRequest.send();
}

function renderHTML(data){

    for (i = 0; i < data.length; i++){
        htmlString += "<div class=\"item\"> <img src=\""+data[i].thumb+"\" class=\"icon\"> <br><p class=\"game-title\">"+data[i].title+"</p><p class=\"og-price\">\$" + data[i].normalPrice + "</p> <p class=\"sale-price\">\$" + data[i].salePrice +  "<a href=\"https://store.steampowered.com/app/" + data[i].steamAppID + "\ target= \"_blank\" \">Buy on Steam</a></p></div>";
    }

    gameContainer.innerHTML += htmlString
    
};