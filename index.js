
/*1. The `addToCart()` function accepts one argument, the name of an item.
    + Use that passed-in string to create a new object representing the item. The object should consist of two key-value pairs : `{ itemName: name of the item, itemPrice: price of the item, }`. As more items are added, the `cart` should start to look something like this: `[ {  itemName:"bananas", itemPrice: 17 }, { itemName:"pancake batter",itemPrice: 5 }, { itemName:"eggs", itemPrice: 49 }]`.
    + The price of each item should be a randomly-generated integer between 1 and 100.
      * ***HINT***: Look into `Math.random()` and `Math.floor()`.
    + Upon the successful addition of a new item to the cart, the function should return `<itemName> has been added to your cart.` .
2. The `viewCart()` function does not accept any arguments. It should loop over every item in your cart, returning the contents as one long, coherent statement in this format: `In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.`
    + If the cart is empty, the function should instead return `Your shopping cart is empty.`
    + ***Note***: Pay close attention to the syntax above. The returned statement should be a single sentence that begins with `In your cart, you have `, terminates in a period, and can assume the following shapes according to how many items the cart contains:
      * 1 item — `In your cart, you have bananas at $17.`
      * 2 items — `In your cart, you have bananas at $17, and pancake batter at $5.`
      * 3+ items — `In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.`
3. The `total()` function accepts no arguments, iterates through the `cart` array, and returns the current total value of the items in the cart.
4. The `removeFromCart()` function accepts one argument, the name of the item that should be removed.
    + If the item *is* present in the cart, the function should remove the object from the cart and then return the updated cart.
    + ***HINT***: Check each object's itemName value key to see if it matches the parameter, then remove it if it matches. You might find [Array.prototype.splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) to be useful.
    + If the cart does not contain a matching item, the function should return `That item is not in your cart.`
5. The `placeOrder()` function accepts one argument, a credit card number.
    + If no argument is received, the function should print out `Sorry, we don't have a credit card on file for you.`.
    + If a card number is received, the function should
      + empty the `cart` array
      + return `Your total cost is $71, which will be charged to the card 83296759.` (where `71` is the value returned by `total()` and `83296759` is the credit card number passed to `placeOrder()`)*/

var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var obj = {itemName: item, itemPrice: Math.floor(Math.random() * 100)};
  cart.push(obj);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  var str = `In your cart, you have`;

    if(cart.length === 0){
      return `Your shopping cart is empty.`;
    } else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
    }
     else if (cart.length === 2) {
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
    }
    for(var i = 0; i < cart.length; i++){
  if(i + 1 === cart.length){
    return str += ` and ${cart[i].itemName} at $${cart[i].itemPrice}.`
  } else {
    str += ` ${cart[i].itemName} at $${cart[i].itemPrice},`;
  }
}
return str;
}

function total() {
  var total = 0;
  for(var i = 0; i < cart.length; i++){
    total += cart[i].itemPrice;
  }
  return total
}

function removeFromCart(item) {
   for(var i = 0; i < cart.length; i++){
    if(cart[i].itemName === item){
      cart.splice(i, 1);
      return cart;
    } 
  }
  return `That item is not in your cart.`
}

function placeOrder(cardNumber) {
  if(!cardNumber){
    return `Sorry, we don't have a credit card on file for you.`
  }
  var t = total();
  cart = [];
  return `Your total cost is $${t}, which will be charged to the card ${cardNumber}.`
}
