var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
    var obj = new Object()
    obj[item] = Math.floor(Math.random() * (100 - 1) + 1)
    cart = [...cart, obj];
    console.log(`${item} has been added to your cart.`)
    return cart
}

//from call below
function viewCart() {
  let i = 0;
  if (cart.length === 0) {
      console.log('Your shopping cart is empty.')
  } else {
    var new_cart = []
      for (let i = 0; i < cart.length; i++) {
          var key = Object.keys(cart[i])[0]
          new_cart = [...new_cart, `${key} at $${cart[i][key]}`]
          if (cart.length === 1) {
              console.log(`In your cart, you have ${new_cart}.`)
          }
          else if (cart.length === 2) {
              console.log(`In your cart, you have ${new_cart.join(' and ')}.`)
          }
          else if (cart.length >= 3) {
              console.log(`In your cart, you have ${new_cart.pop().join(', ')} and ${new_cart[new_cart.length - 1]}.`)
          }
        }
    }
};

function viewCart() {
  let i = 0;
  if (cart.length === 0) {
      console.log('Your shopping cart is empty.')
  } else {
      for (let i = 0; i <=cart.length; i++) {
          var new_cart = []
          new_cart = [...new_cart, `${Object.keys(cart)[i]} at $${cart[Object.keys(cart)[i]]}`]
          if (cart.length === 1) {
              console.log(`In your cart, you have ${new_cart}.`)
          }
          else if (cart.length === 2) {
              console.log(`In your cart, you have ${new_cart}.join(' and ').`)
          }
          else if (cart.length >= 3) {
              console.log(`In your cart, you have ${new_cart.pop()}.join(', ') and ${new_cart[new_cart.length - 1]}.`)
          }
        }
    }
};


function total() {
  var total = 0
  for (let i = 0; i <= cart.length; i++) {
    //   prices = [...prices, cart[Object.keys(cart)[i]]]
    total += Number(cart[Object.keys(cart)[i]])
  }
  // for (let p = 0; p < prices.length; p++) {
  //     total += Number(Object.keys(prices)[p])
  // }
  return total
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here

}
