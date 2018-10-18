var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random()*100)
 cart.push({itemName:item , itemPrice:price})
 return`${item} has been added to your cart.`
 return cart
}

function viewCart() {
  if(cart.length === 0) {
    return"Your shopping cart is empty."
  }
  
  var mycart = [];
    for (var i=0; i < cart.length; i++) {
      mycart.push(cart[i].itemName + " at $" + cart[i].itemPrice)  
      
    }
  
      if (cart.length === 1 ) {
          return `In your cart, you have ${mycart[0]}.`
       }  else if (cart.length === 2) {
           return `In your cart, you have ${mycart[0]}, and ${mycart[1]}.`
       }  else if (cart.length > 2) {
            var addeditems = mycart.slice(0, mycart.length - 1)
            return `In your cart, you have ${addeditems.join(", ")}, and ${mycart.pop()}.`
           return `In your cart, you have ${mycart[0]}, and
          ${mycart[1]}.`  
       }
       return cart
}

function total() {
  var total = 0
  for (var i=0; i < cart.length; i++) {
    total = total + cart[i].itemPrice
  }
  return total    
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
     if (cart[i].itemName === item)
     {
      cart.splice(i, 1)
      return cart
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  var newTotal = total()
  if(cardNumber) {
    var checkout = `Your total cost is $${newTotal}, which will be charged to the card ${cardNumber}.`
    cart.length = 0
    return checkout
    }
    
    else if(!cardNumber) {
    return "Sorry, we don\'t have a credit card on file for you."
  }
   return cart
}
