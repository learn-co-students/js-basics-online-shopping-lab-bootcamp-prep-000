var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  //create object with item name and price
  var obj = {
    itemName: item,
    itemPrice: Math.floor(Math.random() * 100)
  }
  //add object to cart array
  cart.push(obj);
  //notify customer
  return(`${obj.itemName} has been added to your cart.`)
}

function viewCart() {
  // empty cart
  if (cart.length === 0){
    return(`Your shopping cart is empty.`);
  }
  // 1 item
  else if (cart.length === 1){
    return(`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`)
  }
  // 2 items
  else if (cart.length === 2){
    return (`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`)
  }
  // 3+ items
  else {
    //create string to store list
    var string = `In your cart, you have `
    //create limits to control grammar of output
    var fin = cart.length - 1;
    //add all items except last to list
    for(var i = 0; i < fin; i++){
      string += `${cart[i].itemName} at $${cart[i].itemPrice}, `
    }
    //add last item to list
    string += `and ${cart[fin].itemName} at $${cart[fin].itemPrice}.`
    //return list in full sentence form
    return string;
  }
}

function total() {
  //create variable to store total value
  var totalValue = 0;
  //loop over all items and add values
  var stop = cart.length
  for(var i = 0; i < stop; i++){
    totalValue += cart[i].itemPrice
  }
  //return value
  return totalValue
}

function removeFromCart(item) {
  //loop over all cart items
  for (var i = 0; i < cart.length; i++){
    //check if input matches any item names
    if (cart[i].itemName === item){
      cart.splice(i,1);
      return cart;
    }
  }
  return `That item is not in your cart.`
}

function placeOrder(cardNumber) {
  if(cardNumber === undefined){
    return `Sorry, we don't have a credit card on file for you.`
  }
  else{
    var string = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    cart.splice(0);
    return string;
  }
}
