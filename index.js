var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
  var obj = {
    itemName: item,
    itemPrice: Math.floor(Math.random() * 100)
  }

  cart.push(obj);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if (cart.length == 0){
    return "Your shopping cart is empty.";
  } else {
    switch (cart.length){
      case 1:
        return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
        break;
      case 2:
        return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
        break;
      default:
        var str = "In your cart, you have ", replacement = ".";

        for (var i = 0; i < cart.length - 1; i++){
          str += `${cart[i].itemName} at $${cart[i].itemPrice}, `
        }
        str += `and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`
        return str;
    }
  }
}

function total() {
  // write your code here
  var total = cart.reduce(function(sum, item){
    return sum + item['itemPrice'];
  }, 0)

  return total;
}

function removeFromCart(item) {
  // write your code here
  var pos = cart.map(function(x) {return x.itemName;}).indexOf(item);

  if(pos > -1){
    cart.splice(pos,1);
    return cart;
  } else {
    return "That item is not in your cart.";
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if (isNaN(cardNumber) === true){
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    let sum = total();
    cart = [];
    return `Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`
  }
}
