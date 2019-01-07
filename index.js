var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var cart = getCart();
 var price = Math.floor(Math.random() * 100);
 var itemObj = {};
 itemObj[item] = price;

 cart.push(itemObj);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

// addToCart("pancake batter");

function viewCart() {
  var cart = getCart();
  var result = `In your cart, you have`;

  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
    return cart;
  }

  for (var i = 0; i < cart.length; i++) {
    var thisItem = cart[i];

    for (var k in thisItem) {
      var itemName = k;
      var price = thisItem[k];
    }

    if (cart.length === 2 && i === cart.length - 2) {
      result += ` ${itemName} at $${price} and`
    } else if (cart.length > 2 && i < cart.length - 2){
      result += ` ${itemName} at $${price},`
    } else if (i === cart.length - 2) {
          result += ` ${itemName} at $${price}, and`
    } else {
          result += ` ${itemName} at $${price}.`
    }
  }
  console.log(result);
}

// console.log(viewCart());
// addToCart("dog food");
// console.log(viewCart());
// addToCart("yogurt")
// console.log(viewCart());

function total() {
  var cart = getCart();
  var total = 0;

  for (var i = 0; i < cart.length; i++) {
    var thisItem = cart[i];
    for (var k in thisItem) {
      var price = thisItem[k];
    }
    total += parseInt(price);
  }
  return total;
}

// console.log(total());

function removeFromCart(item) {
  var cart = getCart();

  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart;
    }
  }
  console.log("That item is not in your cart.");
  return cart;
}

// console.log(removeFromCart("yogurt"));

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("Sorry, we don\'t have a credit card on file for you.")
    return setCart(0)
  }
  var cart = getCart()
  var totalCost = total();

  console.log(`Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`);
  return setCart(0)
}
