let maxPriceField = document.querySelector("#max-price");
let submitButton = document.querySelector("#submit");
var gameContainer = document.querySelector("#games-container")




submitButton.addEventListener("click", function(){getDeals()});

function getDeals(){
    var maxPrice = document.querySelector("#max-price").value
    url = "https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=" + maxPrice
    console.log(url)

    var myRequest = new XMLHttpRequest();
    myRequest.open('GET', url, true);
    myRequest.onload = function(){
        var steamData = JSON.parse(myRequest.responseText);
        renderHTML(steamData);
        console.log(steamData[1].title);
        };
    myRequest.send();
}

function renderHTML(data){
    var htmlString = "";
    
    for (i = 0; i < data.length; i++){
        htmlString += "<span>" + data[i].title + " is on sale and costs " + data[i].salePrice + " dollars.</span>";
    }

    gameContainer.innerHTML += htmlString
};