console.log("GOOOOD MORNING FJSX24!!!");

// JSON, Grundläggande Syntax och Exempel:

// 1. Nyckel/Värde-par

// JSON representerar data i form av nyckel/värde-par:

// Grundläggande syntax:
// {
//     "name": "Mandus", //string
//     "age": 39, //number
//     "isStudent": false, //boolean
//     "courses": ["html", "css", "vanilla JS"], //array
//     "adress": {
//         "street": "Folkungatan",
//         "city": "Stockholm"
//     }, //object
//     "isTeacher": true //boolean
// }

// -------------------------------------------------------------
// 2. Arrayer

// Arrayer är listor över värden:
// {
//     "fruits": ["äpple", "melon", "orange"],
//     "numbers": [1, 2, 33]
// }

// -------------------------------------------------------------
// 3. Objekt

// Objekt är samlingar av nyckel/värde-par:

// {
//     "person": {
//         "name": "Hans",
//         "age": 2 //Behöver man , här också?
//     },
//     "kanManGöraNull": null
// }

// -------------------------------------------------------------
// 5. Vanliga Misstag:

// 5A.Använder enkla citattecken istället för dubbla:
// ❌ Fel:
// {
//     'name': "Hans"
// }

// ✅ Rätt:
// {
//     "name": "Hans"
// }

// -------------------------------------------------------------
// 5B. Saknade kommatecken mellan nyckel/värde-par:
// ❌ Fel:
// {
//     "name": "Hans"
//     "age": 3
// }

// ✅ Rätt:
// {
//     "name": "Hans",
//     "age": 3
// }

// -------------------------------------------------------------
// 5C. Sista kommatecknet efter det sista paret:
// ❌ Fel:
// {
//     "name": "Hans",
//     "age": 3,
// }

// // ✅ Rätt:
// {
//     "name": "Hans",
//     "age": 3
// }

// -------------------------------------------------------------
// -------------------------------------------------------------
// -------------------------------------------------------------
// Likheter och Skillnader JSON och JavaScript-objekt:

// Syntaxlikheter:

// Båda använder nyckel/värde-par.
// Liknande struktur för arrayer och objekt.

// Skillnader:

// JSON:
// Nycklar måste vara strängar omslutna av dubbla citattecken.
// Tillåter inte funktioner eller odefinierade värden.

// JavaScript-objekt:
// Nycklar kan vara utan citattecken.
// Kan innehålla funktioner, undefined och andra komplexa typer.

// -------------------------------------------------------------
// Exempel på JavaScript-objekt:

// const person = {
//   name: "Olle",
//   age: 30,
//   greetings: function () {
//     console.log("Hej!");
//   },
// };

// -------------------------------------------------------------
// Exempel på motsvarande JSON:

// {
//     "namn": "Olle",
//     "ålder": 30
//   }

// -------------------------------------------------------------
// Konvertering mellan JSON och JavaScript

// JSON.parse(): Konverterar en JSON-sträng till ett JavaScript-objekt:

// const jsonStr = '{"name": "Mandus", "age": 39}';

// console.log("jsonStr", typeof jsonStr);

// const obj = JSON.parse(jsonStr);

// console.log("obj", typeof obj);

// JSON.stringify(): Konverterar ett JavaScript-objekt till en JSON-sträng:

// const obj = {
//   name: "Hans",
//   age: 4,
// };
// console.log("obj", typeof obj);

// const jsonStr = JSON.stringify(obj);
// console.log("jsonStr", typeof jsonStr);

// Demo:
// const jsonStr = '{"name": "Mandus", "age": 39}';
// let jsonStr22222222222;

// -------------------------------------------------------------
// Säkerhetshänsyn vid hantering av JSON-data

// Validera inkommande data:

// Se till att data är i förväntat format.

// Använd try-catch vid parsing:

// try {
//   const obj = JSON.parse(jsonStr);
//   console.log("obj", obj);
// } catch (error) {
//   console.log("error", error);
// }

// -------------------------------------------------------------
