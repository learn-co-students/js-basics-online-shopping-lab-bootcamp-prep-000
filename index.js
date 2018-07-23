let cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function randomPrice (item) {
  let price = Math.floor((Math.random() * 100) + 1)
  return price
}

function addToCart(item) {
    let cartItem = {itemName: item, itemPrice: randomPrice(item)}
    cart.push(cartItem)
    return `${item} has been added to your cart.`
}

function viewCart() {
  
  if (cart.length === 0) {
    return 'Your shopping cart is empty.'
  } 
  
  let stringInYourCart = 'In your cart, you have '
  let name = ""
  let price = ""
  let message = ""
  let max = cart.length - 1;
  
  for (let i = 0; i < cart.length; i++) {
    name =  cart[i].itemName
    price = cart[i].itemPrice
    
    if (i === 0) {
      message = `${name} at $${price}` 
    }
        
    else if (i < max) {
      message = `, ${name} at $${price}`      
    }

    else if (i === max){
      message = `, and ${name} at $${price}`
    }

    stringInYourCart += message
  }
  return `${stringInYourCart}.`
}


// HOW COULD I DO TOTAL FUNCTION USING FOR EACH????
// cart.forEach((element, index) => {
//     return(element.itemPrice)
// })

function total() {
  let total = 0
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].itemPrice
  }
  return total
  
  // return cart.reduce((accumulator, cartItem) => accumulator + cartItem.itemPrice, 0)
}


function removeFromCart(item) {
  for (let i=0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i,1)
      return cart
    }
  }
  return 'That item is not in your cart.'
}


// var found = false;
// for(var i = 0; i < vendors.length; i++) {
//     if (vendors[i].Name == 'Magenic') {
//         found = true;
//         break;
//     }
// }


function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    let totalCostToCharge = total()
    cart.length = 0
    return `Your total cost is $${totalCostToCharge}, which will be charged to the card ${cardNumber}.`
  }
}







