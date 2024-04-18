function firstWord(str) {
if (!str || !str.includes(' ')) {
        return str;
    }

    // Find the index of the first space character
    const spaceIndex = str.indexOf(' ');

    // Extract the first word of the string using substring
    const firstWord = str.substring(0, spaceIndex);

    return firstWord;
}

// Do not change the code below

const s = prompt("Enter String:")
alert(firstWord(s));
