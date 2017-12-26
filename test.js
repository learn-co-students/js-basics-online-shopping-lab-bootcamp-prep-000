function find(objOrArray, criteriaFn) {
  // initialize two variables, `current`, and `next`
  // `current` keeps track of the element that we're
  // currently on, just like we did when unpacking the
  // array above; `next` is itself an array that keeps
  // track of the elements (which might be arrays!) that
  // we haven't looked at yet

  let current = objOrArray;
  if (Array.isArray(current)) {
    let next = [];
  }
  else {
    let next = {};
  }

  console.log("First Current is: " + current);
  console.log("First next is: " + next);
  // hey, a `while` loop! this loop will only
  // trigger if `current` is truthy — so when
  // we exhaust `next` and, below, attempt to
  // `shift()` `undefined` (when `next` is empty)
  // onto `current`, we'll exit the loop
  while (current) {
    // if `current` satisfies the `criteriaFn`, then
    // return it — recall that `return` will exit the
    // entire function!
    if (criteriaFn(current)) {
      return current
    }

    // if `current` is an array, we want to push all of
    // its elements (which might be arrays) onto `next`
    if (Array.isArray(current)) {
      for (let i = 0; i < current.length; i++) {
        next.push(current[i])
      }
    } else {
      for (let i =0; i < Object.keys(current).length; i++) {
        next[] = current[i];
        }
    }
    console.log ("after filling up, next is now: " + next);
    // after pushing any children (if there
    // are any) of `current` onto `next`, we want to take
    // the first element of `next` and make it the
    // new `current` for the next pass of the `while`
    // loop
    current = next.shift()
    console.log("After shift, current is: " + current + " and next is: " + next);
  }

  // if we haven't
  return null
}
