var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

// Modify the cart's item objects to make them easier to work with
function getModifiedCart(cart) {
  var modified = [];
  for (let i = 0; i < cart.length; i++) {
    var item = Object.keys(cart[i])[0];
    var price = cart[i][item];
    modified.push(
      { item: item,
        price: price }
    );
  }
  return modified;
}

function addToCart(item) {
 var price = Math.floor(Math.random() * 100);
 var itemObj = { [item]: price };
 cart.push(itemObj);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else {
    var tally = "In your cart, you have ";
    var lastIndex = cart.length - 1;
    var modCart = getModifiedCart(cart);
    for (let i = 0; i < cart.length; i++) {
      var item = modCart[i].item;
      var price = modCart[i].price;
      if (i === lastIndex) {
        tally += `${item} at $${price}.`;
      } else if (i === lastIndex - 1) {
        if (cart.length === 2) {
          tally += `${item} at $${price} and `;
        } else {
          tally += `${item} at $${price}, and `;
        }
      } else {
        tally += `${item} at $${price}, `;
      }
    }
    console.log(tally);
  }
}

function total() {
  return getModifiedCart(cart).reduce( function(acc, item) {
    return acc + item.price; 
  }, 0);
}

function removeFromCart(item) {
  var cartItems = getModifiedCart(cart).map( function(item) {
    return item.item;
  });
  var itemIndex = cartItems.indexOf(item);
  if (cartItems.includes(item)) {
    cart.splice(itemIndex, 1);
  } else {
    console.log("That item is not in your cart.");
  }
  return cart;
}

function placeOrder(cardNumber) {
  if (typeof cardNumber === 'undefined') {
    console.log("Sorry, we don't have a credit card on file for you.");
  } else {
    var totalCost = total();
    console.log(`Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`);
    setCart([]);
  }
}
















