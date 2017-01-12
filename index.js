var cart=[];

function setCart(newCart) {
  cart = newCart;
}

function getCart(){
  return cart;
}

function addToCart(item){
  var price = Math.floor(Math.random()*100)
  var obj = {};
  obj[item] = price
  cart.push(obj);
   console.log(item + " has been added to your cart.")
   return cart;
}

function viewCart() {

  if (cart.length > 0) {
      var item1 = Object.keys(cart[0]);
      var price1 = cart[0][item1];
      var list1 = item1 + " at \$" + price1;
      var list = ""
    for (let i = 1; i < cart.length; i++) {
      var itemRest = Object.keys(cart[i]);
      var priceRest = cart[i][itemRest];
      list = list + ", " + itemRest + " at \$" + priceRest;
    }
    console.log(`In your cart, you have ${list1}${list}.`);
     } else {
        console.log("Your shopping cart is empty.")
      }
}


function removeFromCart(item){
  var v = 0;
for (let i= 0; i < cart.length; i++) {
  if (cart[i].hasOwnProperty(item)) {
    cart.splice(i, 1)
    v++;
  }
}
if (v === 0){
  console.log("That item is not in your cart.")
}
return cart;
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

function placeOrder(cardNumber) {
  if (typeof cardNumber === 'undefined'){
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
  setCart([]);
}
