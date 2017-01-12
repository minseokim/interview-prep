const hasCycle = function(linkedList){
  //have a slowRunner and a fastRunner
  //if they loop, cycle exists
  let slowRunner = linkedList.value;
  let fastRunner = linkedList.value;

  if (!linkedList || !linkedList.value) {
    return true;
  }

  //check as long as fastRunner isn't null(end of list)
  while (fastRunner !== null) {
    slowRunner = slowRunner.next;
    fastRunner = fastRunner.next;

    //we've reached end of list, return false
    if (fastRunner === null) {
      return false;
    }

    fastRunner = fastRunner.next;

    if (slowRunner === fastRunner) {
      return true;
    }
  }

  return false;
};