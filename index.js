var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}
    
function addToCart(item) {
  var itemName = item;
  //var getCart = new Object();
  //getCart[itemName] = Math.ceil(Math.random() * 100);
  cart.push({ [item] : Math.ceil(Math.random() * 100) });
  console.log(`${itemName} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var cartList = new Array();
  for(var i=0; i < cart.length-1;i++) {
      cartList.push(`${Object.keys(cart[i])} at $${Object.values(cart[i])}`);
    }
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else if (cart.length === 1) {
    console.log(`In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])}.`);
  } else if (cart.length === 2) {
    console.log(`In your cart, you have ${cartList[0]} and ${Object.keys(cart[cart.length-1])} at $${Object.values(cart[cart.length-1])}.`);
  } else { 
    console.log(`In your cart, you have ${cartList.join(", ")}, and ${Object.keys(cart[cart.length-1])} at $${Object.values(cart[cart.length-1])}.`);
  }
}

function total() {
  var totalValue = 0;
  for (var i = 0; i < cart.length; i++) {
         totalValue = totalValue + parseInt(Object.values(cart[i]));
    }
  return totalValue;
}

function removeFromCart(item){
  var itemDelete = item
  for (var i = 0; i < cart.length; i++) {
    var inCart = cart[i].hasOwnProperty(itemDelete)
    if (inCart === true) {
             cart.splice(i, 1);
             return cart
    } else {}
  }
    console.log("That item is not in your cart.");
    return cart
  }

function placeOrder(cardNumber){
  var cardNumberSent = cardNumber
  if (cardNumberSent === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumberSent}.`);
    cart = [];
  }
}