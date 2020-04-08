var cart = [];
var word = [];
function getCart() {
  //addToCart(cart)
  var cartd = ["In your cart, you have"]
  var item = cart.itemName
  var price = cart.itemPrice

  for (var i = 0; i < cart.length; i++) {
  //  obj = { cart[i].itemName, cart[i].itemPrice }



  }
  return cart
}

function setCart(c) {
  cart = c;



  return cart;
}
function addToCart(item) {
  var prices = Math.floor(Math.random() * 100) + 1

  var obj = {
  itemName: item,
  itemPrice: prices }
  cart.push(obj)

  //cart.push({ itemPrice: `${prices}`}
  console.log(cart)

  return `${item} has been added to your cart.`
}
//addToCart()
function viewCart() {
var carts = "In your cart, you have "
var items
var item
var price
var itemOne
var itemTwo
var length = cart.length
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  }

  else {
    for (var i = 0; i < cart.length; i++) {
        item = cart[i].itemName
        price = cart[i].itemPrice
        items = carts + item + " at " + "$" + price
        if (length === 1) {
          return carts + item + " at " + "$" + price + "."
        }
        if (length === 2) {
          itemTwo = " and " + cart[i+1].itemName + " at " + "$" + cart[i+1].itemPrice
          return carts + item + " at " + "$" + price + "," + itemTwo + "."
        }

        if (length > 2) {
          items = item + " at " + "$" + price
        }
        }
        return carts + items +"."
      }
    }
    /*if (i + 1 === length) {
      carts = carts + `${item} at $${price}.`
    return carts
    }
    else if (i + 2 === length) {
      items = items + `${item} at $${price}.`

      if (i + 1 === length) {
        carts = carts + items + `${item} at $${price}.`
      return carts
    }
  }
    else  {
      carts = carts.concat(carts = carts.concat(`and ${item} at $${price}.`))
      return carts
    }

      //push(`${item} "at $" ${price}`)
      //carts = carts.concat(carts[1])
    }

    }
  }

*/

function total() {

  var a
  var b = 0
  for (var i = 0; i < cart.length; i++) {

    a = cart[i].itemPrice

    console.log(`a = ${a}`)
    b = b + a
    console.log();(`b = ${b}`)
    }
    return b

}
total()
function removeFromCart(item) {
  delete cart.item
}

function placeOrder(cardNumber) {
  // write your code here
}
