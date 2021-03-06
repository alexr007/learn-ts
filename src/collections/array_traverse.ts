namespace ArrayTraverse {
  let ss = new Array<string>();
  ss.push('Monday');
  ss.push('Tuesday');
  ss.push('Wednesday');

// #0 - only indexes
  for (let item in ss) {
    console.log(item);
  }

// #1 for - values via direct access
  for (let i = 0; i < ss.length; i++) {
    console.log(ss[i]);
  }

// #1 while - values via direct access
  let index = 0;
  while (index < ss.length) {
    console.log(ss[index++]);
  }

// #2 - only values via foreach construction
  for (let item of ss) {
    console.log(item);
  }

// #3 - custom callback
  ss.forEach((val, index, whole) => {
    console.log(`index: ${index} value: ${val} whole structure: ${whole}`);
  });

// #4 - via IterableIterator
//let ent = ss.keys(); // IterableIterator<number>; keys only
  let ent = ss.entries(); // IterableIterator<[number, T]>; tuples: [ 0, 'Monday' ]
  let iterator = ent[Symbol.iterator]();
  let item = iterator.next();
  while (!item.done) {
    console.log(item.value);
    item = iterator.next();
  }
}
