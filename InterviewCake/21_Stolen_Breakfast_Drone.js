// function findUniqueDeliveryId(deliveryIds) {

//     var idsToOccurrences = new Map();

//     deliveryIds.forEach(function(deliveryId) {
//         if (idsToOccurrences.has(deliveryId)) {
//             var newCount = idsToOccurrences.get(deliveryId) + 1;
//             idsToOccurrences.set(deliveryId, newCount);
//         } else {
//             idsToOccurrences.set(deliveryId, 1);
//         }
//     });

//     for (var [id, count] of idsToOccurrences) {
//         if (count === 1) {
//             return id;
//         }
//     }
// }




function findUniqueDeliveryId(deliveryIds) {

    var uniqueDeliveryId = 0;

    deliveryIds.forEach(function(deliveryId) {
        uniqueDeliveryId ^= deliveryId;
    });

    return uniqueDeliveryId;
}