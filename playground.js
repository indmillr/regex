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

// match characters that occur one or more times
let difficultSpelling = "Mississippi";
let myRegex = /s+/gi;
let result = difficultSpelling.match(myRegex);

// match characters that occur Zero or More Times
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewiwRegex = /A*/;
let result = chewieQuote.match(chewiwRegex);

// Find characters with Lazy Matching
let text = "<h1>Winter is coming</h1>";
let myRegex = /<[a-z0-9]*?>/gi;
let result = text.match(myRegex);

// Find one or more criminals in a hunt
let reCriminals = /C+/;

// Match Beginning String Patterns
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;
let result = calRegex.test(rickyAndCal);

// Match Ending String Patterns
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/;
let result = lastRegex.test(caboose);

// Match ALL letters and numbers
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g;
let result = quoteSample.match(alphabetRegexV2).length;

// Match everything EXCEPT letters and numbers
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g;
let result = quoteSample.match(nonAlphabetRegex).length;

// Match ALL numbers
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g;
let result = movieName.match(numRegex).length;

// Match all NON-numbers
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g;
let result = movieName.match(noNumRegex).length;

// Restrict Possible Usernames
// 1. Username can only use alpha-numeric characters
// 2. The only numbers in the username have to be at the end.
// 3. There can be a Zero or more at the end.
// 4. Username cannot start with a number
// 5. Username letters can be lowercase and uppercase
// 6. Usernames have to be at least two characters long.
// 7. A two-character username can onlyu use alphabet letters as characters.
let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
// ^ -- start of input
// [a-z] -- first character is a letter
// [a-z]+ -- following characters are letters
// \d*$ -- input ends with 0 or more digits
// | -- OR
// ^[a-z] -- first character is a letter
// \d\d+ -- following characters are 2 or more digits
// $ -- end of input
let result = userCheck.test(username);

// Match Whitespace
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g;
let result = sample.match(countWhiteSpace);

// Match NON-whitespace characters
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g;
let result = sample.match(countNonWhiteSpace);

// Specify Upper and Lower number of matches
let ohStr = "Ohhh no";
let ohRegex = /oh{3,6}\sno/i;
let result = ohRegex.test(ohStr);

// Specify ONLY the Lower number of matches
let haStr = "Hazzzzah";
let haRegex = /haz{4,}ah/i;
let result = haRegex.test(haStr);

// Specify EXACT number of matches
let timStr = "Timmmmber";
let timRegex = /tim{4}ber/i;
let result = timRegex.test(timStr);

// Check for ALL or NONE
let favWord = "favorite";
let favRegex = /favou?rite/;
let result = favRegex.test(favWord);

// Positive and Negative Lookahead
let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/;
let result = pwRegex.test(sampleWord);

// Check for Mixed Grouping of Characters
let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor).*Roosevelt/;
let result = myRegex.test(myString);

// Reuse Patterns Using Capture Groups
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/;
let result = reRegex.test(repeatNum);

// Use Capture Groups to Search and Replace
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/;
let replaceText = "$3 $2 $1";
let result = str.replace(fixRegex, replaceText);

// Remove Whitespace from Start to End
let hello = "   Hello, World!   ";
let wsRegex = /^\s+|\s+$/g;
let result = hello.replace(wsRegex, "");
