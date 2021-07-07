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
 let price = Math.floor( Math.random() * 100 );
 cart.push( { [item]: price } );
 console.log( `${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
  if ( cart.length === 0 ) {
    console.log( `Your shopping cart is empty.` );
  } else {
    let cartArrayLeft = [ `In your cart, you have ` ];
    let cartArrayRight= [];
    for ( let i = 0; i < cart.length; i++ ) {
      let itemName = Object.keys( cart[i] )[0];
      let itemPrice = cart[i][itemName];
      let itemDescription = `${itemName} at \$${itemPrice}`;

      if ( cart.length === 1 ) {
        cartArrayLeft.push( itemDescription, `.` );
        console.log( cartArrayLeft.join('') );
      }
      else if ( cart.length === 2 ) {
        if ( i === cart.length - 1 ) {
          cartArrayRight.push( ` and ${itemDescription}.` );
          console.log( cartArrayLeft.join('') + cartArrayRight.join('') );
        } else {
          cartArrayLeft.push( itemDescription )
        }
      }
      else if ( cart.length >= 3 ) {
        if ( i === cart.length -1 ) {
          cartArrayRight.push( `, and ${itemDescription}.` );
          console.log( cartArrayLeft.join('') + cartArrayRight.join('') );
        }
        else if ( i === 0 ) {
          cartArrayLeft.push( itemDescription );
        } else {
          cartArrayLeft.push( `, ${itemDescription}` );
        }
      }
    }
  }
}

function total() {
  // write your code here
  let total = 0;
  for ( let i = 0; i < cart.length; i++ ) {
    let itemName = Object.keys( cart[i] )[0];
    let itemPrice = cart[i][itemName];
    total += itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  for (let i = 0; i < cart.length; i++ ) {
    if ( typeof( cart[i] ) != "undefined" && cart[i].hasOwnProperty( item ) ) {
      delete cart[i];
      cart = cart.filter( Boolean );
      return cart;
    }
  }
  console.log( 'That item is not in your cart.' );
}

function placeOrder(cardNumber) {
  // write your code here
  let totalCost = total();
  if ( typeof cardNumber === "undefined" ) {
    console.log( "Sorry, we don't have a credit card on file for you." );
  } else {
    console.log( `Your total cost is \$${totalCost}, which will be charged to the card ${cardNumber}.`);
    cart.length = 0;
  }
}
