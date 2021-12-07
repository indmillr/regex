/abc/ // A sequence of characters
/[abc]/ // Any character from a set of characters
/[^abc]/ // Any character NOT in a set of characters
/[0-9]/ // Any character in a range of characters
/x+/ // One or more occurrences of the pattern x
/x+?/ // One or more occurrences, nongreedy
/x*/ // Zero or more occurrences
/x?/ // Zero or one occurrence
/x{2,4}/ // Two to four occurrences
/(abc)/ // A group
/a|b|c/ // Any one of several patterns
/\d/ // Any digit character
/\w/ // Any alphanumeric character
/\s/ // Any whitespace character
/./ // Any character except newlines
/\b/ // A word boundary
/^/ // Start of input
/$/ // End of input
