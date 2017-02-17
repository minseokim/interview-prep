/*
Given a circular linked list, return the node at the beginning of the loop
*/

/*
First to detect cycle -
SlowRunner & fastRunner Technique :
1. fastRunner advances two nodes at at ime, slowRunner advances one node at a time, if at any point they overlap, there's a cycle

2. While loop needs to check for fastRunner !== null AND fastRunner.next !== null, because of the case where there are only two nodes. Or we can check by advancing fastRunner one step at a time.
*/

/*

*/
