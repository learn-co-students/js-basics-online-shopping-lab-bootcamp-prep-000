var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item] //if it were cart[i].item I would not need brackets in commented line below
    }
  }

  return t
}

function getCart(){
  return cart;
}
function addToCart(desiredItem){
  cart.push({[desiredItem]: Math.floor(Math.random()*100)}) //I spent 3 hours trying to push desiredItem without brackets.
  console.log(`${desiredItem} has been added to your cart.`);
  return cart;
}
function viewCart(){
  if (cart.length===0){
    console.log("Your shopping cart is empty.");
  } else {
    var cartSays = "In your cart, you have "
    for (let i = 0; i < cart.length; i++){
      for (var keyGuy in cart[i]){
        cartSays += `${i===0?"":", "}${keyGuy} at $${cart[i][keyGuy]}`;
      }
    }
    console.log(cartSays +".");
  }
}

function removeFromCart(itemYouWantToBlastIntoOblivion){
  for (let i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(itemYouWantToBlastIntoOblivion)){
      cart.splice(i,1);
      break;
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(cardNumber){
  if (cardNumber === undefined){
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  }
      cart = [];
}
