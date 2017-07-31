/*
Find the trader that satisfies the demand that the profit made/loss prevented within 3 days after buying the stock is GREATER than or equal to $5MIL, assuming there is only one stock.

The trader's transaction is like 11|Bob|BUY|100000 which is   DAY|TRADER NAME |TYPE | AMOUNT and the stock price is DAY|PRICE,   like 22|13.

The output should be sorted in day first, then by trader name.

// */

const feed1 =
  "0|1000,0|Shilpa|BUY|30000,0|Will|BUY|50000,0|Tom|BUY|40000,0|Kristi|BUY|15000,1|Kristi|BUY|11000,1|Tom|BUY|1000,1|Will|BUY|19000,1|Shilpa|BUY|25000,2|1500,2|Will|SELL|7000,2|Shilpa|SELL|8000,2|Kristi|SELL|6000,2|Tom|SELL|9000,3|500,38|1000,78|Shilpa|BUY|30000,79|Kristi|BUY|60000,80|1100,81|1200";

const feed2 =
  "0|20,0|Kristi|SELL|300,0|Will|BUY|500,0|Tom|BUY|5000,0|Shilpa|BUY|150,1|Tom|BUY|150000,3|25,5|Shilpa|SELL|150,8|Kristi|SELL|60000,9|Shilpa|BUY|50,10|15,11|5,14|Will|BUY|10000,15|Will|BUY|10000,16|Will|BUY|10000,17|25";

// ['0|Kristi', '0|Shilpa', '0|Tom', '0|Will', '1|Kristi', '1|Shilpa', '1|Will', '2|Kristi', '2|Shilpa', '2|Tom', '2|Will', '78|Shilpa', '79|Kristi']

// ['1|Tom', '8|Kristi']

const datafeed1 = feed1.split(",");
// console.log(datafeed1);

const datafeed2 = feed2.split(",");
console.log(datafeed2);
/*
 * Complete the function below.
 */
function findPotentialInsiderTraders(datafeed) {
  const prices = {};
  const trades = {};
  const insiders = {};
  let currentPrice;
  datafeed.forEach(transaction => {
    let transactionInfo = transaction.split("|");

    if (transactionInfo.length === 2) {
      let day = transactionInfo[0];
      currentPrice = Number(transactionInfo[1]);
      prices[day] = currentPrice;
    } else if (transactionInfo.length === 4) {
      let day = transactionInfo[0];
      let name = transactionInfo[1];
      let BuyOrSell = transactionInfo[2];
      let amount = Number(transactionInfo[3]);
      if (!trades[day]) {
        trades[day] = [];
      }

      trades[day].push([name, BuyOrSell, amount, currentPrice]);
    }
  });

  Object.keys(prices).forEach(day => {
    let currentPrice = prices[day];
    //currentDay goes from day-3 ~ day
    for (let currentDay = day - 3; currentDay <= day; currentDay += 1) {
      //console.log('DAY :', day);
      //console.log('curretDay :', currentDay);
      if (trades[currentDay]) {
        for (let currentTrade of trades[currentDay]) {
          //console.log('currentTrade :', currentTrade);
          //console.log('currentPrice :', currentPrice);
          let recordedPrice = currentTrade[3];
          let amount = currentTrade[2];
          let BuyOrSell = currentTrade[1];
          let name = currentTrade[0];
          let isInsider = false;

          if (BuyOrSell === "BUY") {
            let transactionAmount = (currentPrice - recordedPrice) * amount;
            //console.log('transactionAmount :', transactionAmount);
            isInsider = transactionAmount >= 500000;
          } else if (BuyOrSell === "SELL") {
            let transactionAmount = (recordedPrice - currentPrice) * amount;
            //console.log('transactionAmount :', transactionAmount);
            isInsider = transactionAmount >= 500000;
          }

          if (isInsider) {
            if (!insiders[currentDay]) {
              insiders[currentDay] = [];
            }

            if (insiders[currentDay].indexOf(name) === -1) {
              insiders[currentDay].push(name);
            }
          }
        }
      }
    }
  });

  const result = [];
  Object.keys(insiders).forEach(day => {
    for (let insider of insiders[day]) {
      result.push([Number(day), insider]);
    }
  });

  //sort by day, then by name
  result.sort((a, b) => {
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
  result.forEach(current => {
    final.push(`${current[0]}|${current[1]}`);
  });
  return final;
}

console.log(findInsideTrader(datafeed2));
