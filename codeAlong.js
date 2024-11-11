console.log("GOOOOD MORNING FJSX24!!!");

// JSON, Grundläggande Syntax och Exempel:

// 1. Nyckel/Värde-par

// JSON representerar data i form av nyckel/värde-par:

// -------------------------------------------------------------
// 2. Arrayer

// Arrayer är listor över värden:

// -------------------------------------------------------------
// 3. Objekt

// Objekt är samlingar av nyckel/värde-par:

// -------------------------------------------------------------
// 4. Datatyper

// Strängar: Omslutna av dubbla citattecken:

// Nummer: Heltal eller flyttal utan citattecken:

// Booleaner: Sant eller falskt:

// Null: Representerar inget värde:

// -------------------------------------------------------------
// 5. Vanliga Misstag:

// 5A.Använder enkla citattecken istället för dubbla:
// ❌ Fel:

// ✅ Rätt:

// -------------------------------------------------------------
// 5B. Saknade kommatecken mellan nyckel/värde-par:
// ❌ Fel:

// ✅ Rätt:

// -------------------------------------------------------------
// 5C. Sista kommatecknet efter det sista paret:
// ❌ Fel:

// ✅ Rätt:

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
//     name: 'Olle',
//     age: 30,
//     greetings: function() {
//       console.log('Hej!');
//     }
//   };

// -------------------------------------------------------------
// Exempel på motsvarande JSON:

// {
//     "namn": "Olle",
//     "ålder": 30
//   }

// -------------------------------------------------------------
// Konvertering mellan JSON och JavaScript

// JSON.parse(): Konverterar en JSON-sträng till ett JavaScript-objekt:

// JSON.stringify(): Konverterar ett JavaScript-objekt till en JSON-sträng:

// Demo:

// -------------------------------------------------------------
// Säkerhetshänsyn vid hantering av JSON-data

// Validera inkommande data:

// Se till att data är i förväntat format.

// Använd try-catch vid parsing:

// -------------------------------------------------------------
