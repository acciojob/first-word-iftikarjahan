function firstWord(s) {
if(s.length==0){
	return "";
}
	let newStr=s.trim();
	for(let i=0;i<newStr.length;i++){
		if(newStr[i]==" "){
			return newStr.slice(0,i);
		}
	}
}

// Do not change the code below

const s = prompt("Enter String:")
alert(firstWord(s));
