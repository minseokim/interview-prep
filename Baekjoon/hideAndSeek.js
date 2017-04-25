/*
Jim's location :N.
Brother's location :K.
We're trying to find the shortest time for Jim to find his brother.

From location X, He can either :
1) Walk : X+1, or X-1
2) Run : 2*X

Doing 1) and 2) both take 1 second

*/

/*
Since both options take the same amount of time, this leads itself well to BFS.

ex) Jim : 5
Brother : 17

5 -> 10 -> 9 -> 18 -> 17

We'll store Jim's location inside a queue. We'll also need to keep track of 'ALREADY EXISTING' values because we're trying to find the shortest distance.

From 5, he can go to either 4, 6, 10.

Then he visits the nearest neighbor, 4. From 4 he can go to 3 and 8.

From 6 he can look at 7 and 12.

From 10 he can look at 9, 11, 20.

...

We'll end up creating a tree with BFS.

Check[i] = whether we visited i or not

Dist[i] = The # of distances for reaching i.
*/

const hideAndSeek = function(jimLocation, brotherLocation) {
  const check = [];
  const distances = [];
  const queue = [];

  //mark jim's location as visited, set distance to 0, and add it to queue
  check[jimLocation] = true;
  distances[jimLocation] = 0;
  queue.push(jimLocation);
  let count = 0;

  while (queue.length > 0) {

    let currentLocation = queue.shift();

    //Case 1 : Walk backwards. Check to make sure location isn't less than 0.
    if (currentLocation-1 >= 0) {
      //check if we've aleady been here
      if (check[currentLocation-1] !== true) {
        //add it to queue
        queue.push(currentLocation-1);
        //mark it as visited
        check[currentLocation-1] = true;
        //add the distance
        distances[currentLocation-1] = distances[currentLocation] + 1;
      }
    }
    //Case 2 : Walk forwards
    if (currentLocation + 1 < 200000) {
      if (check[currentLocation+1] !== true) {
        //add it to queue
        queue.push(currentLocation+1);
        //mark it as visited
        check[currentLocation+1] = true;
        //add the distance
        distances[currentLocation+1] = distances[currentLocation] + 1;
      }
    }
    //Case 3 : Run
    if (currentLocation*2 < 200000) {
      if (check[currentLocation*2] !== true) {
        //add it to queue
        queue.push(currentLocation*2);
        //mark it as visited
        check[currentLocation*2] = true;
        //add the distance
        distances[currentLocation*2] = distances[currentLocation] + 1;
      }
    }
    count++;
  }

  return distances[brotherLocation];
};

console.log(hideAndSeek(5, 17));

