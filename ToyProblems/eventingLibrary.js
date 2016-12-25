const mixEvents = function(obj) {

  const events = {};

  obj.trigger = function (event) {
    const args = Array.from(arguments).slice(1);

    if (events[event]) {
      events[event].forEach((callback) => {
        callback.apply(this, args);
      })
    } else {
      console.log("event doesn't exist");
    }
  };

  // Register a callback to be fired on this event.
  obj.on = function (event, callback) {
    if (events[event]) {
      events[event].push(callback);
    } else {
      events[event] = [callback];
    }
  };

  return obj;
};

var dinner = mixEvents({});
var result;
dinner.on('order', function(dish, side){
  result = dish + " with a side of " + side;
});
dinner.trigger('order', "spam", "spinach");
console.log(result);