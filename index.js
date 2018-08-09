var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random()*100);
 var  object = {itemName:[item], itemPrice:price}
 cart.push(object)
 return `${item} has been added to your cart.`
}

function viewCart() {
    if (cart.length === 0){
    return 'Your shopping cart is empty.';
    }
    var yourCart = [];
    var sentence = 'In your cart, you have '
  for(var i = 0; i<cart.length;i++){
     yourCart.push(cart[i].itemName + " at $" + cart[i].itemPrice) 
  }if (yourCart.length === 1){
       sentence += yourCart +"."
    }else if (yourCart.length === 2){
      sentence += (yourCart[0] + ", and " + yourCart[1] + ".")
    }else if (yourCart.length > 2){
      var lastPart = yourCart.pop()
      var moreStuff = yourCart.join(", ")
      sentence += (moreStuff +", and "+ lastPart + "." )
    }
    return sentence
  }

function total() {
  var bill = 0;
  for ( var i = 0; i< cart.length; i++){
    bill += cart[i].itemPrice
  }
  return bill;
}
function removeFromCart(item) {
  for (var i = 0; i< cart.length; i++){
    if (cart[i].itemName ==item){
     cart.splice(i,1);
     return cart;
     }
  }
  return "That item is not in your cart."
}
function placeOrder(cardNumber) {
  if(cardNumber){
    var cartTotal = total()
    for (var i = cart.length; i>=0;i--) {
      cart.pop();
     return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`;
    }
    } else { 
      return ("Sorry, we don\'t have a credit card on file for you.")
}
}