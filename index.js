}

 function addToCart(item) {		  function addToCart(item) {
- // write your code here		   //to get random number
    function getRandomInt() {
    return Math.floor(Math.random() * (100 - 1)) + 1;
  }
  //to create object
    var cost = getRandomInt()
    var itemStore = { [item]: cost };
    cart.push(itemStore);
  //to print and return
    console.log(`${item} has been added to your cart.`)
    return cart;
 }		  }

 function viewCart() {		  function viewCart() {
-  // write your code here		     //if cart has no items
    if (cart.length === 0) {
      console.log("Your shopping cart is empty.")
    }
    //if cart has items
    else {
      var cartContains = [];
      var cartCost = [];
    for (var i = 0; i < cart.length; i++ ) {
      cartContains.push(Object.keys(cart[i]))
    }
    for (var i = 0; i < cartContains.length; i++ ) {
      cartCost.push(cart[i][cartContains[i]])
    }
    if (cartContains.length === 1) {
      console.log(`In your cart, you have ${cartContains[0]} at $${cartCost[0]}.`)
    } else if (cartContains.length === 2) {
      console.log(`In your cart, you have ${cartContains[0]} at $${cartCost[0]} and ${cartContains[1]} at $${cartCost[1]}.`)
    } else if (cartContains.length === 3) {
      console.log(`In your cart, you have ${cartContains[0]} at $${cartCost[0]}, ${cartContains[1]} at $${cartCost[1]}, and ${cartContains[2]} at $${cartCost[2]}.`)
    } else {
      console.log(`In your cart, you have ${cartContains[0]} at $${cartCost[0]}, ${cartContains[1]} at $${cartCost[1]}, ${cartContains[2]} at $${cartCost[2]}, and ${cartContains[3]} at $${cartCost[3]}.`)
    }
    }
 }		  }

 function total() {		  function total() {
-  // write your code here		     var cartContains = [];
    var cartCost = [];
    var cartTotal = 0;
  for (var i = 0; i < cart.length; i++ ) {
    cartContains.push(Object.keys(cart[i]))
  }
  for (var i = 0; i < cartContains.length; i++ ) {
    cartCost.push(cart[i][cartContains[i]])
  }
  for (var i = 0; i < cartCost.length; i++ ) {
    cartTotal += cartCost[i]
  }
  return cartTotal
 }		  }

 function removeFromCart(item) {		  function removeFromCart(item) {
-  // write your code here		     var cartContains = [];
    var itemIndex = 0;
    function identifyItem(element) {
      return element == item
    }
  for (var i = 0; i < cart.length; i++ ) {
    cartContains.push(Object.keys(cart[i]))
  }
  itemIndex = cartContains.findIndex(identifyItem);
    if (itemIndex !== -1) {
      cart.splice(itemIndex, 1)
      return cart
    } else {
      console.log("That item is not in your cart.")
      return cart
    }
 }		  }

 function placeOrder(cardNumber) {		  function placeOrder(cardNumber) {
-  // write your code here		     if (cardNumber == undefined) {
      console.log("Sorry, we don't have a credit card on file for you.")
    } else {
      var totalCost = total()
      var cardCost = cardNumber
      console.log(`Your total cost is $${totalCost}, which will be charged to the card ${cardCost}.`)
      cart = [];
      return cart
    }
 }		  }
