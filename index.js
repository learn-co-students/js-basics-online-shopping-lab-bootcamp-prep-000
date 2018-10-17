var cart = [];

function addToCart (item) {
  var price = Math.floor(100*(Math.random()));
  var itemObj = {[item]: price};
  cart.push(itemObj);
  console.log(`${item} has been added to your cart.`);
  return cart;
}


addToCart('glove')
addToCart('ball')
addToCart('skis')
addToCart('shoes')

function viewCart() {
  var cartItems = [];
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.')

  } else if (cart.length === 1) {
    var printOneItem = `In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`
    console.log(printOneItem)

  } else if (cart.length === 2) {
    var printTwoItems = `In your cart, you have ${Object.keys(cart[cart.length-2])} at $${cart[cart.length-2][Object.keys(cart[cart.length-2])]} and ${Object.keys(cart[cart.length-1])} at $${cart[cart.length-1][Object.keys(cart[cart.length-1])]}.`
    console.log(printTwoItems)
  
    
  } else {
      for (var i = 0; i < cart.length-1; i++)
      {
        //console.log(cart[i]);
        cartItems.push(` ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`);
      }
      
      var printThreeOrMoreItems = `In your cart, you have${cartItems}, and ${Object.keys(cart[cart.length-1])} at $${cart[cart.length-1][Object.keys(cart[cart.length-1])]}.`
      console.log(printThreeOrMoreItems);
  }
}

viewCart(cart);


function total() {
  var pricePerItemInCart = [];
  var totalPrice = 0
  
  for(var i = 0; i < cart.length; i++)
  {
    var itemPrice = cart[i][Object.keys(cart[i])]
    pricePerItemInCart.push(itemPrice)
    
    for (var j =0; j<pricePerItemInCart.length; j++)
    {
      totalPrice = pricePerItemInCart[j]+=totalPrice;
    }
    return totalPrice
  }
}
total(cart);

function removeFromCart(item) {
  for (var i = 0; i <cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1)
      return cart
    } 
  }
  console.log('That item is not in your cart.')
  return cart
}

removeFromCart('skis');
  
  
function placeOrder(cardNumber) {
  if(cardNumber) 
  {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    for (var i = cart.length; i>= 0; i--)
    { cart.pop();} 
  }
  else 
  {
    console.log('Sorry, we don\'t have a credit card on file for you.')
    return cart;
  }
}

placeOrder();