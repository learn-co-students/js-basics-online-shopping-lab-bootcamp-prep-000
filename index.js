var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var newItem = new Object({itemName:(item),itemPrice:((Math.random()+0.01)*100)});
 cart.push(newItem);
 return `${item} has been added to your cart.`;
}

var cart = [{'itemName':'Bananas','itemPrice':13},{'itemName':'Apples','itemPrice':25},{'itemName':'Grapes','itemPrice':30}]

function viewCart() {
  var statement = `In your cart, you have`;
  if (cart.length===0) {
    return "Your shopping cart is empty.";
  } else if (cart.length===1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  } else {
    for (let i=0;i<cart.length;i++) {
      if (i===(cart.length-1)) {
        statement = statement + ` and ${cart[i].itemName} at $${cart[i].itemPrice}.`;
      } else {
        statement = statement + ` ${cart[i].itemName} at $${cart[i].itemPrice},`;
      }
    }
  }
	return statement
}

function total() {
  var total = 0;
  for (let i=0;i<cart.length;i++) {
    total += cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  var match = 0;
  for (let i=0;i<cart.length;i++) {
    if (cart[i].itemName===item) {
      cart.splice(i,1);
      match += 1;
    }
  }
  if (match===0) return "That item is not in your cart.";
  else return cart;
}

function placeOrder(cardNumber) {
  if (cardNumber===undefined) {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    var value = total();
    cart = [];
    return `Your total cost is $${value}, which will be charged to the card ${cardNumber}.`;
  }
}
