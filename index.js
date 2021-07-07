var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push ({[item]:(Math.floor(Math.random()*10))});
 console.log (`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  var cartList = "In your cart, you have ";
  for (var count = 0; count <= cart.length-1; count ++)
  {
    // cart[count] -- individual item:price object
    var itemName = Object.keys(cart[count])[0];
    var itemPrice = Object.values(cart[count])[0];
    var itemClause = `${itemName} at $${itemPrice}, `;

    if (cart.length === 2 && count ===1)
    {
      cartList = cartList.slice(0,cartList.length-2) + " and " +itemClause;
    }
    else if (cart.length > 2 && count === cart.length-1)
    {
      cartList = cartList + "and " +itemClause;
    }
    else
      cartList += itemClause;

  }
  if (cart[0]===undefined)
    console.log ("Your shopping cart is empty.")
    else
    console.log (cartList.slice(0, cartList.length-2)+".");
}

function total() {
  var cartTotal = 0;
  for (var count = 0; count <= cart.length-1; count ++)
  {
    // cart[count] -- individual item:price object
    var itemPrice = Object.values(cart[count])[0];
    cartTotal += itemPrice;
  }
  return cartTotal;
}

function removeFromCart(item)
{
  var oldLength = cart.length;
  for (var count = 0; count <= cart.length-1; count ++)
  {
    // cart[count] -- individual item:price object
    var itemInCart = Object.keys(cart[count])[0];
    if (itemInCart === item)
      var x = cart.splice(count,1);
  }

  if (oldLength === cart.length)
    console.log("That item is not in your cart.");
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined)
    console.log("Sorry, we don't have a credit card on file for you.")
  else
  {
    console.log (`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = [];
  }
}
