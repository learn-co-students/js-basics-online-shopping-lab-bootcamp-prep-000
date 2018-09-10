var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 let obj = {itemName: item, itemPrice: Math.floor(Math.random() * 100)};
 cart.push(obj);
 return `${obj.itemName} has been added to your cart.`;
}

function viewCart() {
  let itemsInCart = "In your cart, you have";
  if (cart.length == 0) {
    return "Your shopping cart is empty.";
  }
  for (let item in cart) {
    let itemInCart = cart[item].itemName + " at $" + cart[item].itemPrice;
    if (item == cart.length - 1 && cart.length > 1) {
      itemsInCart = itemsInCart + " and " + itemInCart + ".";
    } else if(item == cart.length - 1) {
      itemsInCart = itemsInCart + " " + itemInCart + ".";
    } else {
      itemsInCart = itemsInCart + " " + itemInCart + ",";
    }
  }
  return itemsInCart;
}

function total() {
  let totalValue = 0;
  for (let item in cart) {
    totalValue = totalValue + cart[item].itemPrice;
  }
  return totalValue;
}

function removeFromCart(item) {
  let index = cart.findIndex((element) => { if(element.itemName === item) return true; });
  if (index != -1) {
    return cart.splice(index, 1);
  } else {
    return "That item is not in your cart.";
  }
}

function placeOrder(cardNumber) {
  if (cardNumber !== undefined) {
    let totalCart = total();
    cart = [];
    return "Your total cost is $" + totalCart + ", which will be charged to the card " + cardNumber + ".";
  } else {
    return "Sorry, we don't have a credit card on file for you.";
  }
}
