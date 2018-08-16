var cart = [];

function getCart() {
return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
   var item = {
      "itemName" : item,
      itemPrice : Math.floor(Math.random() * 101)
   }
   cart.push(item);
  return `${item.itemName} has been added to your cart.`
}

function viewCart() {
if (cart.length === 0){
  return "Your shopping cart is empty.";
}else if (cart.length === 1) {
  return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
} else if (cart.length === 2) {
  return `In your cart, you have ${cart[0] .itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  }else{
    var array = [];
    for (var x = 0; x < cart.length; x++){
    array.push(` ${cart[x].itemName} at $${cart[x].itemPrice}`);
    }
    return `In your cart, you have` + array.join(',') + `.`;
  } 
}

function total() {
var sum = 0 
for(var y = 0; y < cart.length; y++){
  sum += cart[y].itemPrice 
    }
  return sum
}

function removeFromCart(item) {
for (var x = 0; x<cart.length; x++){
  if (item === cart[x].itemName){
    delete test.item
  }
}
}

function placeOrder(cardNumber) {
  if (cardNumber === ""){
    return "Sorry, we don't have a credit card on file for you"
  }else{
    cart = []
    return "Your total cost is ${sum}, which will be charged to the card ${cardNumber}"
  }
  }