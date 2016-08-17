'use strict';

// function findUniqueDeliveryId(deliveryIds) {
//   let deliveryTracker = new Map();

//   deliveryIds.forEach(function(deliveryId) {
//     if (deliveryTracker.has(deliveryId)) {
//       let newCount = deliveryTracker.get(deliveryId) + 1;
//       deliveryTracker.set(deliveryId, newCount);
//     } else {
//       deliveryTracker.set(deliveryId, 1)
//     }
//   });

//   for (let [id, count] of deliveryTracker) {
//     if (count === 1) {
//       return id;
//     }
//   }
// }

//Using Bitwise Operators
function findUniqueDeliveryId(deliveryIds) {
  let uniqueDeliveryId = 0;

  deliveryIds.forEach(function(deliveryId) {
    uniqueDeliveryId ^= deliveryId;
  });

  return uniqueDeliveryId;
}