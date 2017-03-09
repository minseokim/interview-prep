function printEven(list) {
    for (var i = 0; i < list.length; i++) {
        if (list[i] % 2 === 0) {
            console.log(list[i]);
        }
    }
}

// [ {a:b}, {a:b}, {a:c} ]   //{a:b}
function printDuplicateObjects(list) {
    var objectsSeenSoFar = new Map();
    var currentObject;

    for (var i = 0; i < list.length; i++) {
        currentObject = list[i];
        if (objectsSeenSoFar.get(currentObject)) {
            console.log(objectsSeenSoFar.get(currentObject));
        } else {
            objectsSeenSoFar.set(currentObject, true);
        }
    }
}

addOne([1, 2, 3]) -> [1, 2, 4]
addOne([0]) -> [1]
addOne([5, 6, 7]) -> [5, 6, 8]
addOne([9, 9]) -> [1, 0, 0]

//[-1, 0, 1]

function addOne(list) {
    //[0, 0]
    //[1,0]
    //[5,7]
    //[1,0,0,0]
    //1, 0, 0

    var oneLeft = false;

    for (var i = list.length-1; i >= 0; i--) {
        if (list[i] === 9) {
            list[i] = 0;
            oneLeft = true;
            if (i === 0) {
                list.shift(1);
                break;
            }
        } else {
            if (i === list.length-1) {
                list[i]+=1;
                break;
            }

            if (oneLeft) {
               if (i === 0) {
                   list.shift(1);
               } else {
                   list[i]+=1;
                   break;
               }
            }
        }
    }
    return list;
}