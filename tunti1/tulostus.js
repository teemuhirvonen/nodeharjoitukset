const { tulostaTulos, tulostaTahtia } = require('./moduuli');

const tulostaNelio = (a) => {
    tulos = "* ";
    tulos = tulos.repeat(a);
    for(i=0;i<a;i++){
        console.log(tulos);
    }
}

const tulostaSuorakulmio = (a, b) => {
    tulos = "* ";
    tulos = tulos.repeat(a);
    for(i=0;i<b;i++){
        console.log(tulos);
    }
}

const tulostaKolmio = (a) => {
    tulos = "* ";
    for(i=0;i<a;i++){
        console.log(tulos.repeat(i + 1));
    }
}

const lukusarjanSumma = (a, tulostaTulos) => {
    tulos = 0;
    for(i=0;i < a;i++) {
        tulos += i + 1; 
    }
    return tulos;
}

const kertoma = (a) => {
    tulos = a;
    while(a > 1) {
        a--;
        tulos = tulos * a;
    }
    return tulos;
}

tulostaNelio(4); 
tulostaSuorakulmio(5, 3);
tulostaKolmio(5);
tulostaTulos(lukusarjanSumma(100));
tulostaTulos(kertoma(20));

module.exports = {
    tulostaNelio: tulostaNelio,
    tulostaSuorakulmio: tulostaSuorakulmio,
    tulostaKolmio: tulostaKolmio,
    lukusarjanSumma: lukusarjanSumma,
    kertoma: kertoma
};