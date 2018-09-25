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
 let obj = {
   itemName: item,
   itemPrice: price}
   cart.push(obj)
   
   return `${item} has been added to your cart.`
}

function viewCart() {

if (cart.length === 0) {
  return "Your shopping cart is empty."
} else {
   let items = [];
   for (var i = 0; i < cart.length; i++) {
     let getItemAndPrice = cart[i];
     let listItemName = getItemAndPrice.itemName;
     let listItemPrice = getItemAndPrice.itemPrice;
     items.push(`${listItemName} at $${listItemPrice}`)
   }
  
 
  
  var inCart = "In your cart, you have"
  
  if (items.length <= 1 ) {
    return `${inCart} ${items}.`
} else {
    var lastElement = items.pop()
    var firstElements = items.join(`, `)
    return `${inCart} ${firstElements}, and ${lastElement}.`
}
}}

function total() {
  var t = 0;

  for ( var i = 0; i < cart.length; i++) {
    var getprice = cart[i]
    var price = getprice.itemPrice
    t += price
  } 
  return t
}

function removeFromCart(item) {
     var itemRemoved = false;
  for (var i = 0; i < cart.length; i++) {
    var getName = cart[i];
    if (getName.itemName === item) {
      cart.splice(i, 1);
      itemRemoved = true;
      }  else {itemRemoved = false;}
  } if (itemRemoved === false) {
    return "That item is not in your cart.";
  } else {return cart}
  

}

function placeOrder(cardNumber) {
    var totalPrice = 0;
  if (cardNumber) {
    for (var i = 0; i < cart.length; i++) {
      var getPrice = cart[i];
      var price = getPrice.itemPrice;
      totalPrice += price
    }
    
    cart = [];
    return `Your total cost is $${totalPrice}, which will be charged to the card ${cardNumber}.`
    
    
  } else {
    return `Sorry, we don't have a credit card on file for you.`
  }
}
