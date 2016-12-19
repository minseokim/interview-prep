/*asyncMap has two parameters, an array of asynchronous functions (tasks) and a callback.
  What we're trying to do is run all the tasks in our tasks array
  Then invoke our callback on the results of those tasks
  IMPORTANT : preserve the order of the tasks in result, no matter when they fire
 */

 //explanation : use IIFE's to preserve a snapshot of value of i and pass it to the anonymous function that invokes each task. This allows us to add the returned value from the async function to its proper index in our resultsArray. Once we have all the values, just simply invoke the callback


'use strict';
var asyncMap = function(tasks, callback){
  let resultsArray = [];
  let resultsCount = 0;

  for (var i = 0; i < tasks.length; i++) {
    (function(i){ tasks[i]((value) => {

      resultsArray[i] = value;
      resultsCount++;

      console.log('i :', i);
      console.log('value :', value);
      console.log('array :', resultsArray);
      console.log('count :', resultsCount);

      if (resultsCount === tasks.length) {
        callback(resultsArray);
      }
    }); })(i);
  }
};

var asyncMapVerTwo = function(tasks, callback) {
  var count = 0, results = [];

  tasks.forEach(function(task, i) {
    task(function(result) {
      results[i] = result;
      if (++count === tasks.length) {
        callback(results);
      }
    })
  });
}

const asyncTasks = [
  (cb) => { setTimeout(() => { cb('one'); }, 200); },
  (cb) => { setTimeout(() => { cb('two'); }, 100); }
];

const print = (input) => {
  console.log(input);
};

asyncMapVerTwo(asyncTasks, print);