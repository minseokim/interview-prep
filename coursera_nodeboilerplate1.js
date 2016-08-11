process.stdin.setEncoding('utf8');

if (process.stdin.isTTY) {
    process.openStdin().on (
        'data',
        function (line) {
            var input = String(line);
            console.log(yourAlgorithm(input));
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
        console.log(yourAlgorithm(String(input)));
        process.exit();
    });
}
