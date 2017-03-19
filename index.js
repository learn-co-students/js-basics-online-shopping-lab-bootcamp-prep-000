var cart=[] ;

function setCart(newCart) {
  cart = newCart;
}
function getCart() {
  return cart;
}
function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}
function addToCart(item) {

var consoleText;
  var price;
  price = Math.floor(100 * Math.random());
  var itemToAdd = {};
  itemToAdd[item] = price;
  cart.push(itemToAdd);
  consoleText = item + " has been added to your cart."
  console.log(consoleText);
  return cart;
}
function viewCart() {
var itemName;
var price;
var itemPrice=[];
var text ="";

  if (cart.length===0) {
  console.log("Your shopping cart is empty.")
 }

 for (var i = 0,  l = cart.length; i < l; i++) {
    itemName = Object.keys(cart[i])[0];
    price = cart[i][itemName];
    itemPrice.push(itemName +" at $" +price);

 }

 for (var i = 0; i < itemPrice.length; i++) {
    if(i===(itemPrice.length-1)) {
      text = text + itemPrice[i] +".";
      }
      else {
        text = text + itemPrice[i] +", ";
        }
}
console.log("In your cart, you have "+text);


  }


function removeFromCart(item) {
  if(cart.length===0){
    console.log("That item is not in your cart.");
    }
    else {
      for (var i = 0,  l = cart.length; i < l; i++) {
        if ( Object.keys(cart[i])[0] === item) {
          cart.splice(i,1);
        break;
           }
      }
      }


  }




function placeOrder(creditCardNumber) {

  if(creditCardNumber===undefined){
    console.log('We don\'t have a credit card on file for you to place your order.');
    }
  else {
    console.log('Your total cost is $'+ (total())+', which will be charged to the card '+creditCardNumber+'.');
    }
cart.splice(0,cart.length);

}
