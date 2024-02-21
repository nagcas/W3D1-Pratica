// verifico se il mio file javaScript è legato correttamente alla mia pagina index.html
console.log("It's working!");

/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// funzione crazySum che riceve due parametri numerici interi
function crazySum(num1, num2) {
    // inizializzo la variabile somma è assegno il valore a 0
    let somma = 0; 
    // verifico la condizione se i due numeri num1 e num2 sono uguali
    if (num1 === num2) {
        // assegno alla variabile la somma dei numeri moltiplicata x 3 (se sono uguali)
        somma = (num1 + num2) * 3;
    } else {
        // assegno alla variabile la somma (altrimenti)
        somma = num1 + num2;
    }
    // restituisco il valore somma
    return somma;
};

console.log("Esercizio n. 1");
let num1 = 10;
let num2 = 10;
// richiamo la funzione crazySum e restituisce il valore da visualizzare in console
let somma = crazySum(num1, num2);
console.log("La funzione crazySum restituisce il valore => " + somma);


/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) 
 o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// funzione boundary che riceve come parametro un numero intero
function boundary(number) {
    // condizione se il numero è compreso tra 20 e 100 incluso oppure se è uguale a 400
    if ((number > 20 && number <= 100)  || number === 400) {
        // restituisco vero
        return true;
    } else {
        // altrimenti restituisco false
        return false;
    }
};

console.log("Esercizio n. 2");
let value = 400;
// richiamo la funzione verify e assegno il suo risultato
let verify = boundary(value);
console.log("Il valore inserito " + value + " è => " + verify);


/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// funzione reverseString riceve come parametro una stringa di caratteri
function reverseString(parola) {
    // inizializzo e assegno una stringa vuoto
    let newString = "";
    // ciclo la parola dall'ultima lettera alla prima esclusa
    for (let i = parola.length - 1; i >= 0; i--) {
        // e assegno alla nuova stringa le lettere 
        newString += parola[i];
    }
    // restituisco la nuova stringa al contrario
    return newString; 
};

console.log("Esercizio n. 3");
let parola = "EPICODE";
// richiamo la funzione reverseTest e ne restituisco il valore alla variabile
let reverseTest = reverseString(parola);
console.log(parola + " => " + reverseTest);


/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// funzione upperFirst che riceve come parametro una frase
function upperFirst(frase) {
    // sconpone con la funzione split utilizzano lo spazio tra le parole per creare un nuovo array di parole 
    let newFrase = frase.split(" ");
    // inizializzo un nuovo array vuoto
    let newWords = [];
    // eseguo un ciclo for sulle singole parole contenute nell'array splittato
    for (let i = 0; i < newFrase.length; i++) {
        // assegno alla variabile la prima lettera della parola e la rendo maiuscola
        let newLettera = newFrase[i].charAt(0).toUpperCase();
        // assegno alla variabile le restante lettere della parola escludendo la prima lettera
        let cuttedParola = newFrase[i].slice(1);
        // assegno alla variabile la somma tra due stringhe lettera iniziale maiuscola + la restante parte della parola
        let finalParola = newLettera + cuttedParola;
        // assegno al mio array inizializzato, le parole finali  
        newWords.push(finalParola);
    }
    // restituisce un nuovo array contenente le parole finali della frase con la prima lettera in maiuscolo
    return newWords;
};

console.log("Esercizio n. 4");
let frase = "hello world";
// richiamo la funzione upperParola e ne assegna il valore alla variabile
let upperParola = upperFirst(frase);
// stampo su console l'array separando le parole con la funzione join e il parametro spazio vuoto
console.log(upperParola.join(" "));


/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// funzione giveMeRandom che riceve come parametro un valore numerico intero
function giveMeRandom(n) {
    // inizializzo un array vuoto
    let nArray = [];
    // ciclo sul valore inserito dall'user
    for (let i = 0; i < n; i++) {
        // assegno al nuovo array il valore random da 0 a 10 per n volte
        nArray.push(Math.floor(Math.random() * 10));
    }
    // restituisce il nuovo array contenente n numeri random da 0 a 10 
    return nArray;
};

console.log("Esercizio n. 5");
// richiamo la funzione e ne assegno il valore alla variabile
let lista = giveMeRandom(10);
console.log(lista);


//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// funzione calcola l'area del rettangolo 
function area(l1, l2) {
    // restituisce la moltiplicazione base x altezza
    return l1 * l2;
};

console.log("Esercizio Extra n. 1");
let basic = 10;
let height = 20;
// richiamo la funzione e ne assegno il valore alla variabile
let areaRett = area(basic, height);
console.log("Area del rettangolo => " + areaRett);


/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// funzione che calcola la differenza assoluta tra un numero inserito dall'user e il valore 19
function crazyDiff(n) {
    let diffAssoluta = Math.abs(n - 19);
    // se la differenza assoluta è > di 19 allora si verifica la condizione e il risultato viene moltiplicato per 3
    if (diffAssoluta > 19) {
        // restituisce la differenza moltiplicata x 3
        return diffAssoluta * 3;
    }
    return diffAssoluta;
};

console.log("Esercizio Extra n. 2");
let x = 9;
// richiamo la funzione e ne assegno il valore
let crazyResult = crazyDiff(x);
console.log("Differenza assoluta => " + crazyResult);


/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia
 proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// funzione che riceve come parametro una stringa
function codify(str) {
    // inizializzo e assegno la stringa "code" alla variabile
    let str1 = "code";
    // inizializzo e assegno alla variabile la stringa vuota
    let strFinal = "";
    // verifico con la funzione slice se le prime 4 lettere contengono la parola "code"
    if (str.slice(0, 4) === str1) {
        // se la parola "code" è presente nella stringa inziale restituisco la stessa stringa senza modifiche
        console.log("=> code è già presente ...");
        return str;
    } else {
        // altrimenti eseguo la funzione concat per aggiungere la stringa "code" 
        strFinal = str1.concat(str);
        // restituisco la stringa codificata
        console.log("=> aggiungo code ...");
        return strFinal;
    }
};

console.log("Esercizio Extra n. 3");
let str = "gianluca";
// richiamo la funzione codify e assegno il suo risultato alla variabile 
let strFinal = codify(str);
console.log(strFinal);


/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// funzione che controlla il valore inserito dall'user e verifica se multiplo di 3 o di 7
function check3and7(n) {
    // verifica la condizione se multiplo di 3 o di 7 e ne restituisce true o false
    if (n % 3 === 0 || n % 7 === 0) {
        // restituisce vero
        return true;
    } else {
        // restituisce false se le condizioni non sono soddisfatte
        return false; 
    }
};

console.log("Esercizio Extra n. 4");
let n = 15;
// richiamo la variabile e ne assegno il valore
let nVerify = check3and7(n);
console.log("Il numero intero " + n + " è multiplo di 3 o 7 => " + nVerify);

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// funzione che accetta una stringa inserita dall'user
function cutString(stringa) {
    // crea una nuova stringa tagliando il primo carattere e l'ultimo carattere e ne restituisce il nuovo valore
    let newStringa = stringa.slice(1, (stringa.length - 1));
    return newStringa;
};

console.log("Esercizio Extra n. 5");
let stringa = "gianluca";
// richiamo la funzione e ne assegno il nuovo valore
let cuttedStringa = cutString(stringa);
console.log(cuttedStringa);
