var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var item_price = {[item]:Math.floor(Math.random() * 100) + 1}
  cart.push(item_price)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length === 0){
    console.log("Your shopping cart is empty.")
  }
  else if (cart.length === 1){
    // {pizza: 24} // Object.keyss[cart[0]] gives us ["pizza"][0] which gives us "pizza"
    var itemName = Object.keys(cart[0])[0];
    var itemPrice = cart[0][itemName];
    console.log(`In your cart, you have ${itemName} at $${itemPrice}.`);
  }
  else if (cart.length > 1){
    var item = [];
    var price = [];
    var sum = [];
    for (let i = 0; i < cart.length - 1; i++){
      // create two variables itemName and Price
      // push the correct strings into the items array
      item.push(Object.keys(cart[i])[0]); //array of item names
      price.push(cart[i][item[i]]); //array of item prices

      sum.push(` ${item[i]} at $${price[i]}`); //name and price of items
    }
    var sum_last = `${Object.keys(cart[cart.length-1])[0]} at $${cart[cart.length-1][Object.keys(cart[cart.length-1])[0]]}.`;
    // console.log the correct array, would recommend looking up join :)
    if (cart.length === 2){
      console.log(`In your cart, you have${sum} and ${sum_last}`);
    }
    else{
      console.log(`In your cart, you have${sum}, and ${sum_last}`);
    }
  }
}


function total() {
  var sum = 0
  for (let i = 0; i < cart.length; i ++){
    sum += cart[i][Object.keys(cart[i])[0]]
  }
  return sum
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++){
    if(cart[i].hasOwnProperty(item)){
      cart.splice(i, 1)
      return cart
    }
  }
    console.log("That item is not in your cart.")
    return cart
}

function placeOrder(cardNumber) {
  if (cardNumber){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    setCart([])
  }
  else {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
}
