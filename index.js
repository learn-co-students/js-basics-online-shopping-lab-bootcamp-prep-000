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
var items = ""
var item
var price
var itemOne
var itemTwo
var length = cart.length
  if (cart.length === 0) {
    return "Your shopping cart is empty."
}     else if  (length === 1) {
        item = cart[0].itemName
        price = cart[0].itemPrice
        items = carts + item + " at " + "$" + price

          return carts + item + " at " + "$" + price + "."
}        else if (length === 2) {
  //debugger
 itemOne = cart[0]
itemTwo = cart[1]
          var sentence =  itemOne.itemName + " at " + "$" + itemOne.itemPrice + ", and " + itemTwo.itemName + " at " + "$" + itemTwo.itemPrice + "."
          return carts + sentence
        }

        else if (length > 2) {
          for (var i = 0; i < cart.length; i++) {
            //cart[i]
            if (length - 1 === i) {
//debugger
              items = items + "and " + cart[i].itemName + " at " + "$" + cart[i].itemPrice + "."
              return carts + items
            }
            item = cart[i].itemName
            price = cart[i].itemPrice
            items += item + " at " + "$" + price + ", "

          }
          }
}
//debugger


        //return carts + items +"."


viewCart()

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
for (var i = 0; i < cart.length; i++) {
if (item === cart[i].itemName) {
  var item = cart[i].itemName
  cart.splice(i,1)
  return cart
}



}
  return 'That item is not in your cart.'


}
function placeOrder(cardNumber) {
var price
var totalz = 0
  if (cardNumber) {
    total()
    for (var i = 0; i < cart.length; i++) {
      price = cart[i].itemPrice
      totalz = totalz + price
      //debugger
    delete cart[i]
    }
    cart = []
    return `Your total cost is $${totalz}, which will be charged to the card ${cardNumber}.`
  }
  else {
    return "Sorry, we don\'t have a credit card on file for you."
  }

  // write your code here
}
