// This time no story, no theory. The examples below show you what do you need, write a function to accomplich that
// Examples:
// accum("abcd");    // "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    // "C-Ww-Aaa-Tttt"

function counting (n, s) {
		if (s === 1) {
			return n;
		} return n + counting(n, s-1);
	}

    function accum(input){
        var str = input[0].toUpperCase();
        	for (var i = 0; i < input.length; i++) {
        		if (i > 0) {
        		str = str + "-" + input[i].toUpperCase() + counting(input[i], i).toLowerCase() ;

        		}
        		//str = str + input[i].toUpperCase();
        	}
        return str;
    }