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

var getCart = () => {
  return cart;
}

var addToCart = item => {
  var price = Math.floor(Math.random() * 100);
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

var viewCart = () => {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  }else{
    var itemArray = []
    for (var i=0; i < cart.length; i++) {
      let item = cart[i];
      let itemName = Object.keys(item)[0];
      let itemCost = item[itemName];
      let itemString = `${itemName} at $${itemCost}`
      itemArray.push(itemString);
    }
    let itemsString = itemArray.join(", ")
    let yourCartAsString = "In your cart, you have " + itemsString + "."
    console.log(yourCartAsString)
  }
}

var removeFromCart = item => {
  var itemInCart;
  if (!itemInCart){
    console.log("That item is not in your cart.");
  }
  for (var i = 0; i < cart.length; i++) {
    if(cart[i].hasOwnProperty(item)){
      cart.splice(i, 1);
    }
  }
  return cart;
}

var placeOrder = cardNumber => {
  if (!cardNumber){
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}
