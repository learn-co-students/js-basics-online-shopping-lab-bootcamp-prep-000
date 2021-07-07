
var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  //var itemName = 'daikon'
  var itemPrice = Math.floor((Math.random() * 100) + 1);
  var purchase = {}
   purchase[item] = itemPrice
   cart.push(purchase)
   console.log(`${item} has been added to your cart.`);
 return cart;
}
//  'In your cart, you have mango at $73 and nuts at $41.'


// addToCart('Mango');
//  addToCart("nuts")
// addToCart("banana")
// // addToCart("pepper")
 viewCart();
function viewCart() {
  if (cart.length === 0){
    return console.log("Your shopping cart is empty.");
  }

  var itemsAndPrices = [];
  for (var i = 0; i < cart.length; i++) {
    var obj = cart[i];
    var objKey = Object.keys(obj)[0];

    var output = `${objKey} at $${obj[objKey]}`;

    itemsAndPrices.push(output);
  }
  if (itemsAndPrices.length == 1){
     console.log(`In your cart, you have ${itemsAndPrices}.`)
    }else if (itemsAndPrices.length == 2){
     var last = itemsAndPrices.splice(itemsAndPrices.length-1)
     console.log(`In your cart, you have ${itemsAndPrices.join(", ")} and ${last}.`)
    }else if (itemsAndPrices.length >= 3){
     var newlast = itemsAndPrices.splice(itemsAndPrices.length-1);
     console.log(`In your cart, you have ${itemsAndPrices.join(", ")}, and ${newlast}.`);
}

  // else {
  //   var output = "In your cart, you have "
  //   for (var i=0; i<cart.length; i++) {
  //     var obj = cart[i]
  //
  //     var objKey = Object.keys(obj)
  //     var value = obj[objKey]
  //     if (cart.length == 1) {
  //         return console.log(`${output}${objKey} at $${value}.`);
  //     }
  //   else if (cart.length == 2) {
  //    var obj1 = cart[0]
  //     var obj2 = cart[1]
  //     var firstItemName = Object.keys(obj1)
  //     var firstItemPrice = obj1[firstItemName]
  //    var secondItemName = Object.keys(obj2)
  //    var secondItemPrice = obj2[secondItemName]
  //   return  console.log(`In your cart, you have ${firstItemName} at $${firstItemPrice} and ${secondItemName} at $${secondItemPrice}.`);
  // }else if (cart.length >=3){
  //   for (var i = 0; i < cart.length; i++){
  //     var outp += `${output}${objKey} at $${value}`
  //     if (i <cart.length-2){
  //       outp += ','
  //     }else if (i == (cart.length-2)){
  //       outp += 'and'
  //     }else if (i == (cart.length-1)) {
  //       outp += '.'
  //     }
  //   }
  // }
  //   }
  // }
}

function total() {
  var sum = 0;
  for (var i = 0; i < cart.length; i++){
    var obj = cart[i];
    var objKey = Object.keys(obj)
    var value = obj[objKey]
    sum +=value;
  }
  return sum;
}

function removeFromCart(item) {
  var decider = false;
   for (var i =0 ; i<cart.length; i++){
       if (cart[i].hasOwnProperty(item)){
       var removedItem= cart.splice(i, 1);
      decider = true;
  return removedItem;
}
}if (decider == false) {
  console.log('That item is not in your cart.');
  }
}

function placeOrder(cardNumber) {
  if (!cardNumber){
    console.log("Sorry, we don't have a credit card on file for you.");
  }else{
    var totalPrice = total()
    console.log(`Your total cost is $${totalPrice}, which will be charged to the card ${cardNumber}.`);
  }
  cart = [];
}
