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
 cart.push({itemName:item, itemPrice:Math.floor(Math.random() * 100)})
 return `${item} has been added to your cart.`
}

// below is test data that was used after addToCart() passed tests
addToCart("vanilla");
addToCart("watermelon");
addToCart("yams");

function viewCart() {
  /* learned difference between using const, let and var here:
     https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75
     commented lines below are for testing using nodejs index.js */
  var output = [];
  var intro = "In your cart, you have "
  if (!cart.length){
    return "Your shopping cart is empty."
  }
  else {
    for(var count = 0; count < cart.length; count++) {
      const values = Object.values(cart[count])
      output.push([`${values[0]} at $${values[1]}`])
      //console.log(output.length)
      //console.log(output)
    }
    if (output.length === 1) {
      intro += output + "."
      //console.log(intro)
    }
    else if (output.length === 2) {
      intro += (output[0] + ", and " + output[1] + ".")
      //console.log(output.length)
      //console.log(intro)
    }
    else if (output.length > 2) {
      var removeperiod = output.pop()
      var addcomma = output.join(", ")
      intro += (addcomma + ", and " + removeperiod + ".")
      //console.log(intro)
    }
    return intro
}
}

function total() {
  // write your code here
  var sum = []
  var final = 0
  for(let count = 0; count < cart.length; count++) {
    const values = Object.values(cart[count])
    sum.push([`${values[1]}`])
  }
  for(let i = 0; i < sum.length; i++) {
    //console.log(sum[i])
    final += parseInt(sum[i])
  }
  //console.log(sum)
  //console.log(final)
  return final
}

//total()
//var sum = []

function removeFromCart(item) {
  // write your code here
  for(let count = 0; count < cart.length; count++) {
    console.log(Object.values(cart[count])[0])
    if (Object.values(cart[count])[0] == item) {
      cart = [...cart.slice(0,count), ...cart.slice(count + 1)]
      return cart
    }
  }
  return "That item is not in your cart."
}

//removeFromCart("watermelon")
//removeFromCart("yams")

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber === parseInt(cardNumber, 10)) {
    let bill = total()
    cart = []
    return `Your total cost is $${bill}, which will be charged to the card ${cardNumber}.`
  }
  else {
    return "Sorry, we don't have a credit card on file for you."
  }
  
}