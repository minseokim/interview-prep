/*
Imagine you are working for a bank, attempting to analyze fradulent credit card transactions. You are given a list of strings describing credit card transactions for a single day.

All strings are pipe-delimited and will take the form of
"<person name>|<integer whole dollar amount>|<location>|<integer time in minutes since 00:00>"

The list is sorted in ascending order by time. Your job is to return a list of people's names whose accounts reflect suspiscious activity. A person's account reflects suspiscious activity if you see of the following :

1. A transaction spending more than $3000
2. A transaction for which the next transaction for the same person differs in location, and is less than an hour later

The list you return should be ordered by when the first suspicious was detected. For the second type of fraud, consider the "first suspicious activity" to be the earlier of the two transactions. You have to complete the function getSuspiciousActivity to return the list of suspicious activities.

The list you return should contain the person names as they appeared in the input. Please note that the first line of the input is the number of transactions in the array.

Sample Input :

"Shilpa|500|California|63
Tom|25|New York|615
Krasi|9000|California|1230
Tom|25|New York|1235
Tom|25|New York|1238
Shilpa|50|Michigan|1300
Matt|90000|Georgia|1305
Jay|100000|Virginia|1310
Krasi|49|Florida|1320
Krasi|83|California|1325
Shilpa|50|California|1350"

Output : Krasi Shilpa Matt Jay
*/

const input = "Shilpa|500|California|63,Tom|25|New York|615,Krasi|9000|California|1230,Tom|25|New York|1235,Tom|25|New York|1238,Shilpa|50|Michigan|1300,Matt|90000|Georgia|1305,Jay|100000|Virginia|1310,Krasi|49|Florida|1320,Krasi|83|California|1325,Shilpa|50|California|1350"

const getSuspiciousActivity = function(feed) {
  const data = feed.split(',');
  const nameSet = new Set();
  const transactions = {};
  const result = [];

  data.forEach(function(transaction) {
    let splitData = transaction.split('|');
    let name = splitData[0];
    let amount = Number(splitData[1]);
    let location = splitData[2];
    let time = Number(splitData[3]);

    //check for amount fraud first
    if (amount > 3000 && !nameSet.has(name)) {
      result.push(name);
      nameSet.add(name);
    }

    //if nonexistent, create a list
    if (!transactions[name]) {
      transactions[name] = [];
    }

    //add to map
    transactions[name].push([name, amount, location, time]);

    if (transactions[name].length > 1) {
      //iterate over current persons transactions, comparing location
      for (let transaction of transactions[name]) {
        let savedLocation = transaction[2];
        if (location !== savedLocation && !nameSet.has(name)) {
          result.push(name);
          nameSet.add(name);
        }
      }
    }
  });

  return result;
};

console.log(getSuspiciousActivity(input));