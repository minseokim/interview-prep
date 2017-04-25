/*
IF we're given two integers A and B, each 4 digits,
We want to find the minimum # of operations to go from A to B.

D : 2 -> 2*N
S : N -> N-1
L : Shift each digit left by 1
R : Shif teach digit right by 1.

As output, we also want to see HOW we got from A to B(All the transformations in between)

*/

/*
  This is an extension of the hideAndSeek Problem. Instead we need additional data structures to store how we got from one number to the next, and where it also CAME FROM. So we'll need from[] and how[] in addition to check[] and dist[].

*/

const dslr = function(A, B) {
  const check = [];
  const dist = [];
  const queue = [];
  //from[next] = currentNum;  ---> So checking the index of from tells you the previous number
  const from = [];
  //how[next] = 'S' ---> Checking the index of how tells you the operation we did to get to that number.
  const how = [];

  //start with the first number.
  check[A] = true;
  dist[A] = 0;
  queue.push(A);
  from[A] = "";
  how[A] = "";

  // let count = 0;

  while (queue.length > 0) {
    // if (count === 100000) {
    //   break;
    // }
    let currentNum = queue.shift();


    let next = currentNum*2 % 10000;

    if (!check[next]) {
      queue.push(next);
      check[next] = true;
      dist[next] = dist[currentNum] + 1;
      from[next] = currentNum;
      how[next] = 'D';
    }

    next = currentNum-1;
    if (!check[next]) {
      queue.push(next);
      check[next] = true;
      dist[next] = dist[currentNum] + 1;
      from[next] = currentNum;
      how[next] = 'S';
    }

    next = (currentNum % 1000) * 10 + (currentNum/1000);
    if (!check[next]) {
      queue.push(next);
      check[next] = true;
      dist[next] = dist[currentNum] + 1;
      from[next] = currentNum;
      how[next] = 'L';
    }

    next = (currentNum/10) + (currentNum % 10)*1000;
    if (!check[next]) {
      queue.push(next);
      check[next] = true;
      dist[next] = dist[currentNum] + 1;
      from[next] = currentNum;
      how[next] = 'R';
    }

    // count++;
  }

  let answer = "";

  while (B !== A) {
    console.log('B :', B);
    console.log('how[B] :', how[B]);
    answer += how[B];
    B = from[B];
  }

  return answer;
};

console.log(dslr(1, 2));