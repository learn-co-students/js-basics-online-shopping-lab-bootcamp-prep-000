var cart = [];

function setCart(newCart) {
  cart = newCart;
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

function getCart() {
  return cart;
}

function addToCart(itemForPurchase) {
  var priceOfItem = Math.floor(Math.random() * 100);
  cart[itemForPurchase] = priceOfItem;
  console.log(`${itemForPurchase} has been added to your cart.`)
  return cart;
}

function viewCart() {
  const itemForPurchaseAndPriceOfItem = [];
  for (let i=0; l=cart.length, i<l, i++) {
    console.log("In your cart, you have itemForPurchaseAndPriceOfItem.push(`${i + 1}, ${priceOfItem[i]}`)";
  } else if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  }
}

function removeFromCart(item) {
  let itemInCart = false

  for (let i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true
      cart = cart.slice(0, i).concat(cart.slice(i + 1))
      return cart;
    } else if (cart.length === 0) {
      console.log("That item is not in your cart.")
    }
  }
}
