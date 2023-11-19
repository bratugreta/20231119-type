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

function VanENegativ(szamok:number[]):boolean{
        var i:number = 0;

    while(i < szamok.length && !(szamok[i] < 0)){
        i++;
    }
    return i < szamok.length;
}

/*egy parameterul kapott sugarbol megallapitja a kor teruletet es keruletet
        -Tuple-t alkalmazz
        -kor kerulete 2 * sugar * PI
        -kor terulete sugar * sugar * PI
*/

function KorKerTer(r:number):[number, number]{
    var ker:number = 2 * Math.PI * r;
    var ter:number = r * r * Math.PI;
    return [ker, ter]
}

console.log(VanENegativ([5, 12, 0, 23, -1, 54]));
console.log(VanENegativ([5, 12, 0, 23, 54]));
console.log(KorKerTer(3));

/*
Keszits interface-t Auto neven
    -Gyarto (szoveg)
    -Tipus (szoveg)
    -Hengerurtartalom (szam)
    -BenzinesE (logikai)
*/

interface Auto{
    gyarto:string;
    tipus:string;
    hengerurtartalom:number;
    benzineE:boolean;
}

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

var autok:Auto[] = [];

function MinÍAuto(autok:Auto[]):Auto{
    var minAuto:Auto = autok[0];


    for(var i:number = 0; i < autok.length; i++){
        if(autok[i].hengerurtartalom < minAuto.hengerurtartalom){
            minAuto = autok[i];
        }
    }
    return minAuto;
}

function MennyiBenzines(autok:Auto[]):number{
    var benzinesDb:number = 0;

    for(var i:number = 0; i < autok.length; i++){
        if(autok[i].benzineE == true){
            benzinesDb++;
        }
    }
    return benzinesDb;
}