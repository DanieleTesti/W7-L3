//LOCALSTRORAGE -> Permanenza dei dati finche non li si cancella
//SESSIONSTORAGE ->Permanenza dei dai finche la finestra o il tab riname aperto

localStorage.setItem("theme", "dark");

let currentTheme = localStorage.getItem("theme");
console.log(currentTheme);

localStorage.removeItem("theme");
let currentThemeNow = localStorage.getItem("theme"); //<-- Ora il theme non c'è piu
console.log(currentThemeNow);

let teacher = {
  name: "Stefano",
  surname: "Casasola",
};

localStorage.setItem();
