// 1. Konvertiere dieses Objekt in einen Array.
const student = {
  name: "Axel",
  alter: 25,
  schule: "DCI"
};
console.log(Object.entries(student));

// Ergebnis:
// [["name", "axel"], ["alter", 25], ["schule", "DCI"]]

// 2. Schreibe eine Funktion die in einem Array das zweite und das dritte element vertauscht.

// Ergebnis:
// ["Banane", "Brine", "Apfel"]
const fruechte = ["Banane", "Apfel", "Birne"];
const change=(arr)=>{
  let newElem = arr[1];
  arr[1]=arr[2];
  arr.pop();
 arr.push(newElem);
return arr;
}
console.log(change(["Banane", "Apfel", "Birne"]));

// 3. Schreibe eine Funktion die in jedem Wort in einem Array die Vokale loescht.
const namen = ["james", "kevin", "Karl"];

// Ergebnis:
// ["jms", "kvn", "Krl"]
function vocals(arr) {
console.log(arr.toString())
  
}
console.log(vocals(["james", "kevin", "Karl"]));
// 4. Schreibe eine Funktion die alle Anfangsbuchtsaben in einem Array zu einem Wort zusammenführt. 
//(Googlen hilft.)
const staedte = ["berlin", "london", "tokyo"];

// Ergebnis:
// blt

// 5. Schreibe eine Funktion die nur User zurückgibt, bei denen die Eigenschaft loggedIn true ist.
const users = [
  {
    name: "nicholas",
    loggedIn: true
  },
  {
    name: "natalia",
    loggedIn: false
  },
  {
    name: "emil",
    loggedIn: false
  },
  {
    name: "alex",
    loggedIn: true
  }
];

// Ergebnis:
/* [
    {
    name: "nicholas",
    loggedIn: true
  },
    {
    name: "alex",
    loggedIn: true
  }
] */

// 6. Schreibe eine Funktion die für jedes Wort in einem Array den ersten und den letzten Buchstaben vertauscht.
const woerter = ["If", "it", "bleeds", "we", "can", "kill", "it"];

// Ergebnis
//  ["fI", "ti", "sleedb", "ew", "nac", "lilk", "ti"]

// 7. Schreibe eine Klasse "Wohnung". Die klasse nimmt im Konstruktor die Eigenschaften "anzahlZimmer" und "quadratMeter" an. Die Klasse hat die Methode "getInfo()". Wenn diese Methode ausgeführt wird, soll der folgende Satz rauskommen: "Die Wohnung hat anzahlZimmer zimmer und ist quadratMeter qm groß."

