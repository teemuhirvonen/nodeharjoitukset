const tulostaTahtia = (n) => console.log("* ".repeat(n));


const tulostaTulos = (n) => {
    n = n.toString();
    console.log("-".repeat(n.length));
    console.log(n);
    console.log("-".repeat(n.length));
}

tulostaTahtia(10);

tulostaTulos("Tämä on lopputulos"); 

tulostaTulos(34523452);

module.exports = { tulostaTahtia: tulostaTahtia, tulostaTulos: tulostaTulos };