var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var obj = new Object({ [item] : Math.floor((Math.random() * 100) + 1) })
  cart.push(obj)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() { //[{apples: 2}, {socks: 5}]
  if (cart.length) {
    var newArray = []
    for (var i = 0; i < cart.length; i++) {
      var currentItem = cart[i] //{apples: 2}
      var itemName = Object.keys(currentItem)[0] //"apples"
      var itemPrice = currentItem[itemName] //2

      newArray.push(`${itemName} at $${itemPrice}`)
    }
  } else {
    return console.log('Your shopping cart is empty.')
  }
  if(cart.length > 2) {
    console.log(`In your cart, you have ${newArray.join(", ")}.`)
  } else if (cart.length === 2) {
      console.log(`In your cart, you have ${newArray.join(" and ")}.`)
  } else if (cart.length === 1) {
    console.log(`In your cart, you have ${newArray[0]}.`)
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
