var cart = [];

function getCart() {
  return cart;
}

function setCart(newCart) {
  cart = newCart;
}

function addToCart(itemName){
      var newObject= {
        itemName:itemName,
        itemPrice: Math.floor(Math.random()*100)
        }
     cart.push(newObject)
    return `${itemName} has been added to your cart.` 
} 
   
function viewCart() {
    if ( cart.length > 0 ) {
        var list = [];
        for(var i = 0; i < cart.length; i++) {
            var myItems = Object.keys(cart[i]);
            list.push( " " + myItems + " at $" + cart[i][myItems] );
        }
        return "'In your cart, you have' + list '.'";
    } 
    else {
        return "Your shopping cart is empty.";
    }
}

function viewCart() {
  if (cart.length === 0){
    return "Your shopping cart is empty."
  } 
  else if (cart.length === 1) {
    var ItemOne = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
    return ItemOne 
    }
  else if (cart.length === 2) {
    var ItemTwo = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
    return ItemTwo
    }  
  else if (cart.length === 3) {
    var ItemThree = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice}, and ${cart[2].itemName} at $${cart[2].itemPrice}.`
    return ItemThree}
}

function total () {
  var cartItemPrice = [];
  var totalPrice = 0
  for(var i = 0; i < cart.length; i++) {
    var itemPrice = cart[i].itemPrice
      cartItemPrice.push(itemPrice)
    }
  for (var a = 0; a < cartItemPrice.length; a++) {
    totalPrice = cartItemPrice[a]+=totalPrice
  }
  return totalPrice
}

function removeFromCart(item) {

  for (let i = 0, l = cart.length; i < l; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i,1);
      return cart 
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return `Sorry, we don't have a credit card on file for you.`
  }
  else {
var the_total = total()
    setCart([])
  return `Your total cost is $${the_total}, which will be charged to the card ${cardNumber}.`;
  }
}