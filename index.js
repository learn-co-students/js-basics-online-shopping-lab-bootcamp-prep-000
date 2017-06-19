var cart = [];


function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
    var itemPrice = Pricy();
    var I = { [item]: itemPrice };
      function Pricy() {
        return Math.floor(Math.random() * (100)) + 1;
      }
      cart.push(I);
      console.log(`${item} has been added to your cart.`)
      return cart
  }

  function viewCart() {
    var pieces = [];
    for (let i = 0; i < cart.length; i++) {
       var item = Object.keys(cart[i])[0];
       var itemPrice = cart[i][item];
       var piece = `${item} at $${itemPrice}`
       piece
       pieces.push(piece);
    }
    if (cart.length === 1) {
          console.log("In your cart, you have " + pieces.join(', ') + ".")
    }
    else if (cart.length === 2) {
          console.log("In your cart, you have " + pieces[0] + " and " +  pieces[1] + ".")
    }
    else if (cart.length > 2) {
          var lastPiece = pieces.slice(-1)
          pieces.pop()
          console.log("In your cart, you have " + pieces.join(', ') + ", and " + lastPiece + ".")
    }
    else {
        console.log("Your shopping cart is empty.");
    }
  }


function total() {
  var cost = [];
  for (let i = 0; i < cart.length; i++) {
     var item = Object.keys(cart[i])[0];
     var itemPrice = cart[i][item];
     cost.push(itemPrice)
  }
  var total = cost.reduce((a, b) => a + b)
  return total
}

function removeFromCart(item) {
  for ( let i = 0; i < cart.length; i++ ) {
    if (cart[i].hasOwnProperty(item) === true) {
      cart.splice(i, 1)
      return cart
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  if ( isNaN(cardNumber) === false ) {
   console.log("Your total cost is $" + total() + ", which will be charged to the card " + cardNumber + ".")
   return cart = [];
  }
  console.log("Sorry, we don't have a credit card on file for you.")
}
