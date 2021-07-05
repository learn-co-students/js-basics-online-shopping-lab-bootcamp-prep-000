var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}
// function adds item to cart.
function addToCart(item) {
//price returns random number betwee 1 and 100
var price = Math.floor(Math.random()*(100 - 1+1) + 1);
// items Obj has items and prices pushed to it before  sending to cart.
 var items = { itemName: `${item}`  , itemPrice: parseInt(`${price}`)   }
 cart.push(items);
 return `${item} has been added to your cart.`
}
     function viewCart() {
          if ( cart.length === 0) { return 'Your shopping cart is empty.'
             } else if ( cart.length === 1) { return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
            } else if ( cart.length === 2) { return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
            } else ( cart.length > 2); { return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice}, and ${cart[2].itemName} at $${cart[2].itemPrice}.`
     }         
     
 }

 function total() {
   var totalUp = 0
   for ( var i = 0; i < cart.length; i++ ) {
       totalUp += cart[i].itemPrice
   }
   return totalUp
}

function removeFromCart(toBeRemoved) {

for (var i = 0; i < cart.length; i++) {
  if ( cart[i].itemName === toBeRemoved) {
    cart.splice(i,1)
}
  }
  return 'That item is not in your cart.'
}

function placeOrder(cardNumber) {
  if (!cardNumber)
  { return (`Sorry, we don't have a credit card on file for you.`)
  } else {  
    var str = (`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
    return str
 } 
  }

        