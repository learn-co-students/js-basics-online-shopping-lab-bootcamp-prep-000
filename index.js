var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var itemPrice = Math.floor(Math.random()*100);
  cart.push({[itemName]:itemPrice})
  console.log(`${itemName} has been added to your cart.`)
  return cart
}

function viewCart() {
// TEST1 empty cart
  if (cart.length === 0) {
    console.log(`Your shopping cart is empty.`);
  } else if (cart.length === 1) {

// TEST2 cart has one item
    var itemsAndPrice = cart[0]
    var itemName = Object.keys(itemsAndPrice)[0]
    var itemPrice1 = itemsAndPrice[itemName]
    console.log(`In your cart, you have ${itemName} at $${itemPrice1}.`)
  } else if (cart.length === 2) {

// TEST3 cart has two items
//load array
      var array = [];
      for (var i = 0; i < cart.length; i++) {
        var grabObject = cart[i]
        var objectName = Object.keys(grabObject)[0]
        var objectPrice = grabObject[objectName]
        array.push(objectName)
        array.push(objectPrice)
      }
console.log(`In your cart, you have ${array[0]} at $${array[1]} and ${array[2]} at $${array[3]}.`)
  } else if (cart.length > 2) {

// TEST4 cart has more than two items
//load array
      var array = [];
      for (var i = 0; i < cart.length; i++) {
        var grabObject = cart[i]
        var objectName = Object.keys(grabObject)[0]
        var objectPrice = grabObject[objectName]
        array.push(objectName)
        array.push(objectPrice)
      }
//unload array into string
      var string = "";
     do {
        var string = string + ` ${array[0]} at $${array[1]},`;
        array.shift()
        array.shift()
     } while (array.length > 2);
        string = string + ` and ${array[0]} at $${array[1]}.`;
console.log(`In your cart, you have${string}`)
}
}

function total() { //adds up the price of all items in the cart
  var totalPrice = 0;
  for (var i = 0; i < cart.length; i++) {
    var grabObject = cart[i]
    var objectName = Object.keys(grabObject)[0]
    var totalPrice = totalPrice + grabObject[objectName]
  }
return totalPrice
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) { //loop through cart array
    if (cart[i].hasOwnProperty(item)) {   //check if object key matches item at index i
    cart.splice(i,1)                      //remove object from cart at array index i,
    return cart                           //return cart and exit function
  }
}
  console.log(`That item is not in your cart.`) //
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log(`Sorry, we don't have a credit card on file for you.`)
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = [];
  }
}
