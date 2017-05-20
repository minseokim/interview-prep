function check_brackets(string) {
// Output Format. If the code in 𝑆 uses brackets correctly, output “Success" (without the quotes). Otherwise,
// output the 1-based index of the first unmatched closing bracket, and if there are no unmatched closing
// brackets, output the 1-based index of the first unmatched opening bracket.
    var parenStack = [];
    var currentChar;

    var balancedChecker = {
        '}' : '{',
        ']' : '[',
        ')' : '('
    };

    var openingBracketIndex = [];

    for (var i = 0; i < string.length; i++) {
        currentChar = string[i];
        if (currentChar === '(' || currentChar === '{' || currentChar === '[') {

            parenStack.push(currentChar);
            openingBracketIndex.push(i+1);

        } else if (currentChar === ')' || currentChar === '}' || currentChar === ']') {

            var lastChar = parenStack.pop();
            if (balancedChecker[currentChar] !== lastChar) {
                return i+1;
            }
            openingBracketIndex.pop();
        }
    }

    //how to get index of first unmatched opening bracket
    if (parenStack.length) {
        return openingBracketIndex.shift();
    }
    return "Success";
}

process.stdin.setEncoding('utf8');

if (process.stdin.isTTY) {
    process.openStdin().on (
        'data',
        function (line) {
            var input = String(line);
            console.log(check_brackets(input));
            process.exit();
        }
    );
}
else {
    var input = '';
    process.stdin.on('readable', function(){
        var chunk;
        while (chunk = process.stdin.read()) {
            input += chunk;
        }
    });

    process.stdin.on('end', function(){
        console.log(check_brackets(String(input)));
        process.exit();
    });
}

