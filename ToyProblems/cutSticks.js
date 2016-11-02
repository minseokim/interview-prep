function cutSticks(lengths) {

    //sorts list, finds minimum and returns its value and index
    var findMin = function(list) {
        list.sort(function(a,b) {
          return a-b;
        });
        var minSoFar = 0;

        for (var i = 0; i < list.length; i++) {
            if (list[i] > minSoFar) {
                minSoFar = list[i];
                break;
            }
        }

        return [minSoFar, i];
    }

    var result = [];

    var cut = function(lengths) {
        var newSmallest = findMin(lengths)[0];
        var newSmallestIndex = findMin(lengths)[1];
        var cutCount = 0;

        if (newSmallest === 0) {
            return;
        }

        for (var i = 0; i < lengths.length; i++) {
            //Cut only if current length is greater or equal to newSmallest and if it's greater or equal to 1
            if (lengths[i] >= newSmallest && lengths[i] >= 1) {
                lengths[i] -= newSmallest;
                cutCount += 1;
            }
        }

        if (cutCount === 0) {
            return;
        } else {
            result.push(cutCount);
            cut(lengths);
        }
    }

    cut(lengths);

    return result;
}