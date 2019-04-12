var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item){
  
  var price = Math.floor(Math.random()*100) + 1;
  var itemName = {};
  itemName[item] = price
  cart.push(itemName)
  console.log(item + " has been added to your cart.");
  return cart

 
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else {
    var items = [];
    for (var i = 0; i < cart.length; i++) // it should loop over every item in your cart, returning the contents as one long, coherent statement in this format: 
    {
      for (var item in cart[i]) {
        items.push(item + " at $" + cart[i][item])
      }
    }
    console.log("In your cart, you have " + items.join(", ") + ".");
  }
  }

function total() {
  
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
