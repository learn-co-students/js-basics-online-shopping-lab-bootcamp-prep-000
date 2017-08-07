var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;

    return cart;
}

function addToCart(itemName) {
  var itemPrice = Math.floor(Math.random() * 100 + 1);
  var object = { [itemName]: itemPrice}

    cart.push(object)
      console.log(`${itemName} has been added to your cart.`);
        return cart;
 }

function viewCart() {
  var cartList = getCart();

  if (cartList.length === 0) {
    console.log("Your shopping cart is empty.")
  }
  var itemAndPrice = []

  for (var i = 0; i < cartList.length; i++) {
    var itemName = Object.keys(cartList[i])[0]

    itemAndPrice.push(`${itemName} at $${cartList[i][itemName]}`)
  }
  var message = "In your cart, you have "

  if (cartList.length ===1) {
    console.log(message + itemAndPrice + ".")
  }
  else if (cartList.length === 2) {
    console.log(message + itemAndPrice.join(" and ") + ".")
  }
  else if (cartList.length > 2) {
    itemAndPrice[cartList.length -1] = "and ".concat(itemAndPrice[cartList.length -1]).concat(".")
      console.log(message + itemAndPrice.join(", "))
  }
}

function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty."
  }

  const numbersAndNames = []

  for (let i = 0, l = line.length; i < l; i++) {
    numbersAndNames.push(`${i + 1}. ${line[i]}`)
  }

function total() {
  var cartList = getCart();
  var sum = 0

  for (var i=0; i < cartList.length; i++) {
    var itemName = Object.keys(cartList[i]);

    sum = sum + cartList[i][itemName]
  }
   return sum
}

function removeFromCart(item) {
  var cartList = getCart();

  for (var i =0; i < cartList.length; i++) {
    if (cartList[i].hasOwnProperty(item) === true) {
      cartList.splice(i, 1)
        return cartList
          break
    }
  }
   console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  var cartList = getCart()
  var cost = total()

  if (cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
  else {
    console.log(`Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`)
  }
   cart = []
}
