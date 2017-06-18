var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 console.log("IS THIS THING ON?")
 var price = getRandomInt(0,100)
 var itemObject = { [item]: 0 }
 itemObject[item] = price
 console.log("itemObject" + itemObject)
 cart.push(itemObject)
 console.log(item + " has been added to your cart.")
 return cart
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
    return
  } else if (cart.length === 1) {
      var tmpObj = cart[0]
      var itm = Object.keys(tmpObj)[0]
      var price = tmpObj[itm]
      console.log("In your cart, you have " + itm + " at $" + price + ".")
      return
    } else if (cart.length === 2) {
        var tmpObj1 = cart[0]
        var tmpObj2 = cart[1]
        var itm1 = Object.keys(tmpObj1)[0]
        var itm2 = Object.keys(tmpObj2)[0]
        var price1 = tmpObj1[itm1]
        var price2 = tmpObj2[itm2]
        var str = "In your cart, you have " + itm1 + " at $" + price1 + " and "
        str = str + itm2 + " at $" + price2 + "."
        console.log(str)
        return
    }
    if (cart.length > 2) {
        var str = ""
        for (var i=0;i<(cart.length - 1);i++) {
          var tmpObj = cart[i]
          var itm = Object.keys(tmpObj)[0]
          var price = tmpObj[itm]
          str = str + itm + " at $" + price + ", "
        }
      //last one in list
        var tmpObj = cart[cart.length-1]
        var itm = Object.keys(tmpObj)[0]
        var price = tmpObj[itm]
        str = str + "and " + itm + " at $" + price + "."
        str = "In your cart, you have " + str
        console.log(str)
    }
  return
}

function total() {
  // write your code here
  var total = 0
  for (var i=0;i<(cart.length);i++) {
    var tmpObj = cart[i]
    var itm = Object.keys(tmpObj)[0]
    total = total + parseInt(tmpObj[itm])
  }
  return total
}

function removeFromCart(item) {
  // write your code here
  for (var i=0;i<cart.length;i++) {
    var tmpObj = cart[i]
    if (tmpObj.hasOwnProperty(item)) {
      cart.splice(i,1)
      return cart
    }
  }
  console.log("That item is not in your cart.")
  return
}


function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber) {
    console.log("Sorry, we don\'t have a credit card on file for you.")
  }
  else {
    var tl = total()
    console.log(`Your total cost is \$${tl}, which will be charged to the card ${cardNumber}.`)
    cart = []; //empty cart
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
