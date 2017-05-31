/*
Find the trader that satisfies the demand that the profit made/loss prevented within 3 days after buying the stock is GREATER than or equal to $5MIL, assuming there is only one stock.

The trader's transaction is like 11|Bob|BUY|100000 which is   DAY|TRADER NAME |TYPE | AMOUNT and the stock price is DAY|PRICE,   like 22|13.

The output should be sorted in day first, then by trader name.

*/

const findInsideTraders = function(feed) {
  const trades = {};
  const prices = {};
  const flagged = new Set();

  let currentPrice = null;

  //first scan to get all the data
  feed.forEach(function(data) {
    let splitData = data.split('|');
    let day = splitData[0];
    if (splitData.length === 2) {
      currentPrice = splitData[1];

    } else {
      //if day isn't in our map, add empty array
      if (!trades[day]) {
        trades[day] = [];
      }
      let traderName = splitData[1];
      let isBuy = (splitData[2].length === 3);
      let amount = Number(splitData[3]);
      trades[day].push([traderName, isBuy, currentPrice, amount]);
    }
  });

  console.log(trades);

  // return flagged;
};
/*
 * Complete the function below.
 */
function findPotentialInsiderTraders(datafeed) {
    const caughtTraders = new Set();
    const trades = {};
    const result = [];
    let currentPrice;

    datafeed.forEach(function(transaction) {
        let splitData = transaction.split("|");
        let currentDay = Number(splitData[0]);
        //Handle price
        if (splitData.length === 2) {
            currentPrice = splitData[1];
            //Need to check from (current Day - 3) ~ currentDay(3-day window)
            for (let day = currentDay - 3; day < currentDay; day++) {
                //check data for this day,
                let pastData = trades[day];
                let flagged;
                if (!!pastData) {
                   for (let currentTrade of pastData) {
                    let recordedName = currentTrade[0];
                    let recordedIsBuy = currentTrade[1];
                    let recordedPrice = currentTrade[2];
                    let recordedAmount = currentTrade[3];

                    //if we already caught this trader, don't do anything
                    if (caughtTraders.has(recordedName)) {
                        continue;
                    }
                    if (recordedIsBuy) {
                        flagged = ((currentPrice - recordedPrice) * recordedAmount >= 500000);
                    } else if (!recordedIsBuy) {
                        flagged = ((recordedPrice - currentPrice) * recordedAmount >= 500000);
                    }
                    if (flagged) {
                        result.push([day, recordedName]);
                        caughtTraders.add(recordedName);
                    }
                   }
                }
            }
        } else {
            //if data for this day isn't inour map, add empty array
            if (!trades[currentDay]) {
                trades[currentDay] = [];
            }
            //Handle traders' information
            let traderName = splitData[1];
            let isBuy = (splitData[2].length === 3);
            let amount = Number(splitData[3]);
            trades[currentDay].push([traderName, isBuy, currentPrice, amount]);
        }
    });


  //sort by day, then by name
  result.sort((a,b) => {
    let nameA = a[1].toLowerCase();
    let nameB = b[1].toLowerCase();
    if (a[0] > b[0]) {
      return 1;
    } else if (a[0] < b[0]) {
      return -1;
    } else if (nameA > nameB) {
      return 1;
    } else if (nameA < nameB) {
      return -1;
    }
  });

    const final = [];
    result.forEach((curr) => {
        final.push(`${curr[0]}|${curr[1]}`);
    });
    console.log(final);
    return final;
}


const test = function(input) {
    input.sort((a,b) => {
    let nameA = a[1].toLowerCase();
    let nameB = b[1].toLowerCase();
    if (a[0] > b[0]) {
      return 1;
    } else if (a[0] < b[0]) {
      return -1;
    } else if (nameA > nameB) {
      return 1;
    } else if (nameA < nameB) {
      return -1;
    }
  });

    return input;
}


const feed1 = "0|1000,0|Shilpa|BUY|30000,0|Will|BUY|50000,0|Tom|BUY|40000,0|Kristi|BUY|15000,1|Kristi|BUY|11000,1|Tom|BUY|1000,1|Will|BUY|19000,1|Shilpa|BUY|25000,2|1500,2|Will|SELL|7000,2|Shilpa|SELL|8000,2|Kristi|SELL|6000,2|Tom|SELL|9000,3|500,38|1000,78|Shilpa|BUY|30000,79|Kristi|BUY|60000,80|1100,81|1200";

const feed2 = "0|20,0|Kristi|SELL|300,0|Will|BUY|500,0|Tom|BUY|5000,0|Shilpa|BUY|150,1|Tom|BUY|150000,3|25,5|Shilpa|SELL|150,8|Kristi|SELL|60000,9|Shilpa|BUY|50,10|15,11|5,14|Will|BUY|10000,15|Will|BUY|10000,16|Will|BUY|10000,17|25";

const datafeed1 = feed2.split(",");
// console.log(datafeed1);

console.log(findPotentialInsiderTraders(datafeed1));
console.log(test([[1, 'Jim'], [2, 'Alex'], [2, 'Ben'], [5, 'Alex']]));