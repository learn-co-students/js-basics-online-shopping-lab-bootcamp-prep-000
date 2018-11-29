var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemCart = { itemName: item, itemPrice: Math.floor(Math.random() * 100) + 1 }
  cart.push(itemCart)
  return `${itemCart.itemName} has been added to your cart.`
}
function viewCart() {
    var output = "In your cart, you have "
    if (cart.length == 0){
        return "Your shopping cart is empty."
    }
    else if (cart.length == 1) {
        output += `${cart[0].itemName} at \$${cart[0].itemPrice}.`
    }
    else if (cart.length == 2) {
        output += `${cart[0].itemName} at \$${cart[0].itemPrice}, and ${cart[1].itemName} at \$${cart[1].itemPrice}.`
    }
    else if (cart.length += 3) {
        var cartItems = [];
        cart.forEach(function (item) {
          cartItems.push(`${item.itemName} at \$${item.itemPrice}`)
        });
        if (cartItems.length > 1)
        {
          cartItems.push(`and ${cartItems.pop()}`)
        }
        output += `${cartItems.join(', ')}.`
    }
    return output
}

function total() {
    var sum = 0
    cart.forEach(item => {
      sum += item.itemPrice
    })
    return sum
}

function removeFromCart(itemName) {
  var removed = false;
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    if (item.itemName == itemName) {
        cart.splice(i, 1);
        removed = true;
    }
  }
  if (!removed)
  {
    return "That item is not in your cart.";
  }
  return cart
}

function placeOrder(cardNumber) {
    if (!cardNumber) {
        return "Sorry, we don't have a credit card on file for you.";
    }
    var cost = total();
    cart = [];
    return `Your total cost is \$${cost}, which will be charged to the card ${cardNumber}.`;
}
