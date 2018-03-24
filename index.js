var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var temp = item;
 item = {[item]:(Math.floor(Math.random()*100))};
 cart.push(item);
 console.log(`${temp} has been added to your cart.`);
 return cart;
}

function viewCart() {
  var temp = "In your cart, you have ";
  if (cart.length === 0) {
    temp = "Your shopping cart is empty.";
  } else if (cart.length === 1) {
    let temp2 = Object.keys(cart[0]);
    temp = temp + `${temp2} at $${cart[0][temp2]}.`;
  } else if (cart.length === 2) {
    let temp2 = Object.keys(cart[0]);
    var temp3 = Object.keys(cart[1]);
    temp = temp + `${temp2} at $${cart[0][temp2]} and ${temp3} at $${cart[1][temp3]}.`;
  } else {
    for (let i=0;cart.length>i;i++){
      let temp2 = Object.keys(cart[i]);
      if (i === cart.length-1){
        temp = temp + `and ${temp2} at $${cart[i][temp2]}.`;
      } else {
        temp = temp + `${temp2} at $${cart[i][temp2]}, `;
      }
    }
  }
  console.log(temp);
}

function total() {
  var cost = 0;
  for (let i=0;cart.length>i;i++) {
    let temp = Object.keys(cart[i]);
    cost = cost + cart[i][temp];
  }
  return cost;
}

function removeFromCart(item) {
  var inCart = false;
  var itemIndex = NaN;
  for (let i=0;cart.length>i;i++) {
    if (cart[i].hasOwnProperty(item)) {
      inCart = true;
      itemIndex = i;
    }
  }
  if (inCart) {
    cart.splice(itemIndex, itemIndex);
    return cart;
  } else {
    console.log("That item is not in your cart.");
    return cart;
  }
}

function placeOrder(cardNumber) {
  if (cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  } else {
    console.log("Sorry, we don't have a credit card on file for you.");
  }
}
viewCart();
addToCart("bananas");
console.log(total());
viewCart();
placeOrder();
removeFromCart("eggs");
addToCart("pancake batter");
console.log(total());
viewCart();
addToCart("eggs");
placeOrder(5);
viewCart();
removeFromCart("eggs");
addToCart("milk");
viewCart();
addToCart("cookies");
viewCart();
console.log(total());