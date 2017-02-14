var cart = [];
var price;
var tempVar = [];
var itemVar;

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart() {
  return cart;
}

function addToCart( item ) {
  price = Math.random() * 100;
  price = Math.floor(price);

  // cart.push( `${item} ${price}` );
  cart.push({[item]:price})
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
   if( !cart.length ) {
     console.log('Your shopping cart is empty.');
   }

   for( let i = 0; i < cart.length; i++ ) {
     var itemAndPrice = cart[i]
     var item = Object.keys(itemAndPrice)[0]
     var price = itemAndPrice[item]
      tempVar.push(`${item} at \$${price}`)
   }

    console.log(`In your cart, you have ${tempVar.join(', ')}.`);
}

function removeFromCart( name ) {
    var currentItem;
    var indexToRemove = null;

     for( var i = 0; i < cart.length; i++ ) {
       currentItem = cart[i]

       if(currentItem[name]) {
         indexToRemove = i;
       }
     }

   if(indexToRemove !== null) {
     cart.splice(indexToRemove, 1);
     return cart
   } else {
     console.log("That item is not in your cart.")
   }
}

function placeOrder( cardNumber ) {
   //var indexToRemove = null;
   var totalPrice = 0;
   var currentItem;


    for( var i = 0; i < cart.length; i++ ) {
        // gets first emement in cart and puts in currentItem
        // adds totalPrice = totalPrice + currentItem (to add the prices together)
        var item = cart[i]
        totalPrice += item[Object.keys(item)[0]];
        cart.splice(item, 1);


    }
    if(cardNumber){
          console.log(`Your total cost is \$${totalPrice}, which will be charged to the card ${cardNumber}.`);
    } else {
          console.log(`We don\'t have a credit card on file for you to place your order.`);
    }

    return cart;
}
