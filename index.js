var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random() * 99)
 cart.push(new Object({itemName:[item], itemPrice:price}))
 return item + ' has been added to your cart.'
}

//i need to learn more about math.floor and math.random. This function adds a new object in the cart variable in the format of "itemName: item, itemPrice:price."

var cartList = []
var shoppingCart = 'In your cart, you have '

function viewCart() {
    if(cart.length === 0) return "Your shopping cart is empty."
    
    if(cart.length === 1) {
      return `${ shoppingCart }${ cart[0].itemName } at $${ cart[0].itemPrice }.`
    }
    
    if(cart.length === 2) {
      return `${ shoppingCart }${ cart[0].itemName } at $${ cart[0].itemPrice }, and ${ cart[1].itemName } at $${ cart[1].itemPrice }.`
    }
    
    for(var i = 0; i < cart.length; i++) {
      cartList.push(cart[i].itemName + " at $" + cart[i].itemPrice)
    }
    return shoppingCart + cartList.slice(0 , -1).join(", ") + `, and ` + cartList.slice(-1) + `.`;
}

// created two variables to make this function work: cartList and shoppingCart. cartList is an array and shoppingCart is a string.

// The function itself returns "Your shopping cart is empty." if nothing in cart, "In your cart, you have xxx at $xxx." if you have one thing, "In your cart, you have xxx at $xxx and xxx at $xxx." if you have two things, and the same template, but with commas for everything except the last item, which ends in an "and"



function total() {
  var totalItems = 0;
  
  for (var i = 0; i < cart.length; i++) {
    totalItems += cart[i].itemPrice;
  }
  return totalItems 
}

// basically, i created a variable here, totalItems, and equalled it to 0. Then I used a for loop that basically said that as long as the variable i is under the length of the amount of objects in the array, it will sum the value of all the prices of the items in the cart and push that number into the totalItems variable. Once that is done, the function will return totalItems to display the total.

function removeFromCart(item) {
  for(var i = 0; i < cart.length; i++) {
    if(cart[i].itemName == item) {
      cart.splice(i, 1)
      return cart
    }
  }
  return "That item is not in your cart."
}

// still trying to figure out where to put the reutrn functions in what bracket section, but basically what the above function does is check if the item is already in the cart, and removes that item from the cart if so. If not, the statement "That item is not in your cart." will be returned

function placeOrder(cardNumber) {
  var emptyCart = []
  
  if(cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  }
  else {
    emptyCart.push(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
    return emptyCart
  }
  
}
