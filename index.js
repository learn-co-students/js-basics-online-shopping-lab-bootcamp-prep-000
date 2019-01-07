var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor(Math.random() * (100 - 1) + 1);
  var cost = new Object({ [item]: itemPrice} );
  var name = [item]
  cart.push(cost);
  console.log(`${item} has been added to your cart.`);
  return cart
}


function viewCart() {
    var text = ["In your cart, you have"]
    if(cart.length === 0) {
      console.log("Your shopping cart is empty.");

    } else if(cart.length === 1) {
         text.push(`${Object.keys(cart[0])[0]} at $${cart[0][Object.keys(cart[0])[0]]}.`);
         console.log(text.join(" "));

    } else if(cart.length === 2) {
         text.push(`${Object.keys(cart[0])[0]} at $${cart[0][Object.keys(cart[0])[0]]} and`);
         text.push(`${Object.keys(cart[1])[0]} at $${cart[1][Object.keys(cart[1])[0]]}.`);
         console.log(text.join(" "));
    } else if(cart.length > 2) {
        for(var i = 0; i <= cart.length - 1; i++) {
          if(i === 0) {
            text.push(`${Object.keys(cart[0])[0]} at $${cart[0][Object.keys(cart[0])[0]]},`);
        } else if (i < cart.length - 1) {
            text.push(`${Object.keys(cart[i])[0]} at $${cart[i][Object.keys(cart[i])[0]]},`);
        } else {
            text.push(`and ${Object.keys(cart[i])[0]} at $${cart[i][Object.keys(cart[i])[0]]}.`);
        }
      }
          console.log(text.join(" "))
    }
}

function total() {
    var cost = []
    for(var i = 0; i <= cart.length - 1; i++) {
       cost.push(`${cart[i][Object.keys(cart[i])[0]]}`)
  }
    var FinalCost = cost.map(Number);
    function getSum(total, num) {
      return total + num
  }
    return(FinalCost.reduce(getSum))
}

function removeFromCart(item) {
  for (var v = 0; v < cart.length; v++) {
    if(cart[v].hasOwnProperty(item)) {
       cart.splice(v, 1)
       console.log(cart)
    }
    }
    console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
    if(cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    var totalcost = total()
    console.log("Your total cost is " + `$${totalcost}` + ", which will be charged to the card " + `${cardNumber}` + ".");
    cart.length = 0
  }
}
