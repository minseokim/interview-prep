/*
Given two linked lists, find out if they intersect and return the intersecting node. (We're comparing by reference, not by value)
*/

/*
1. Find lengths of both lists by traversing.
2. If tails of both lists aren't equal(by refernece) return immediately(they have to be! think about it...)
3. Find difference in lengths, adjust start pointer to same starting point, walk them down one by one and compare.

//Be careful of off by one errors!
*/
