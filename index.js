var cart = [];

function getCart() {
  return cart;
}

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

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  cart.push({[item]:price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var tempArray = [];
  if(!cart.length){
    console.log("Your shopping cart is empty.");
  } else{
    for(let i = 0; i < cart.length; i++){
      var itemWithDetails = cart[i];
      var item = Object.keys(itemWithDetails)[0];
      var price = itemWithDetails[item];
      tempArray.push(`${item} at \$${price}`);
    }
    console.log(`In your cart, you have ${tempArray.join(', ')}.` );
  }
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
