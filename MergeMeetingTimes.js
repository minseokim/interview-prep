// MergeMeetingTimes.js

function mergedMeetingTimes(arg) {
    // write the body of your function here
    var sortedTimes = arg.sort(function(a,b) {
      return a.startTime - b.startTime
    });
    var mergedTimes = [sortedTimes[0]];
    var currentTime;
  var lastMerged;
    
    for (var i = 1; i < sortedTimes.length; i++) {
      currentTime = sortedTimes[i];
        lastMerged = mergedTimes[mergedTimes.length-1];
        
        if (lastMerged.endTime >= currentTime.startTime) {
          lastMerged.endTime = Math.max(currentTime.endTime, lastMerged.endTime);
        } else {
          mergedTimes.push(currentTime);
        }
    }
    console.log(mergedTimes);
    return 'running with ' + mergedTimes;
}

// run your function through some test cases here
// remember: debugging is half the battle!
console.log(mergedMeetingTimes(  [
    {startTime: 0,  endTime: 1},
    {startTime: 1,  endTime: 3},
    {startTime: 4,  endTime: 8},
    {startTime: 5, endTime: 12},
    {startTime: 9,  endTime: 14},
]));
