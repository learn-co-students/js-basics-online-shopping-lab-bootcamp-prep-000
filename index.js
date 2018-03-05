var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push({[item] :Math.floor(100*Math.random())});
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart(){
  var str = "In your cart, you have ";
  if (cart.length === 0){
    console.log("Your shopping cart is empty.");
  } else if (cart.length === 1) {
    var temp0 = Object.keys(cart[0]);
    str += `${temp0} at $${cart[0][temp0]}.`;
    console.log(str);
  } else if (cart.length === 2){
    var temp1 = Object.keys(cart[0]);
    var temp2 = Object.keys(cart[1]);
    str += `${temp1} at $${cart[0][temp1]} and ${temp2} at $${cart[1][temp2]}.`;
    console.log(str);
  } else{
    for (let i = 0; i < cart.length; i++){
      var temp = Object.keys(cart[i]);
      if (i === cart.length - 1){
        str += `and ${temp} at $${cart[i][temp]}.`;
        console.log(str);
      } else {
        str += `${temp} at $${cart[i][temp]}, `;
      }
    }
  }
  return;
}


function total() {
  var total = 0;
  for (let i = 0; i < cart.length; i++){
    var price = Object.keys(cart[i]);
    total += cart[i][price];
  }
  return total;
}

function removeFromCart(item) {
  var check = 0;
  for (let i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item)){
      cart.splice(i, 1)
      check += 1;
    }
  }
  if (check === 0){
    console.log("That item is not in your cart.")
  }
  return cart
}

function placeOrder(cardNumber) {
  if (arguments.length === 0){
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
  for (let i = 0; i < cart.length; i++){
    var item = Object.keys(cart[i])
    removeFromCart(item)
  }
  return
}
