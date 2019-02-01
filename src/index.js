function translatePigLatin(str) {
  let regex = /a|e|i|o|u/g;
  if (str[0].match(regex)) {
    return str + "way";
  } else if (str.match(regex) === null) {
    return str + "ay";
  } else {
    let vowelIndex = str.indexOf(str.match(regex)[0]);
    let wordStart = str.substr(0, vowelIndex);
    return str.substr(vowelIndex) + wordStart + "ay";
  }
}

translatePigLatin("asdfg");
