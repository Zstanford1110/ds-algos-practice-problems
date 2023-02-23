// Frequency Counter Problem Simple Example

// Assumptions:
// Inputs will always be single words w/ no spaces or punctuation
// Inputs will always be lowercase
// Inputs will contain only letters

//function validAnagrams(str1, str2) {
// check to make sure inputs are the same length, if not return false
// create two empty objects to store character frequencies
// charFrequency1 and charFrequency2
// calculate the char frequency in str1
// for loop to iterate through entire string counting each character
// if key exists for a char, increment its value if not initialize it to 1 and add it as a key
// calculate the char frequency in str2
// for loop to iterate through entire string counting each character
// if key exists for a char, increment its value if not initialize it to 1 and add it as a key
// compare char frequencies for str1 and str2 to each other
// If a char frequency is found in one frequency object and not the other, return false
// Return false if any char frequency is not equal
// return true if we made it past our previous checks
//}

function validAnagrams(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    let charFrequency1 = {};
    let charFrequency2 = {};

    // start with str1
    for (let char of str1) {
        charFrequency1[char] = ++charFrequency1[char] || 1;
    }

    // now str2
    for (let char of str2) {
        charFrequency2[char] = ++charFrequency2[char] || 1;
    }

    // compare frequencies of str1 and str2
    for (let key in charFrequency1) {
        if (!(key in charFrequency2)) {
            return false;
        }
        if (charFrequency1[key] !== charFrequency2[key]) {
            return false;
        }
    }

    return true;
}