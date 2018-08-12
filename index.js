var cart = [
  {
    itemName: "Mango",
    itemPrice: 16
  },
  {
    itemName:"Nuts",
    itemPrice:20
  },
  {
    itemName: "Nuts",
    itemPrice: 25
  }
];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

// Add to cart takes an ingrediant of type string and
// returns an object with the two keys {itemName: String, itemPrice: Float}


// addToCart(String) = {key: value, key: value}
function addToCart(item) {
  // create new oject
  var newObject = {}

  // add itemName Key and Value
  newObject["itemName"] = item

  // add itemPrice Key and Value
  newObject["itemPrice"] = Math.floor(Math.random() * 100) + 1
  cart.push(newObject)

  return `${item} has been added to your cart.`
}

// Viewcart loops every item in our cart array of objects and returns
// a coherent


// viewCart() = SOME String
//            = NONE "Your shopping cart is empty."
function viewCart() {
  // special case if there are no items in the cart
  if(cart.length === 0){
    return "Your shopping cart is empty."
  } else {
    // create empty array
    var newArray = [];

    for(var i = 0; i < cart.length; i++){
      // special case for first item
      if(i === 0){
        newArray.push(`In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}`)
      }
      // special case for last item
      else if(i + 1 === cart.length){
        console.log("hi")
        newArray.push(` and ${cart[i].itemName} at $${cart[i].itemPrice}`);
      }else {
        // convert the Array of Objects into an Array of String
        newArray.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`)
      }
    }
    // In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.
      return `${newArray.toString()}.`
  }
}





// The total() function accepts no arguments,
// iterates through the cart array, and returns
// the current total value of the items in the cart.

// total() = total value of all the items in the cart
function total() {
  var total = 0
  for(var i = 0; i < cart.length; i++){
    total += cart[i].itemPrice
  }
  return total
}


// The removeFromCart() function accepts one argument,
// the name of the item that should be removed.

// removeFromCart(String) = cart, removes Item
//                                from cart and returns updated cart
function removeFromCart(item) {
  var removed = []
  // check if the item is present in the cart
  // first go through each item in the cart until we find the item
    for(var i = 0; i < cart.length; i++){
      // if we find the item
      if(item === cart[i].itemName){
        // then we want to remove it from the cart
        removed.push(cart.splice(i,1));
        i--
      }
  }
  // check if nothing has been removed
  if(removed.length === 0){
    return "That item is not in your cart."
  } else{
    return cart
  }
}


// The placeOrder() function accepts one argument, a credit card number.

// placeOrder(cardNumber: Int) = NONE, Sorry, we don't have a
//                                     credit card on file for you
//                               SOME [], Empty Cart Array and return for example
//                                     "Your total cost is $71, which will be
//                                      charged to the card 83296759."



// The checkIfRealCard() function accepts on argumen, a credit card number.
// It checks if the card is not an empty array or null or undefined, etc.
// If it is not a real card, we return false. Everything else true.


// checkIfRealCard(cardNumber: 'a) = bool
function checkIfRealCard(cardNumber){
  if(cardNumber){
    if(Array.isArray(cardNumber)){
      if(cardNumber.length === 0){
        return false
      } else{
        return true
      }
    }
    return true
  } else {
    return false
  }
}

// The placeOrder() function accepts one argument, a credit card number.

// placeOrder(cardNumber: 'a) = NONE, Sorry, we don't have a
//                                     credit card on file for you
//                               SOME [], Empty Cart Array and return for example
//                                     "Your total cost is $71, which will be
//                                      charged to the card 83296759."
function placeOrder(cardNumber) {
  var cartTotal = total();
  // check if cardNumber is not empty
  if(checkIfRealCard(cardNumber)){
    //empty the cart
    cart = []
    return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`
  } else{
    return "Sorry, we don't have a credit card on file for you."
  }
}

