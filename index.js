var cart = [];

function getCart() {
  return cart;
}

function setCart(c) {
  cart = c
  return cart;
}

function addToCart(item) {
  var price = Math.ceil(Math.random()*100)
  cart.push({itemName: item, itemPrice: price})
  return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  }
  
  var newArray = [];
    for (var i = 0; i < cart.length; i++) {
      var name = Object.values(cart[i])[0];
      newArray.push(name + " at $" + cart[i].itemPrice)
    }
    
    var myString = "In your cart, you have ";
    if (newArray.length === 1) {
      myString += newArray + "."
    } else if (newArray.length === 2) {
      myString += (newArray[0] + "," + " and " + newArray[1] + ".")
    } else if (newArray.length > 2) {
      var lastElement = newArray.pop()
      var otherItem = newArray.join(", ")
      myString += (otherItem + ", and " + lastElement + ".")
    }
    return myString
}

function total() {
  // write your code here
  var totalCost = 0;
  for(var i = 0; i < cart.length ; i++){
    totalCost += cart[i].itemPrice;
  }
  return totalCost;
}

  function removeFromCart(item) {
  // write your code here
  var itemInCart = false;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i,1);
      itemInCart = true;
    }
  }
  if(itemInCart){
    return cart;
  }
  return "That item is not in your cart.";
}


function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber === undefined){
    return "Sorry, we don't have a credit card on file for you."
  }
  var totalCost = total();
  cart = [];
  return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`
}