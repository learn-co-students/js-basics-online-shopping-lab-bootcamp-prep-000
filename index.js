var cart = [];

function getCart() {
  return cart;
}

function addToCart(item) {
  //This function should automatically set a price for this item
  //by generating a random number between 0 and 100.
  var price = Math.floor(Math.random() * 100);

  // This function should add the item and
  // the price as an object ({item: price}) to the cart array.
  var tmp = {};
  tmp[item] = price;
  cart.push(tmp);

  //This function should print out to the console <item>
  //has been added to your cart.
  console.log(`${item} has been added to your cart.`);

  //and return the cart.
  return cart;
}

//Define a function viewCart which does not accept any arguments.
function viewCart() {
  var tmp = '';
    if (cart.length === 0)
    {
      console.log('Your shopping cart is empty.');
      return undefined;
    }
    else
    {
      tmp = `In your cart, you have `;

      for (var i = 0; i < cart.length; i++) {
        for (var key in cart[i]) {
          let tmpKey = key;
          let tmpVal = cart[i][key];
          if (i === (cart.length - 1)) {
            tmp = tmp + `${tmpKey} at $${tmpVal}.`;
          } else {
            tmp = tmp + `${tmpKey} at $${tmpVal}, `;
          }
        }
      }
    }
    console.log(tmp);
    return undefined;
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

function removeFromCart(item) {
  // if item is not in cart print that the item is not in cart
  //if the item is in the cart remove it from the object
  for (var x = 0; x < cart.length; x++) {
    if (cart[x].hasOwnProperty(item)) {
      cart.splice(x,1);
      return undefined;
    } else {
    }
  }
console.log("That item is not in your cart.");
return undefined;
}

function placeOrder(ccNum) {
  if (arguments.length !== 1) {
    console.log("We don't have a credit card on file for you to place your order.");
    return 0;
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${ccNum}.`);
    cart = [];
    return 0;
  }

}
