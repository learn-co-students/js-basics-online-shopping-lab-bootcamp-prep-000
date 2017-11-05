var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.round(Math.floor(Math.random() * (100)));
  var itemName = item;
  item = { [itemName]: itemPrice };
  cart.push(item);
  console.log(`${itemName} has been added to your cart.`);
  return cart;
}

function viewCart() {
    if (cart.length < 1) {
      console.log(`Your shopping cart is empty.`);
    } else if (cart.length === 1) {
      var itemsAndPrices = [];
        for (let i = 0; i < cart.length; i++) {
          var itemAndPrice = cart[i];
          var item = Object.keys(itemAndPrice)[0];
          var price = itemAndPrice[item];
          itemsAndPrices.push(`${item} at \$${price}`)
        }
      console.log(`In your cart, you have ${itemsAndPrices}.`)
    } else if (cart.length === 2) {
      var itemsAndPrices = [];
      for (let i = 0; i < cart.length; i++) {
        var itemAndPrice = cart[i];
        var item = Object.keys(itemAndPrice)[0];
        var price = itemAndPrice[item];
        itemsAndPrices.push(`${item} at \$${price}`)
      }
    console.log(`In your cart, you have ${itemsAndPrices[0]} and ${itemsAndPrices[1]}.`)

    } else {
      var itemsAndPrices = [];
        for (let i = 0; i < cart.length; i++) {
          if (i < cart.length - 1) {
          var itemAndPrice = cart[i];
          var item = Object.keys(itemAndPrice)[0];
          var price = itemAndPrice[item];
          itemsAndPrices.push(` ${item} at \$${price}`)
        } else {
            var itemAndPrice = cart[i];
            var item = Object.keys(itemAndPrice)[0];
            var price = itemAndPrice[item];
            itemsAndPrices.push(` and ${item} at \$${price}.`)
          }
        }
    }
  console.log(`In your cart, you have${itemsAndPrices}`)
}

function total() {
  let sum = 0;
  var shoppingBill =[];
  for (let i = 0; i < cart.length; i++) {
    var itemAndPrice = cart[i];
    console.log(itemAndPrice)
    var item = Object.keys(itemAndPrice)[0];
    console.log(item);
    var price = itemAndPrice[item];
    console.log(price)
    sum += price
    }
    console.log(sum)
    return sum
  }

function removeFromCart(item) {
  var test = false;
  for (let i = 0; i < cart.length; i++) {
    var itemAndPrice = cart[i];
    if(Object.keys(itemAndPrice)[0] === item) {
      cart.splice(i,1);
      test = true;
    }
  }
  if (test === false) {
      console.log("That item is not in your cart.");
    }
  return cart
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.");
  } else {
    console.log(`Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`);
    cart.splice(0, cart.length);
    return cart;
  }
}
