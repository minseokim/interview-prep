/*
Partition a linked list around value x, such that all nodes less than x come before all nodes greater/equal to x.
*/

/*
Just make two new lists, one for less than, one for greater/equal to
in the end, just merge the two lists together
  - Can be done with four variables(beforeStart/beforeEnd, afterStart/afterEnd)
  - OR with just one list where we have tail and head, and we update tail or head at each iteration
*/
