var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random() * 100 + 1);
 var itemObject = { itemName: [item], itemPrice: parseInt([price])};
 cart.push(itemObject);
 return `${item} has been added to your cart.`;
 return cart;
}

function viewCart() {
  if (cart.length === 0) {
    return 'Your shopping cart is empty.';
  } else {
    var text = 'In your cart, you have';
    var importantArray = [];
    for (let i = 0; i <= cart.length - 1; i++) {
      var theItem = cart[i].itemName;
      var thePrice = cart[i].itemPrice;
        importantArray.push(`${theItem} at $${thePrice}`);
      }
      if (importantArray.length !== 1) {
        var longness = parseInt(importantArray.length - 1);
        var final = importantArray[longness];
        var final2 = String(`and ${final}`);
        importantArray[longness] = final2;
    }
      return `${text} ${importantArray.join(', ')}.`;
  }
}

function total() {
  var totalCount = 0;
  for (let i = 0; i < cart.length; i++) {
    totalCount = parseInt(cart[i].itemPrice) + totalCount;
  }
  return totalCount;
}


function removeFromCart(item) {
  var i = 0;
  while (i < cart.length) {
    if (item == cart[i].itemName) {
      cart.splice(i, 1);
      i++;
    } else {
      i++;
    }
  }
  if (i == cart.length) {
    return 'That item is not in your cart.';
  }
}


function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    setCart([]);
    return 'Sorry, we don\'t have a credit card on file for you.';
  } else {
    var totalCount = total();
    setCart([]);
    return `Your total cost is $${totalCount}, which will be charged to the card ${cardNumber}.`;
  }
}
