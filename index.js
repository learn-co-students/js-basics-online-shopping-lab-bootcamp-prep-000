var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function getCart() {
  return cart
}


function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}


function viewCart() {
  if (!cart.length) {
   console.log('Your shopping cart is empty.')
  }
  else {
    let output = `In your cart, you have `
    for (var item in cart) {
      console.log(cart);
      let obj = cart[item];
      var index = Object.keys(obj)[0];
      var cost = obj[index]
      output += `${index} at \$${cost}, `
    }
    output = output.slice(0, -2)
    output += '.'
    console.log(`${output}`)
  }
}


function removeFromCart (string) {
  var ItemIsThere = false
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(string)) {
      cart = cart.slice(0,i).concat(cart.slice(i+1))
      ItemIsThere = true
    }
  }
  if (ItemIsThere === false) {
   console.log(`That item is not in your cart.`)
  }
 }


function placeOrder(cc) {
  if (typeof cc !== 'number') {
    console.log(`We don't have a credit card on file for you to place your order.`)
  }
  else {
    console.log (`Your total cost is \$${total()}, which will be charged to the card ${cc}.`)
    cart = []
  }

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
