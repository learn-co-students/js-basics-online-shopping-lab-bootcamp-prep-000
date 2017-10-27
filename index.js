var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var value = Math.floor((Math.random() * 100) + 1);
  cart.push({[item]: value});

  console.log(`${item} has been added to your cart.`);

  return cart;
}

function viewCart() {
  // write your code here
  var contents = [];
  if (cart.length === 0){
    return console.log (`Your shopping cart is empty.`);
  }else {
    for (let i=0; i < cart.length; i++) {
      var item = cart[i];
      var itemName = Object.keys(item)[0];
      var itemPrice = item[itemName];
      contents.push(` ${itemName} at $${itemPrice}`);
    }
    if (cart.length === 1){
      console.log (`In your cart, you have` + contents[0] + `.`);
    } else if (cart.length === 2){
      console.log (`In your cart, you have` + contents[0] + ` and` + contents[1] + `.`);
    } else {
      var start = contents.slice(0, -1);
      var ending = contents.slice(-1);
      console.log (`In your cart, you have` + start.join(',') + `, and` + ending + `.`);
    }
  }
}

function total() {
  // write your code here
  var total=0;
  cart.forEach(function(item){
    for(var key in item){
      total+=item[key];
    }
  });
  return total;
}

function removeFromCart(item) {
  // write your code here
  for (let i=0; i < cart.length; i++) {
     var itemName = cart[i];
     if (itemName.hasOwnProperty(item)){
       cart.splice(i, 1);
       return cart;
     }
   }
   console.log (`That item is not in your cart.`);
   return  cart;
}

function placeOrder(cardNumber) {
  // write your code here
  var sum = total();
  if (typeof cardNumber != 'undefined') {
    console.log(`Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`);
  }else {
    console.log("Sorry, we don't have a credit card on file for you.");
  }
  cart = [];
  return cart;
}
