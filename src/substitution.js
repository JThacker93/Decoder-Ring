// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    if (
      !alphabet ||
      alphabet.length !== 26 ||
      alphabet
        .toLowerCase()
        .split("")
        .sort()
        .join("")
        .match(/(.)\1+/g)
    ) {
      return false;
    }

    const abc = "abcdefghijklmnopqrstuvwxyz";

    return encode
      ? input
          .toLowerCase()
          .replace(/[a-z]/g, (letter) => alphabet[abc.indexOf(letter)])
      : input
          .toLowerCase()
          .replace(
            /[a-z!-\/:-@[-`{-~]/g,
            (letter) => abc[alphabet.indexOf(letter)]
          );
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
