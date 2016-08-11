var fs = require('fs');

process.stdin.setEncoding('utf8');

if (process.stdin.isTTY) {
    fs.readFile('input21.txt', {encoding: 'UTF-8'},     function(err, data) {
    if (err) throw err;
    var input = data.split('\n');
    yourAlgorithm(input[0], input[1]);
    process.exit();
});
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
        input = String(input).split('\n');
        yourAlgorithm(input[0], input[1]);
        process.exit();
    });
}