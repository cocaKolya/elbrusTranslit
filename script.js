let button = document.querySelector("#submit");
let input = document.querySelector("input");

input.onkeypress = function (e) {
  if (e.key == "Enter") inputToVocab();
};

button.addEventListener("click", inputToVocab);

function inputToVocab() {
  let leftRow = document.querySelector(".left");
  let phraseRu = document.createElement("li");
  phraseRu.innerText = input.value;
  leftRow.appendChild(phraseRu);
  if (phraseRu.scrollWidth > phraseRu.clientWidth) {
    phraseRu.className = "long-phrase";
  }
  let rightRow = document.querySelector(".right");
  let phraseEn = document.createElement("li");
  phraseEn.innerText = translit(input.value);
  rightRow.appendChild(phraseEn);
  if (phraseEn.scrollWidth > phraseEn.clientWidth) {
    phraseEn.className = "long-phrase";
  }
  document.querySelector("input").value = "";
}

function translit(word) {
  var transPhrase = "";
  var vocabulary = {
    а: "a",
    б: "b",
    в: "v",
    г: "g",
    д: "d",
    е: "e",
    ё: "e",
    ж: "zh",
    з: "z",
    и: "i",
    й: "y",
    к: "k",
    л: "l",
    м: "m",
    н: "n",
    о: "o",
    п: "p",
    р: "r",
    с: "s",
    т: "t",
    у: "u",
    ф: "f",
    х: "h",
    ц: "c",
    ч: "ch",
    ш: "sh",
    щ: "sch",
    ь: "",
    ы: "y",
    ъ: "",
    э: "e",
    ю: "yu",
    я: "ya",

    А: "A",
    Б: "B",
    В: "V",
    Г: "G",
    Д: "D",
    Е: "E",
    Ё: "E",
    Ж: "Zh",
    З: "Z",
    И: "I",
    Й: "Y",
    К: "K",
    Л: "L",
    М: "M",
    Н: "N",
    О: "O",
    П: "P",
    Р: "R",
    С: "S",
    Т: "T",
    У: "U",
    Ф: "F",
    Х: "H",
    Ц: "C",
    Ч: "Ch",
    Ш: "Sh",
    Щ: "Sch",
    Ь: "",
    Ы: "Y",
    Ъ: "",
    Э: "E",
    Ю: "Yu",
    Я: "Ya",
  };

  for (let i = 0; i < word.length; ++i) {
    if (vocabulary[word[i]] == undefined) {
      transPhrase += word[i];
    } else {
      transPhrase += vocabulary[word[i]];
    }
  }
  return transPhrase;
}

let navButton = document.querySelector("#nav-btn");
navButton.addEventListener("click", function () {
  let navBar = document.querySelector("#nav-bar");
  navBar.classList.toggle("hidden");
});

let clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", function () {
  var elements = document.getElementsByTagName("li");
  while (elements.length > 0) elements[0].remove();
});
