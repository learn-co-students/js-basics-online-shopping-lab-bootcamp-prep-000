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
   return `In your cart, you have ${cart[0] .itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice}, and ${cart[2].itemName} at $${cart[2].itemPrice}.`
    }
    return `In your cart, you have` + array.join(',') + `.`;
  }

function total() {
var sum = 0 
for(var y = 0; y < cart.length; y++){
			sum += cart[y].itemPrice
    }
  return sum
}

function removeFromCart(item) {
  var i = 0;
for (var x = 0; x<cart.length; x++){
  if (item === cart[x].itemName){
cart.splice(x,1)
i++;
  }
}
if (i === 0){
    return 'That item is not in your cart.'
  }
}


function placeOrder(cardNumber) {
  if (cardNumber === undefined){
    return "Sorry, we don't have a credit card on file for you."
  }else{
    var t = total()
    cart = []
    return `Your total cost is $${t}, which will be charged to the card ${cardNumber}.`
  }
  }
console.log(addToCart('apple'))