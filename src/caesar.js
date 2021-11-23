// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift > 25 || shift < -25) return false;
    let inputArr = input.toLowerCase().split(``);

    function isCharacterALetter(char) {
      return char.toLowerCase() != char.toUpperCase();
    }
    for (let ltr in inputArr) {
      if (isCharacterALetter(inputArr[ltr])) {
        let currentLetterCode = inputArr[ltr].charCodeAt(0);
        encode
          ? (inputArr[ltr] = String.fromCharCode(currentLetterCode + shift))
          : (inputArr[ltr] = String.fromCharCode(currentLetterCode - shift));
        if (inputArr[ltr].charCodeAt(0) > 122)
          inputArr[ltr] = String.fromCharCode(inputArr[ltr].charCodeAt(0) - 26);
        if (inputArr[ltr].charCodeAt(0) < 97)
          inputArr[ltr] = String.fromCharCode(inputArr[ltr].charCodeAt(0) + 26);
      }
    }
    return inputArr.join("");
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
