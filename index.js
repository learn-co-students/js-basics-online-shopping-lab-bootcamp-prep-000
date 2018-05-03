var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 item = { itemName: item,
          itemPrice: Math.floor(Math.random() * 100 + 1)
 };
 cart.push(item);
 return item.itemName + " has been added to your cart."
}

function viewCart() {
  if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  }
    else if (cart.length === 2) {
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
    }
    else if (cart.length > 2) {
      const viewArr = []
      let finalItem = cart.length - 1
      for (let i = 0; i < cart.length - 1; i++) {
        viewArr.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
      }
      return `In your cart, you have ${viewArr.join(', ')}, and ${cart[finalItem].itemName} at $${cart[finalItem].itemPrice}.`
      
    } else {
    return "Your shopping cart is empty."
    }
}

function total() {
  let arrTot = [ 0 ]
 for ( let i=0; i < cart.length; i++) {
  arrTot[0] = cart[i].itemPrice + arrTot[0]
 }
 return arrTot[0]
}

function removeFromCart(item) {
}

function placeOrder(cardNumber) {
  if (cardNumber) {
    let finalTot= total();
    cart = [];
    return `Your total cost is $${finalTot}, which will be charged to the card ${cardNumber}.`;
  } else {
    return "Sorry, we don't have a credit card on file for you."
  }
}
