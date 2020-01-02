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
 const price = Math.floor(Math.random() * 100)
 cart.push({itemName: item, itemPrice: price})

 return `${item} has been added to your cart.`

return cart
}

function viewCart() {
  // write your code here
  if(!cart.length) {
    return "Your shopping cart is empty."
  }

  const itemAndPrices = []


  let intro = "In your cart, you have"

 for (let i in cart ) {
    itemAndPrices.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
  }

  if (cart.length == 1)
  {
        return `${intro} ${itemAndPrices}.`
   } else if (cart.length > 1)
   {
       let lastItem = itemAndPrices.splice(cart.length -1, 1)
       let end = itemAndPrices.join(', ')
       return `${intro} ${end}, and ${lastItem}.`
   }
}


function total() {
  // write your code here
  let result = 0
  for(let i in cart) {
    result += cart[i].itemPrice
  }
  return result
}

function removeFromCart(item) {
  // write your code here
  for(let i = 0; i < cart.length; i++) {
    if(cart[i].itemName == item) {
    cart.splice(i, 1);
    return cart;
  }
  }
  
  return 'That item is not in your cart.'; 
  
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber == undefined) {
    return "Sorry, we don't have a credit card on file for you.";
  }
  if(cardNumber) {
    let msg = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
    cart = [];
  return msg;
  }
  
  
  
}
