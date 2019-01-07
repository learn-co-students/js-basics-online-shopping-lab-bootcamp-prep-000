var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {

  let itemName = item;
  let itemPrice = Math.floor((Math.random() * 100) + 1);

  let newObj = {[itemName]: itemPrice};

  cart.push(newObj);

  console.log(`${itemName} has been added to your cart.`);

  return cart;
}

function viewCart() {

  var newArray = [];

  cart.forEach(function(item){
    var key = Object.keys(item)[0]; // converts each element in the cart array into a single element array, then assigns the value of that element's index 0 to the "key" variable
    newArray.push(`${key} at $${item[key]}`);
  });

  if (!newArray.length){

    console.log("Your shopping cart is empty.");

  } else {

    for (let i = 0; i < newArray.length; i++){

      if (newArray.length === 1){
        console.log(`In your cart, you have ${newArray.toString()}.`);
      } else if (newArray.length === 2) {
        console.log(`In your cart, you have ${newArray.join(' and ')}.`);
      } else {
        console.log(`In your cart, you have ${newArray.slice(0, -1).join(', ')}, and ${newArray.slice(-1)}.`);
      }
    }
  }
}

function total() {

  var totalCost = 0;

  cart.forEach(function(item){
    var itemPrice = item[Object.keys(item)[0]];
    totalCost += itemPrice;
  });

    return totalCost;

}

function removeFromCart(item) {
  for(let i = 0; i < cart.length; i++){
    if(cart[i].hasOwnProperty(item)){
      cart.splice(i, 1);
      return cart;
    }
  }
  console.log("That item is not in your cart.");
  return cart;
}

function placeOrder(cardNumber) {
  if(!cardNumber){
    console.log("Sorry, we don\'t have a credit card on file for you.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  }
  cart = [];
}
