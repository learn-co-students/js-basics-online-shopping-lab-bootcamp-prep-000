var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var randPrice = parseInt(100*Math.random());
 var itemPrice = {itemName: item, itemPrice: randPrice};
 cart.push(itemPrice);
 return `${item} has been added to your cart.`;
 }

function viewCart() {
  // Reads the contents of the cart out into a oxford comma separated list 
  if (cart.length ===0){
    return "Your shopping cart is empty.";
  }
  else{
    var cartStr = "In your cart, you have ";
    for (var i=0; i<cart.length; i++){
      if (cart.length>1){
        if (i != cart.length - 1){
          cartStr = cartStr + `${cart[i].itemName} at \$${cart[i].itemPrice}, `;
        }
        else{
          cartStr = cartStr + `and ${cart[i].itemName} at \$${cart[i].itemPrice}.`;
        }
      }
      else{
        cartStr = cartStr + `${cart[i].itemName} at \$${cart[i].itemPrice}.`;
      }
      }
    console.log(cartStr);
    return cartStr;
  }
}

function total() {
  // Iterates through cart aray to give total value of items in cart
  var cartTotal = 0;
  for (var i=0;i<cart.length; i++){
    cartTotal += parseInt(cart[i].itemPrice);
  }
    return cartTotal;
}

function removeFromCart(item) {
  // Remove item passed from the cart
  for (var i=0;i<cart.length;i++){
    if (cart[i].itemName === item){
      cart.splice(i, 1);
      console.log(cart);
      return cart;
    }
  }
  console.log("item is not in cart. your cart is :/n" + cart);
  
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined){
    console.log(cardNumber);
    console.log("Sorry, we don't have a credit card on file for you.");
    return "Sorry, we don't have a credit card on file for you.";
  }
  else{
    console.log(typeof cardNumber);
    var cost = total();
    cart = [];
    return `Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`;
  }
}


//This code test runs the program
addToCart("vanilla");
addToCart("watermelon");
addToCart("yams");
removeFromCart("watermelon");
console.log('watermelon removed');
console.log(`New length of the cart = ${cart.length}`);
removeFromCart("yams");
console.log('yams removed');
console.log(`New length of the cart = ${cart.length}`);
viewCart();
total();
placeOrder();
placeOrder(1234);