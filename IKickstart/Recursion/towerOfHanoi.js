const towerOfHanoi = function(n, start, mid, end) {
        if (n === 1) {
            console.log(start, '---->', end);
            return;
        } else {
            towerOfHanoi(n-1, start, end, mid);
            towerOfHanoi(1, start, mid, end);
            towerOfHanoi(n-1, mid, start, end);
        }
};

console.log(towerOfHanoi(3, 'a', 'b', 'c'));