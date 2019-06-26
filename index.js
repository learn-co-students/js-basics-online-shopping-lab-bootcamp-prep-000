var myCart = [
  { item: "eggs", price: 6 },
  { item: "butter", price: 3 },
  { item: "avocado", price: 1 }
]

var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 101);
  var newItem = {itemName: item, itemPrice: price};
  var cart = getCart();
  cart.push(newItem);
  return `${item} has been added to your cart.`
}

function viewCart() {
  var cart = getCart();
  if(cart.length === 0) {
    return "Your shopping cart is empty."
  } else if(cart.length ===1) {
    var item1 = cart[0][Object.keys(cart[0])[0]]
    var price1 = cart[0][Object.keys(cart[0])[1]]
    return `In your cart, you have ${item1} at $${price1}.`
  } else if (cart.length === 2) {
    var item1 = cart[0][Object.keys(cart[0])[0]]
    var price1 = cart[0][Object.keys(cart[0])[1]]
    var item2 = cart[1][Object.keys(cart[0])[0]]
    var price2 = cart[1][Object.keys(cart[0])[1]]
    return `In your cart, you have ${item1} at $${price1}, and ${item2} at $${price2}.`
  } else {
    var current = "In your cart, you have "
    var itemi = ""
    var pricei = ""
    var message = ""
    for(var i = 0; i < cart.length - 1; i++) {
      itemi = cart[i][Object.keys(cart[0])[0]]
      pricei = cart[i][Object.keys(cart[0])[1]]
      message = message + `${itemi} at $${pricei}, `
    }
    message = current + message
    var lastItem = cart[cart.length-1][Object.keys(cart[0])[0]]
    var lastPrice = cart[cart.length-1][Object.keys(cart[0])[1]]
    return [message] + `and ${lastItem} at $${lastPrice}.`
  }
}

function total() {
  var cart = getCart();
  var total = 0;
  for(var i = 0; i < cart.length; i++) {
    var pricei = cart[i][Object.keys(cart[0])[1]]
    total = total + pricei;
  }
  return total;
}

function removeFromCart(item) {
  var cart = getCart()
  if(cart.length === 0) {
    return "That item is not in your cart."
  }
  for (var i = 0; i < cart.length; i++) {
    if (item === cart[i][Object.keys(cart[0])[0]]) {
      cart.splice([i], 1);
    }
    }
    console.log("That item is not in your cart.")
    return cart;
  }



function placeOrder(ccNum) {
  var cart = getCart();
  var totalAmount = total();
  if(ccNum === undefined) {
    return ("Sorry, we don't have a credit card on file for you.")
  } else {
    setCart([]);
    return `Your total cost is $${totalAmount}, which will be charged to the card ${ccNum}.`
  };
}
