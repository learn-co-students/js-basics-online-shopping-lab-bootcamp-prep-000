var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var newFood = {};
 newFood.itemName = item;
 newFood.itemPrice = ((Math.floor(Math.random()*100)));
 cart.push(newFood);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  var i = 0;
  var solution = `In your cart, you have`;
  if (cart.length===0) {
    return `Your shopping cart is empty.`;
  } else if (cart.length===1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  } else {
  while (i<cart.length-1) {
    solution = solution + ` ${cart[i].itemName} at $${cart[i].itemPrice},`;
  i++;
  }
  solution = solution + ` and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`;
  return solution;
  }
  
}

function total() {
  var i = 0;
  var total = 0;
  var instanceCart = cart;
  while (i<instanceCart.length) {
    total += instanceCart[i].itemPrice;
    i++;
  }
  return total;
}

function removeFromCart(item) {
  var i = 0;
  while (i<cart.length+1) {
    if (i===cart.length) {
      return "That item is not in your cart.";
    } else if (cart[i].itemName === item){
      cart.splice(i,1);
      return cart;
    } else {
      i++;
    }
  }
}


function placeOrder(cardNumber) {
  var billTotal = total();
  if (cardNumber===undefined) {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    cart = [];
    return `Your total cost is $${billTotal}, which will be charged to the card ${cardNumber}.`;
  }
  
}
