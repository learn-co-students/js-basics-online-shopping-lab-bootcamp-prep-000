var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

// turns items into Javascript objects, properly structuring them in the
// { itemName: itemPrice } format, setting the itemPrice at random number between 1 and
// 100, before adding them to the cart, printing a message to console indicating that
// the item has been added and returning the cart

function addToCart(item) {
  var itemName = item;
  var itemPrice = (Math.floor(Math.random() * 100) + 1);
  cart.push( { [itemName]: itemPrice });
  console.log(`${itemName} has been added to your cart.`);
  return cart;
}

function countProperties(cart) {
    var count = 0;
    for(var itemName in cart) {
        if(cart.hasOwnProperty(itemName))
            ++count;
    }
    return count;
}

// The viewCart() function does not accept any arguments. It should loop over every item
// in your cart, printing out the contents as one long, coherent statement in this
// format: In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.
// If the cart is empty, the function should instead print out Your shopping cart is empty.
// Note: Pay close attention to the syntax above. The printed statement should be a single
// sentence that begins with In your cart, you have, terminates in a period, and can assume
// the following shapes according to how many items the cart contains:
// 1 item — In your cart, you have bananas at $17.
// 2 items — In your cart, you have bananas at $17 and pancake batter at $5.
// 3+ items — In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.


function viewCart() {
  var checkItemsInCart = countProperties(cart);
  var last = Object.keys(cart)[Object.keys(cart).length-1];
  const itemList = [];
  if (checkItemsInCart === 0) {
    console.log(`Your shopping cart is empty.`);
  } else {
    for (var itemName in cart) {
         if ( itemName === last && checkItemsInCart !== 1 ) {
      // true add AND before last item.
          itemList.push(` and ${itemName} at $${cart[itemName]}.`);
          console.log(`In you cart, you have${itemList}`);
          return;
         } else if (checkItemsInCart === 1) {
           console.log(`In your cart, you have ${itemName} at $${cart[itemName]}.`);
         } else {
          // false add to item to output array itemList
            itemList.push(` ${itemName} at $${cart[itemName]}`);
         }
       }
     }
   }

function total() {
    var valuesToAdd = Object.values(cart);
    for(var i = 0, length = valuesToAdd.length; i < length; i++){
       valuesToAdd[i] = parseInt(valuesToAdd[i], 10);
        }
        var sum = (valuesToAdd.reduce(add, 0));
        function add(a, b) {
        return a + b;
   }
    console.log(sum);
 }

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
