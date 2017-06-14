const wildCard = function(s) {
  //examine each character in s, if we encounter our wildcard,
  //just start off two separate recursive calls, one where we add 0, and one where we add 1.
  //we use currentIndex to keep track of recursion levels.

  const result = [];

  //10?0
   //1
    //10
      //100
      //101
  const generate = function(currentIndex, generated) {
    console.log('currentIndex :', currentIndex);
    console.log('generated :', generated);
    console.log('----------------------');

    if (currentIndex === s.length) {
      result.push(generated);
      return;
    }

    //start adding characters
    if (s[currentIndex] === '?') {
      generate(currentIndex+1, generated.concat('0'));
      generate(currentIndex+1, generated.concat('1'));
    } else {
      generate(currentIndex+1, generated.concat(s[currentIndex]));
    }
  };
  generate(0, '');
  return result;
};

/*
"10?1"

g(0, '')
  g(1, '1')
    g(2, '10')

     g(3, '100')
      g(4, '1001')
     g(3, '101')
      g(4, '1001')
*/

// console.log(wildCard("10??"));

var sampleData = [
  {"product":"milk","desc":"2%","size":"gallon","city":"Cleveland","state":"OH","price":2.90},
  {"product":"milk","desc":"1%","size":"gallon","city":"Cleveland","state":"OH","price":2.90},
  {"product":"milk","desc":"skim","size":"gallon","city":"Cleveland","state":"OH","price":2.90},
  {"product":"milk","desc":"skim","size":"gallon","city":"Columbus","state":"OH","price":3.12},
  {"product":"milk","desc":"2%","size":"gallon","city":"Columbus","state":"OH","price":3.10},
  {"product":"milk","desc":"1%","size":"gallon","city":"Columbus","state":"OH","price":3.08},
  {"product":"milk","desc":"2%","size":"gallon","city":"Toledo","state":"OH","price":2.85},
  {"product":"milk","desc":"skim","size":"gallon","city":"Toledo","state":"OH","price":2.85},
  {"product":"milk","desc":"skim","size":"gallon","city":"Toledo","state":"OH","price":2.85},
  {"product":"milk","desc":"skim","size":"gallon","city":"Chicago","state":"IL","price":3.94},
  {"product":"milk","desc":"1%","size":"gallon","city":"Chicago","state":"IL","price":3.97},
  {"product":"milk","desc":"2%","size":"gallon","city":"Chicago","state":"IL","price":3.99},
  {"product":"milk","desc":"2%","size":"gallon","city":"Miami","state":"FL","price":3.33},
  {"product":"milk","desc":"1%","size":"gallon","city":"Miami","state":"FL","price":3.33},
  {"product":"milk","desc":"skim","size":"gallon","city":"Miami","state":"FL","price":3.33},
  {"product":"milk","desc":"skim","size":"gallon","city":"San Diego","state":"CA","price":3.53},
  {"product":"milk","desc":"2%","size":"gallon","city":"Columbus","state":"GA","price":2.90},
  {"product":"milk","desc":"1%","size":"gallon","city":"Springfield","state":"IL","price":3.01},
  {"product":"milk","desc":"skim","size":"gallon","city":"Springfield","state":"IL","price":3.01},
  {"product":"milk","desc":"skim","size":"gallon","city":"Springfield","state":"IL","price":3.01}
];


//What is the average price for a gallon of milk?
var avgPriceGallonMilk = function(data){

  var total = 0;

  data.forEach(function(currentProduct) {
    total += currentProduct.price;
  });

  var avg = total / data.length;
  var ans = Number(Math.round(avg +'e2')+'e-2').toFixed(2);

  return Number(ans);
}
console.log("avgPriceGallonMilk: " + avgPriceGallonMilk(sampleData));


//What is the average price of a gallon of milk in Ohio?
var avgPriceGallonMilkOhio = function(data){

  var ohioData = data.filter(function(current) {
    return current.state === "OH";
  });

  return avgPriceGallonMilk(ohioData);
}
console.log("avgPriceGallonMilkOhio: " + avgPriceGallonMilkOhio(sampleData));


//What is the average price of a gallon of milk in Columbus, Ohio?
var avgPriceGallonMilkColumbusOhio = function(data){
  var columbusOhioData = data.filter(function(current) {
    return (current.state === "OH" && current.city === "Columbus");
  });

  console.log(columbusOhioData);
  return avgPriceGallonMilk(columbusOhioData);
}
console.log("avgPriceGallonMilkColumbusOhio: " + avgPriceGallonMilkColumbusOhio(sampleData));



//What is the average price for gallon of 2% milk?
var avgPriceGallonTwoPercMilk = function(data){

  var twoPercentMilkData = data.filter(function(current) {
    return (current.desc === "2%");
  });

  return avgPriceGallonMilk(twoPercentMilkData);
}
console.log("avgPriceGallonTwoPercMilk: " + avgPriceGallonTwoPercMilk(sampleData));




//What state has the highest price for a gallon of milk?
var stateWithHighestGallonMilkPrice = function(data){

  //Sort data by descending order of milk price
  data.sort(function(a, b) {
    return b.price - a.price;
  });

  //return the first state
  return data[0].state;
}
console.log("stateWithHighestGallonMilkPrice: " + stateWithHighestGallonMilkPrice(sampleData));



//What state has the highest average price for a gallon of milk?
var stateWithHighestAvgGallonMilkPrice = function(data){
   var statesAvgPriceMap = {};
   var lastPrice = "";

   data.forEach(function(current) {
    if (!statesAvgPriceMap[current.state]) {
      statesAvgPriceMap[current.state] = [];
    }
    statesAvgPriceMap[current.state].push(current.price);
   });

   console.log(statesAvgPriceMap);

   var firstPrice = 0;

   for (var state in statesAvgPriceMap) {
    var total = 0;
    statesAvgPriceMap[state].forEach(function(price) {
     total += price;
    });
    var avg = total / statesAvgPriceMap[state].length;
    var ans = Number(Math.round(avg +'e2')+'e-2').toFixed(2);
    statesAvgPriceMap[state] = Number(ans);
    firstPrice = Number(ans);
   }

   var highestState = "";

   for (var state in statesAvgPriceMap) {
    if (firstPrice <= statesAvgPriceMap[state]) {
      firstPrice = statesAvgPriceMap[state];
      highestState = state;
    }
   }

   return highestState;
}
console.log("stateWithHighestAvgGallonMilkPrice: " + stateWithHighestAvgGallonMilkPrice(sampleData));