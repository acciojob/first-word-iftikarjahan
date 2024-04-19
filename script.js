function firstWord(str) {
if (!str || !str.includes(' ')) {
        return str;
    }

    // Find the index of the first space character
    let strr=str.trim();
    // console.log(strr);
    const spaceIndex = strr.indexOf(' ');
    // console.log(spaceIndex);

    // Extract the first word of the string using substring
    if(spaceIndex==-1){
      return strr;
    }
    const firstWord = strr.slice(0, spaceIndex);

    return firstWord;
}
// Do not change the code below

const s = prompt("Enter String:")
alert(firstWord(s));
