// using the Test Method (Test ONLY returns True/False!!)
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);

// match Literal Strings
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/;
let result = waldoRegex.test(waldoIsHiding);

// match a Literal String with Different Possibilities
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);

// ignore Case while matching
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // 'i' flag
let result = fccRegex.test(myString);

// extract matches
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex);

// find more than the first match
let twinkleStar = "Twinkle, twinkle, little star.";
let starRegex = /twinkle/gi; // 'g' flag
let result = twinkleStar.match(starRegex);

// match anything with Wildcard Period
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
let result = unRegex.test(exampleStr);

// match single character with multiple possibilities
let quoteSample =
  "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
let result = quoteSample.match(vowelRegex);

// match letters of the alphabet
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi;
let result = quoteSample.match(alphabetRegex);

// match Numbers AND Letters of the alphabet
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi;
let result = quoteSample.match(myRegex);

// match single characters not specified
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi;
let result = quoteSample.match(myRegex);
