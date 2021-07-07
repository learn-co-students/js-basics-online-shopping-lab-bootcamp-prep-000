var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 // item is a string, name of whatever item
 
 var itemPrice = Math.floor(Math.random() *Math.ceil(1) * Math.floor(100));
 var itemObject = {itemName: itemName, itemPrice: itemPrice};
 var cartAddObject = cart.push(itemObject);
 cartAddObject;
 return `${itemName} has been added to your cart.`;
}

function viewCart() {
  //needs to loop over every item in cart, returning contents like "itemName at itemPrice"
//how to access key in object?
  if (cart.length) {
    var cartContents = `In your cart, you have `;
      if (cart.length === 1) {
      return cartContents + `${cart[0].itemName} at $${cart[0].itemPrice}.`;
      } 
        else if (cart.length === 2) {
        return cartContents + `${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
        } else if (cart.length >= 3){
          var cartItems = "";
          //[1,2,3,4,5] 5 elements long, 5 = index 4
          for (var i = 0; i < cart.length - 1; i ++) {
            cartItems = cartItems + `${cart[i].itemName} at $${cart[i].itemPrice}, `;
          }
          return cartContents + cartItems + `and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`;
        }
  }
  else {
    var emptyCartStatement = "Your shopping cart is empty.";
    return emptyCartStatement;}
}

function total() {
  var totalPrice = 0;
  if (cart.length) {
  for (var i = 0; i < cart.length; i++){
  totalPrice = totalPrice + cart[i].itemPrice;
  } 
  return totalPrice;
  } else {
    return 0;
    } 
}

function removeFromCart(item) {
  for(var i = 0; i < getCart().length; i++){
    if(getCart()[i].itemName === item){
      return getCart().splice(i,1);
    }
  }
  var notInCart = "That item is not in your cart.";
  return notInCart;
}


function placeOrder(cardNumber) {
  if (cardNumber) {
    var allGroceryPrice = total();
    var costAndCard = `Your total cost is $${allGroceryPrice}, which will be charged to the card ${cardNumber}.`;
    cart = [];
    return costAndCard;
  }
  else {
    var noCard = "Sorry, we don\'t have a credit card on file for you.";
    return noCard;
  }
}
