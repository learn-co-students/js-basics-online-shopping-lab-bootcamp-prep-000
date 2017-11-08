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

function getCart() {
  return cart;
}

function addToCart(item, price){
  var price = (Math.random()*100);
  price = Math.floor(price);
  var purchase = {[item]: price};
  cart.push(purchase);
  console.log(item + " has been added to your cart.");
  return cart;
}


function viewCart(){
  var behold = "In your cart, you have";
  if (cart.length === 0){
    console.log("Your shopping cart is empty.");
    } else {
      for (var i = 0, l = cart.length; i < l; i++){
        for (var items in cart[i]){
          behold += (" " + items + " at $" + cart[i][items] + ",")
        }
    }
    behold = behold.slice(0,-1);
    behold += ".";
    console.log(behold)
  }
}

function removeFromCart(item){
  for (var i = 0, l = cart.length; i < l; i++){
    for (var items in cart[i]){
      if (items === item){
         cart.splice(i, 1);
         return cart;
      }
    }
  }
  console.log('That item is not in your cart.');
  return cart;
}


function placeOrder(number){
  if (number == undefined){
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${number}.`)
    return cart = [];
  }
}
