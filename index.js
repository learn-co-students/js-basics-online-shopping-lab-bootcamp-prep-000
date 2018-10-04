var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newItem = { itemName: item, itemPrice: Math.floor(Math.random() * 100) };
  cart.push(newItem);
  return `${item} has been added to your cart.`
}

function viewCart() {
  var cartItems = [];
  for (let i = 0; i < cart.length; i++) {
    cartItems.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
  } if (cart.length === 1) {
    return `In your cart, you have ${cartItems[0]}.`
  } else if (cartItems.length > 1) {
    var lastItem = cartItems.pop();
    return `In your cart, you have ${cartItems.join(", ")}, and ${lastItem}.`
  } else {
    return 'Your shopping cart is empty.'
}
}

function total() {
  var prices = []
  for (let i = 0; i < cart.length; i++) {
    prices.push(parseInt(`${cart[i].itemPrice}`));
  } var total = prices.reduce(add, 0);
    function add(a, b) {
      return a + b;
    }
  return total
}

function removeFromCart(name) {
  var items = []
  let i = 0
  for (let i = 0; i < cart.length; i++) {
    items.push(cart[i].itemName)
  } console.log(items)
  for (let i = 0; i < items.length; i++) {
    if (items[i] === name) {
      cart.splice(i, 1);
  } else {
      return 'That item is not in your cart.'
    }
  }
}

function placeOrder(number) {
  var newTotal = total()
  if (!number) {
    return "Sorry, we don't have a credit card on file for you."
  }
  cart = []
  return `Your total cost is $${newTotal}, which will be charged to the card ${number}.`
}




/*function addToCart(item) {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
  var itemPrice = getRandomInt(1, 100);
  var newItem = { [item]: itemPrice };
  console.log(`${item} has been added to your cart.`)
  cart.push(newItem);
 return cart
}

function viewCart() {
  let l = cart.length
  if (!cart.length) {
      console.log("Your shopping cart is empty.")
    } else if (l == 1) {
        var item = Object.keys(cart[0]);
        var itemPrice = cart[0][item]
        console.log(`In your cart, you have ${item} at $${itemPrice}.`);
      } else if (l == 2) {
          var item = Object.keys(cart[0]);
          var itemPrice = cart[0][item];
          var item2 = Object.keys(cart[1]);
          var item2Price = cart[1][item2];
          console.log(`In your cart, you have ${item} at $${itemPrice} and ${item2} at $${item2Price}.`);
        } else {
          var item = Object.keys(cart[0]);
          var itemPrice = cart[0][item];
          var itemLast = Object.keys(cart[cart.length-1]);
          var itemLastPrice = cart[cart.length-1][itemLast];
          var text = '';
          for (let i = 1; i < cart.length-1; i++) {
            var middleItem = Object.keys(cart[i]);
            var middleItemPrice = cart[i][middleItem];
            text = text + `${middleItem} at $${middleItemPrice}, `
            }
            console.log(`In your cart, you have ${item} at $${itemPrice}, ${text}and ${itemLast} at $${itemLastPrice}.`);
          }
  }

function total() {
  let total = 0
  for (let i = 0; i < cart.length; i++) {
    var item = Object.keys(cart[i]);
    total = (total + parseInt(cart[i][item]));
  }
  return total
}

function removeFromCart(item) {
  var inCart = false;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      inCart = true;
      cart.splice(i, 1);
  }
}
    if (inCart === false) {
    console.log('That item is not in your cart.');
  }
  return cart
}

function placeOrder(cardNumber) {
  if (isNaN(cardNumber)) {
    console.log('Sorry, we don\'t have a credit card on file for you.')
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
  cart = []
}
*/
