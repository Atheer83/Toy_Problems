	// Given a string, swap the case for each of the letters.
	// IbrAHiM --> iBRahIm
	// ToYPRoblEm --> tOyprOBLeM
	function swap(input){
		var	newStr = "";
		for (var i = 0; i < input.length; i++) {
			if (input[i].charCodeAt() < 91 ) {
				newStr = newStr + input[i].toLowerCase();
			} 
			if (input[i].charCodeAt() > 91 )
			newStr = newStr + input[i].toUpperCase()
		}
		return newStr;
	}