var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart(){
  return cart;
}

function addToCart(item){
  var price = Math.floor(Math.random()*100);
  var itemPrice = {};
  itemPrice[item] = price;
  cart.push(itemPrice);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart(){
  if(cart.length>0){
      const itemWithPrice = [];
        for(let i = 0; i < cart.length; i++ ){
          for(let item in cart[i]){
            itemWithPrice.push(`${item} at $${cart[i][item]}`);
          }
        }
            console.log(`In your cart, you have ${itemWithPrice.join(", ")}.`);
        } else {
            console.log ("Your shopping cart is empty.");
  }
}

function removeFromCart(item){
  for(var i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart;
    }
  }
  console.log("That item is not in your cart.");
}

function placeOrder(cardNumber){
  if(!cardNumber){
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}
