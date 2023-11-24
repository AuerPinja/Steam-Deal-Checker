Tekijä: Pinja Auer

Tämä on Web-sovellusten kehittäminen JavaScriptillä -opintojakson toinen projektityö. 

Tämän sovelluksen tarkoitus on ottaa käyttäjältä haluttu maksimihinta pelille ja näyttää sen perusteella Steam-alustan tarjouksia PC-peleistä. Sovellus myös muuntaa hinnat euroiksi reaaliajassa, kun käytetty API-rajapinta listaa hinnat oletuksena Yhdysvaltain dollareina.

Sovellus hyödyntää siis yhteensä kahden eri API-rajapinnan tietoja toimiakseen.

Tämä sovellus on julkaistu Netlify-alustalla: https://steam-sales-finder.netlify.app/

Steam-alennusten API-rajapinnan tarjoaa CheapShark
https://apidocs.cheapshark.com/

Valuuttakussien API-rajapinnan tarjoaa Open Exchange Rates
https://openexchangerates.org/


API-kutsujen tekemiseen ja datan kirjoittamiseen HTML-muotoon apuna käytetty tätä videota:
https://www.youtube.com/watch?v=rJesac0_Ftw

toFixed() -funktion käyttöön saatu apua täältä:
https://www.w3schools.com/jsref/jsref_tofixed.asp

Kun haluttiin saada alennetut hinnat sovelluksessa näkyvään vihreään boksiin, saatiin siihen apua täältä:
https://stackoverflow.com/questions/14310154/how-do-i-set-a-background-color-for-the-width-of-text-not-the-width-of-the-enti


Kysyttiin myös apua ChatGPT:ltä muutaman kerran, ja saatiin apua siitä seuraaviin ongelmiin:

- Euron kurssin nappaaminen muuttujaan ja sen siirtäminen RenderHTML-funktioon (main.js --> var eur; oltiin aluksi laitettu tämän muuttujan esittelyn JSON-tiedoston käsittelyfunktion sisään, josta renderHTML ei osannut hakea sitä)

- Steam-pelien datan järjestäminen hinnan mukaan suurimmasta pienempään (main.js --> steamData.sort())


Bugit ja ongelmat, joita en saanut ratkaistua:

- Olisin halunnut Buy on Steam -napit item-classia käyttävien divien pohjalle kaikissa tilanteissa, mutta en useista yrityksistä huolimatta saanut sitä toimimaan (yritin mm. bottom ja align-items -selectoreita CSS:llä)

