var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 // write your code here
 var itemPrice = Math.floor(Math.random() * 100);
 var item = { [itemName] : itemPrice }
 cart.push(item);
 console.log(`${itemName} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
  var str = "";
  if(cart.length > 0){
    str = "In your cart, you have"
    for(let i = 0; i < cart.length; i++){
      let key = Object.keys(cart[i])[0];
      if(i == cart.length - 2 && cart.length < 3){
        str += ` ${key} at $${cart[i][key]}`
      } else if(i == cart.length - 2 && cart.length >= 3){
        str += ` ${key} at $${cart[i][key]},`
      } else if(i < cart.length - 1){
        str += ` ${key} at $${cart[i][key]},`
      } else {
        if(i == 0){
          str += ` ${key} at $${cart[i][key]}.`
        } else {
          str += ` and ${key} at $${cart[i][key]}.`
        }
      }
    }
  } else {
    str = "Your shopping cart is empty."
  }
  console.log(str);
}

function total() {
  // write your code here
  let total = 0;
  for(let i = 0; i < cart.length; i++){
    let key = Object.keys(cart[i])[0];
    total += cart[i][key];
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  var flag = ""
  for(let i = 0; i < cart.length; i++){
    if(cart[i].hasOwnProperty(item)){
      cart.splice(i, 1);
      flag = "deleted";
      break;
    }
  }
  if(flag === "deleted"){
    return cart;
  } else {
    console.log("That item is not in your cart.");
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber === undefined){
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = [];
  }
}
