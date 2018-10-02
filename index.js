// also see draft.js
var cart = [];

function getCart() {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  // create template object
  const genericItem = {
    itemName: '',
    itemPrice: '',
    }

  function generatePrice(max, min) {
    // get random integer
    return Math.floor(Math.random() * (max - min) + min);
  }
  // initialise new item
  const newItem = Object.create(genericItem);
  // assign values
  newItem.itemName = item;
  newItem.itemPrice = generatePrice(100, 1);
  // add item to cart and return item added message
  cart = [...cart, newItem];
  return `${item} has been added to your cart.`
}

function viewCart() {
  var currentCart = cart[0];
  if (currentCart == undefined) {
    return "Your shopping cart is empty."
  } else {
    var cartString = [];
    cart.forEach(function(element, index, array) {
          cartString.push(`${element.itemName} at $${element.itemPrice}`);
          if (array.length == index + 1 && array.length != 1) {
            cartString.splice(cartString.length - 1, 0, 'and ')
            }
          if (array.length == index + 1) {
            cartString.push('.');
            cartString.unshift(`In your cart, you have `);
          }
      	  if (array.length != index + 1) {
            cartString.push(', ');
          }
    });
    return cartString.join('')
  }
}

function total() {
  var total = 0
  cart.forEach(function(item) {
    total = total + item.itemPrice;
  });
  return total
}

function removeFromCart(item) {
  var checkArray = [];
  cart.forEach(function(element) {
                 if (element.itemName == item) {
                   checkArray.push(true)
                 } else {
                   checkArray.push(false)
                 }
               });
  if (checkArray.includes(true)) {
    cart.forEach(function(value, index, array) {
      if (value.itemName == item) {
        cart.splice(index, 1)
      }
    });
    return cart
  } else {
    return `That item is not in your cart.`
  }
}

function placeOrder(cardNumber) {
  if (cardNumber != undefined) {
    var msg = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    setCart([])
    return msg
  } else {
    return `Sorry, we don't have a credit card on file for you.`
  }
}
