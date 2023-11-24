Tekijä: Pinja Auer

Tämä on Web-sovellusten kehittäminen JavaScriptillä -opintojakson toinen projektityö. 

Tämän sovelluksen tarkoitus on ottaa käyttäjältä haluttu maksimihinta pelille ja näyttää sen perusteella Steam-alustan tarjouksia PC-peleistä. Sovellus myös muuntaa hinnat euroiksi reaaliajassa, kun käytetty API-rajapinta listaa hinnat oletuksena Yhdysvaltain dollareina.

Steam-alennusten API-rajapinnan tarjoaa CheapShark
https://apidocs.cheapshark.com/

Valuuttakussien API-rajapinnan tarjoaa Open Exchange Rates
https://openexchangerates.org/


API-kutsujen tekemiseen ja datan kirjoittamiseen HTML-muotoon apuna käytetty tätä videota:
https://www.youtube.com/watch?v=rJesac0_Ftw

toFixed() -funktion käyttöön sain apua täältä:
https://www.w3schools.com/jsref/jsref_tofixed.asp

Kun halusin saada alennetut hinnat sovelluksessa näkyvään vihreään boksiin, sain siihen apua täältä:
https://stackoverflow.com/questions/14310154/how-do-i-set-a-background-color-for-the-width-of-text-not-the-width-of-the-enti


Kysyin myös apua ChatGPT:ltä muutaman kerran, ja sain apua siitä seuraaviin ongelmiin:

- Euron kurssin nappaaminen muuttujaan ja sen siirtäminen RenderHTML-funktioon (main.js --> var eur; olin aluksi laittanut tämän muuttujan esittelyn JSON-tiedoston käsittelyfunktion sisään, josta renderHTML ei osannut hakea sitä)

- Steam-pelien datan järjestäminen hinnan mukaan suurimmasta pienempään (main.js --> steamData.sort())




