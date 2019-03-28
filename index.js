var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  
  let price = Math.floor(Math.random()*100)
  let newCart = {  'itemName': item, 
                    'itemPrice': price 
                  };
  cart.push(newCart);      
  return `${newCart.itemName} has been added to your cart.`;
}

function viewCart() {
  let cartSt = "In your cart, you have";
  let cartItms = ""
  if (cart.length === 0) {
      return `Your shopping cart is empty.`
  } else if (cart.length === 1) {
        return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
  else {
          for (let i = 0; i < cart.length; i++) {
              
                if (i === cart.length-1) {
                  cartItms += "and "
                  cartItms += `${cart[i].itemName} at $${cart[i].itemPrice}.`
                } else {
                  cartItms += `${cart[i].itemName} at $${cart[i].itemPrice}, `
                }
                      
         }
    }
  return `${cartSt} ${cartItms}`;
}

function total() {
  let totItems = 0
  let totValue = 0
  for (let i = 0; i < cart.length; i++) {
    totValue += cart[i].itemPrice
  }
  return totValue
}

function removeFromCart(item) {
  let removedItems = false
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1)
      removedItems = true
    }
  }
  if (removedItems) {
    return cart
  } else {
    return 'That item is not in your cart.'
  }
  
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return `Sorry, we don\'t have a credit card on file for you.`
  } else {
    let totalCharge = total()
    cart.length = 0
     return `Your total cost is $${totalCharge}, which will be charged to the card ${cardNumber}.`
     
    
  }
}
