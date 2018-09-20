var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newItem = {}
  var itemPrice = parseInt(Math.floor(Math.random() * 100) + 0);
  newItem[item] = itemPrice;
  cart.push(newItem);
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length === 1) {
    console.log(`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`)
  } else if (cart.length === 2) {
    console.log(`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`)
  } else if (cart.length > 2) {
    console.log(`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}`)
  }
  console.log('Your shopping cart is empty.')
}

function total() {
  for (let i = 0; i < cart.length; i++);
    
}

function removeFromCart(name) {
  for (let i = 0; i < cart.length; i++);
    if (cart.splice() === name) {
      return cart
    }
    console.log("That item is not in your cart.")
}

function placeOrder(number) {
  if (!number) {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
  console.log(`Your total cost is $${total()}, which will be charged to the card ${number}.`)
  cart = []
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
