const steps = [];
let callCount = 0;

function trace(step) {

  const { type, context } = step;

  if (type === 'enter') {
    callCount++;
  }

  steps.push({
    callCount,
    step,
  });

  console.log('steps :', steps);
  return context;
}

function binarySearch(list, item) {
  trace({
    type: 'enter',
    line: 0,
    context: { list, item },
  });

  let low = 0;
  trace({
    type: 'assign',
    line: 1,
    context: { list, item, low },
  });

  let high = list.length - 1;
  trace({
    type: 'assign',
    line: 2,
    context: { list, item, low, high },
  });

  while (trace({
    type: 'compare',
    line: 4,
    context: { list, item, low, high },
    compared: ['low', 'high'],
  }) && low <= high) {
    const mid = Math.round((low + high) / 2);
    trace({
      type: 'assign',
      line: 5,
      context: { list, item, low, high, mid },
    });

    const guess = list[mid];
    trace({
      type: 'assign',
      line: 6,
      context: { list, item, low, high, mid, guess },
    });

    trace({
      type: 'compare',
      line: 8,
      context: { list, item, low, high, mid, guess },
      compared: ['guess', 'item'],
    });
    if (guess === item) {
      trace({
        type: 'return',
        line: 9,
        context: { list, item, low, high, mid, guess },
        returnValue: mid,
      });
      return mid;
    }

    trace({
      type: 'compare',
      line: 11,
      context: { list, item, low, high, mid, guess },
      compared: ['guess', 'item'],
    });
    if (guess > item) {
      high = mid - 1;
      trace({
        type: 'assign',
        line: 12,
        context: { list, item, low, high, mid, guess },
      });
    } else {
      low = mid + 1;
      trace({
        type: 'assign',
        line: 14,
        context: { list, item, low, high, mid, guess },
      });
    }
  }

  trace({
    type: 'return',
    line: 18,
    context: { list, item, low, high },
    returnValue: null,
  });
  return null;
}

const items = [
  'bear', 'cat', 'cow', 'dog', 'fox', 'pig', 'rat',
];

binarySearch(items, 'bear');