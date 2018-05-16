var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 let price = Math.floor(Math.random() * 100) + 1;
 var newItem = {itemName: item, itemPrice: price};
 cart.push(newItem);
 console.log(cart);
 return (`${item} has been added to your cart.`);
}


function viewCart() {
  let i = 0;
  if (cart.length == 1){
    return ("In your cart, you have " + cart[0] + " at " + "$" + price + ".");
  }
  else if (cart.length > 1) {
    for (i = 1; i < cart.length; i++){
     return ("In your cart, you have " + cart[0] + " at " + "$" + price + "," ); 
    }
  }
  else{
  return ("Your shopping cart is empty.");
  }
}

function total() {
  let i = 0;
  var addPrice = [];
  while (i < cart.length){
    i++;
  }
  return (cart);
}

function removeFromCart(item) {
  let i = 0;
  while (i < cart.length){
    cart.pop();
  }
  return ("That item is not in your cart.");
}

function placeOrder(cardNumber) {
  cart = [];
  return (`Your total cost is ${price}, which will be charged to the card ${carNumber}.`);
}
