/*

Given two arrays of integers, write a method that returns their common elements

A: [4, 3, 2, 9, 3]
B: [6, 7, 5, 4, 3, 3, 3]

result: [4, 3, 3]

{
   4 : 0,
   3:  0,
   2 : 1,
   9 : 1
}

//Case 1 : No common elements
listA : [1,2,3]
listB : [4,5,6]

listA : [1,2,3,4]
listB : [1,2,3,4]


*/

function findCommonElems(listA, listB) {

    const elementsCount = {};
    const result = [];

    listA.forEach(function(elem){
        if (elementsCount[elem]) {
            elementsCount[elem] += 1;
        } else {
            elementsCount[elem] = 1;
        }
    });

    listB.forEach(function(elem) {
        if (elementsCount[elem] >= 1) {
            result.push(elem);
            elementsCount[elem] -= 1;
        }
    });

    return result;
}

/*

[10, 12, [13, 13, [5, 5, 3], 13] ], 13, [4, 3,5]]

10, 12, 13, 13, 5, 5, 3, 13, 13, 4, 3,5


function flatten(list) {
    const result = [];

    const flattenRecursive = function(list) {
        for (let i = 0; i < list.length; i++) {
            if (Array.isArray(list[i])) {
                flattenRecursive(list[i]);
            } else {
                result.push(list[i]);
            }
        }
    };

    flattenRecursive(list);

    return result;
}


*/


//How would you track clicks on your website
//