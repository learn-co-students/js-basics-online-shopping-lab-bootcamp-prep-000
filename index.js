var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
   function setPrice() {
     return Math.floor(Math.random() * (100 - 1) + 1)
   }
   var price = setPrice()
   var newItem = {
        [item]: price
   }
   var itemIndex = cart.push(newItem);
   console.log(`${item} has been added to your cart.`)
   return getCart()
 }

function viewCart() {
    var len = cart.length;
    if (len === 0) {
        console.log('Your shopping cart is empty.');
    } ;
    if (len === 1) {
        console.log(`In your cart, you have ${Object.keys(cart[0])[0]} at \$${cart[0][Object.keys(cart[0])[0]]}.`);
    };
    if (len === 2) {
        console.log(`In your cart, you have ${Object.keys(cart[0])[0]} at \$${cart[0][Object.keys(cart[0])[0]]} and ${Object.keys(cart[1])[0]} at \$${cart[1][Object.keys(cart[1])[0]]}.`);
    };
    var message = 'In your cart, you have ';
    for (var i = 0; i < len; i++) {
        if (i === len - 1) {
            message += `and ${Object.keys(cart[i])[0]} at \$${cart[i][Object.keys(cart[i])[0]]}.`
            console.log(message)
        } else {
            message += `${Object.keys(cart[i])[0]} at \$${cart[i][Object.keys(cart[i])[0]]}, `
        }
    }
}

function total() {
    var total = 0;
    for (var i = 0; i < cart.length; i++) {
        total += cart[i][Object.keys(cart[i])[0]]
    }
    return total
}

function removeFromCart(item) {
    function isInCart(item) {
    var isInCart = false;
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].hasOwnProperty(item)) {
            isInCart = true;
        }
    }
    return isInCart;
}
    if (isInCart(item)) {
        for (var i = 0; i < cart.length; i++) {
            if (cart[i].hasOwnProperty(item)) {
                cart.splice(i, 1);
            }
        }
    } else {
        console.log('That item is not in your cart.')
    }
    console.log(cart)
}

function placeOrder(cardNumber) {
      if (cardNumber === undefined) {
          console.log('Sorry, we don\'t have a credit card on file for you.')
       } else {
         console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
         cart = [];
       }

}
