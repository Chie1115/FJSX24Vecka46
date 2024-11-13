// console.log("localstorage");
// Introduktion till LocalStorage

// Vad är LocalStorage?

// En webbläsarbaserad lagringslösning som kan lagra upp till 5MB data.
// Data lagras som nyckel-värde-par i strängformat.
// --------------------------------------------------------------

// Vanliga metoder:

// localStorage.setItem(key, value)
// localStorage.getItem(key)
// localStorage.removeItem(key)
// localStorage.clear()
// --------------------------------------------------------------
// Begränsningar och säkerhetsaspekter:

// Endast strängar kan lagras.
// Data är tillgänglig över alla flikar och sessioner inom samma domän.
// Inte lämpligt för känslig information.

// --------------------------------------------------------------
// --------------------------------------------------------------
// --------------------------------------------------------------
// Hämta referenser till HTML-elementen

const nameInput = document.getElementById("nameInput");
const saveButton = document.getElementById("saveButton");
const deleteButton = document.getElementById("deleteButton");
const greeting = document.getElementById("greeting");

// --------------------------------------------------------------
// Lägg till händelselyssnare

saveButton.addEventListener("click", saveName);

deleteButton.addEventListener("click", deleteName);

// --------------------------------------------------------------
// Definiera Funktionerna för att Spara och Ta Bort Namn:

// Spara namn funktion:

function saveName() {
  let name = nameInput.value;

  if (name) {
    localStorage.setItem("userNameValue", name);

    displayGreeting();

    nameInput.value = "";
  } else {
    // console.log("Var snäll och fyll i ett namn i input fältet");
    greeting.textContent = "Var snäll och fyll i ett namn i input fältet";
  }
}

// --------------------------------------------------------------
// Funktionen för att Ta Bort Namnet

function deleteName() {
  const storedName = localStorage.getItem("userNameValue");

  if (storedName) {
    localStorage.removeItem("userNameValue");
    greeting.textContent = `Du har tagit bort ${storedName}`;
  } else {
    greeting.textContent = "Det finns inget namn sparat som du kan ta bort";
  }
}

// --------------------------------------------------------------
// Funktion för att Visa Hälsningen

function displayGreeting() {
  const storedName = localStorage.getItem("userNameValue");

  if (storedName) {
    greeting.textContent = `Välkommen till min hemsida ${storedName}`;
  } else {
    greeting.textContent = "";
  }
}

//   Förklaring:

//   Vi hämtar namnet från LocalStorage.
//   Om namnet finns, uppdaterar vi hälsningen med användarens namn.
//   Om inte, rensar vi hälsningen.
// --------------------------------------------------------------
// anropa hälsningen när sidan laddas
displayGreeting();
// --------------------------------------------------------------

// TESTA APPLIKATIONEN!!!

// --------------------------------------------------------------
// Förklaring av LocalStorage

// Vad är LocalStorage?

// En del av webbläsarens Web Storage API.
// Låter oss lagra data i nyckel-värde-par i webbläsaren.
// Data i LocalStorage kvarstår mellan sidladdningar och stängningar av webbläsaren.

// Viktiga Metoder:

// localStorage.setItem(key, value):
// Sparar ett värde under en specifik nyckel.
// localStorage.getItem(key):
// Hämtar värdet som är sparat under den specifika nyckeln.
// localStorage.removeItem(key):
// Tar bort värdet som är sparat under den specifika nyckeln.
// localStorage.clear();
// Rensar all data i LocalStorage.

// Viktigt att Notera:

// All data lagras som strängar.
// Om du behöver lagra objekt eller arrayer måste du konvertera dem till strängar med JSON.stringify().
// När du hämtar data måste du konvertera tillbaka med JSON.parse().
