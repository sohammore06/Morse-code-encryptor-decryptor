// morse code and alphabets/numbers key value pairs
const crypt = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  0: "-----",
  ".":'.-.-.-',
  ",": "--..--",
  "?": "..--..",
  "'": ".----.",
  "!": "-.-.--",
  "/": "-..-.",
  "(": "-.--.",
  ")": "-.--.-",
  "&": ".-...",
  ":": "---...",
  ";": "-.-.-.",
  "=": "-...-",
  "+": ".-.-.",
  "-": "-....-",
  "_": "..--.-",
  '"': ".-..-.",
  "$": "...-..-",
  "@": ".--.-.",  
};

const reversed = Object.entries(crypt).reduce(
  (acc, [key, value]) => ((acc[value] = key), acc),
  {}
);

// encrypting from english to morse code
function encrypt() {
  let answerMorse = "";
  let english =  $("#english").val().toUpperCase();

  for (let i = 0; i < english.length; i++) {
    if (english[i] != " ") {
      answerMorse += crypt[english[i]];
    }

    answerMorse += " ";
  }

  $("#answerMorse").val(answerMorse);
}

// decrypting from morse code to english
function decrypt() {
  let answerEnglish = "";
  let morse =  $("#morse").val();

  // just if somebody used '_' instead of '-'
  morse = morse.replaceAll("_", "-");  
  morse = morse.replaceAll("  "," / ");
  morse = morse.split(" ");
  
  for (let i = 0; i < morse.length; i++) {
    if (morse[i]=='/'){
        answerEnglish += " ";
    }
    else if (morse[i]==' ' || morse[i]==''){
        continue;
    }
    else {
      answerEnglish += reversed[morse[i]];
    }    
  }
  
  $("#answerEnglish").val(answerEnglish);
}
