/*
TYPESCRIPT

- Keszits alprogramot, ami ...
    -eldonti hogy a parameterul kapott szamok tombben van e negativ szam
    -egy parameterul kapott sugarbol megallapitja a kor teruletet es keruletet
        -Tuple-t alkalmazz
        -kor kerulete 2 * sugar *PI
        -kor terulete sugar * sugar *PI



Keszits interface-t Auto neven
    -Gyarto (szoveg)
    -Tipus (szoveg)
    -Hengerurtartalom (szam)
    -BenzinesE (logikai)
*/
//eldonti hogy a parameterul kapott szamok tombben van e negativ szam
function VanENegativ(szamok) {
    var i = 0;
    while (i < szamok.length && !(szamok[i] < 0)) {
        i++;
    }
    return i < szamok.length;
}
/*egy parameterul kapott sugarbol megallapitja a kor teruletet es keruletet
        -Tuple-t alkalmazz
        -kor kerulete 2 * sugar * PI
        -kor terulete sugar * sugar * PI
*/
function KorKerTer(r) {
    var ker = 2 * Math.PI * r;
    var ter = r * r * Math.PI;
    return [ker, ter];
}
console.log(VanENegativ([5, 12, 0, 23, -1, 54]));
console.log(VanENegativ([5, 12, 0, 23, 54]));
console.log(KorKerTer(3));
/*
- Keszits publikus GitHub repositorit a sajat felhasznaloi fiokodban
- Indits Git BASH-t, es a jelenlegi TS projektedben inicializalj git-et
- A lokalis repo-t kosd ossze az online (github-os) repoddal
- Toltsd fel a jelenlegi allapotot a github-ra

TS!!
- Keszits alprogramot, ami kivalasztja egy auto tombbol a legkisebb hengerurtartalmu autot
- Keszits alprogramot, ami megadja a parameterul kapott auto tombbol a benzinesek darabszamat
- A valtoztatasokat toltsd fel a github repodba
*/
function MinAuto(autok) {
    var minAuto = autok[0];
    for (var i = 1; i < autok.length; i++) {
        if (autok[i].hengerurtartalom < minAuto.hengerurtartalom) {
            minAuto = autok[i];
        }
    }
    return minAuto;
}
function BenzinesDb(autok) {
    var db = 0;
    for (var i = 0; i < autok.length; i++) {
        if (autok[i].benzineE == true) {
            db++;
        }
    }
    return db;
}
var a1 = {
    gyarto: "Opel",
    tipus: "Corsa",
    hengerurtartalom: 1200,
    benzineE: true
};
var a2 = {
    gyarto: "Volkswagen",
    tipus: "Polo",
    hengerurtartalom: 1400,
    benzineE: false
};
var a3 = {
    gyarto: "Skoda",
    tipus: "Octavia",
    hengerurtartalom: 1600,
    benzineE: true
};
var autok = [a1, a2, a3];
console.log(MinAuto(autok));
console.log(BenzinesDb(autok));
