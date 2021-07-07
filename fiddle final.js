/*
  Function: find
  Parameters:
    array - an array to search
    criteriaFn - a function whose return value we will search for
  Output:
    null if criteriaFn's return value is not found
    if it is found, returns the found value
*/

function find(array, criteriaFn) {
  // initialize two variables, `current`, and `next`
  // `current` keeps track of the element that we're
  // currently on
  // `next` is itself an array that keeps
  // track of the elements (arrays or objects) that
  // we haven't looked at yet
  let current = array
  let next = []

  // Loop runs if current is either truthy, an object, or the number 0
  // If current === 0, 0 could be the match, so don't return null

  while (current || ((typeof current === "object") && (current !== null)) || current === 0) {
    // if `current` satisfies the `criteriaFn`, then return it

    if (criteriaFn(current)) {
      return current;
    }

    // if `current` is an array, we want to push all of
    // its elements onto `next`
    if (Array.isArray(current)) {
      for (let i = 0; i < current.length; i++) {
        next.push(current[i])
      }
    }

    // also, if current is an object, push all its values onto `next` array
    else if ((typeof current === "object") && (current !== null)) {

      for (let i = 0; i < ((Object.keys(current)).length); i++) {

        var keyName = Object.keys(current)[i];
        var value = current[keyName];
        next.push(value);
      }
    }

    // after pushing any children (if there
    // are any) of `current` onto `next`, we want to take
    // the first element of `next` and make it the
    // new `current` for the next pass of the `while`
    // loop
    current = next.shift()
  }

  // if we did not find the value
  return null
}
