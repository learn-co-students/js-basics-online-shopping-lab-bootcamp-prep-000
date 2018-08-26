
var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(name) {
  var newObj = {};
  var price = Math.ceil(Math.random() * 99)
  newObj.itemName = name;
  newObj.itemPrice = price;
  cart.push(newObj);

  return (`${name} has been added to your cart.`);
}

function viewCart() {
  var frontMes = "In your cart, you have ";
  var midMes = "";
  var endMes;
  var message;
  if (cart.length === 0){
    return ('Your shopping cart is empty.');
  }else{
    for (var i = 0; i<cart.length-1; i++){
      midMes += `${cart[i].itemName} at $${cart[i].itemPrice}, `
    }
    endMes = `and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`
  }
  if (cart.length === 1){
    message = frontMes + `${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`
  }else{
    message = frontMes + midMes + endMes;
  }
  return message;
}

function total() {
var total=0;
for (let i = 0; i<cart.length; i++) {
total += cart[i].itemPrice;
}
return total;
}

function removeFromCart(item) {
var pos = cart.findIndex(i => i.itemName === item);
if(pos === -1){
return "That item is not in your cart.";
}else{
cart.splice(pos, 1);
return cart;
}
}
function placeOrder(credNum) {
  var newTotal = total()
  if (credNum === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  }else{
    cart = [];
    return `Your total cost is $${newTotal}, which will be charged to the card ${credNum}.`
  }
}
