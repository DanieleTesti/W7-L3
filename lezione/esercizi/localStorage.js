const textAreaReference = document.getElementById("text");
const saveReference = document.getElementById("save-button");
const loadReference = document.getElementById("load-button");
const resetReference = document.getElementById("reset-button");

const reset = function () {
  textAreaReference.value = "";
  console.log("textArea vuota");
};

const save = function () {
  //prende il contenuto e lo salva nel local storage
  let content = textAreaReference.value;
  localStorage.setItem("savedText", content);
  console.log("Contenuto salvato");
};

const load = function () {
  //recupero ilo precedente contenuto della textArea
  let savedContent = localStorage.getItem("savedText");
  textAreaReference.value = savedContent;
  console.log("Contenuto caricato correttamente");
};

//ricaricamento automatico del testo salvato
// window.onload = function () {
//   load();
// };
