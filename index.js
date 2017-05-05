// a list of global variables
var cart=[];

function getCart(){
  return cart
}

// the first function of this lab. The goal of this function is to add an item (as an object(key:value)) to the cart array in the global variables. This is done by first declaring the price variable which will generate a random number between 0 and 1, then multiplies it by 100 and floors (or rounds down to the nearest integer). Then it creats the cartObj, which will be where each object(our items we want to purchase) sits until we push it to the cart. Then the function logs that the item has been added to the cart and returns the new cart value.
function addToCart(item){
  var price = Math.floor(Math.random()*100);
  var cartObj={};
  cartObj[item] = price
  cart.push(cartObj)
  console.log(item +' has been added to your cart.');
  return cart
}

// This fucntion is designed to give a list of the items in our cart. It does this by using an if statement first to check if nothing is in the cart. If there is nothing in the cart(or cart.length===0) then it will say so. otherwise, for as long as i is less than cart.length, it will pull the item names(or keys) from the cart array and use them as keys for the cartView string. Next it pulls the cart arrays values by simple pulling each object from the array. Then in the cartView.push section we are pulling the first item in the item array we set up, the string ' at $' and pulling the price keys in the first slot. this is all pushed into the cartView array so that we can log the statement at the end of the function.
function viewCart(){
  var cartView = [];
  if(cart.length===0){
    console.log("Your shopping cart is empty.");
  } else {
    for (var i=0; i<cart.length; i++) {
      var items = Object.keys(cart[i]);
      var price = cart[i];
      cartView.push(items[0] + ' at $' + price[keys[0]])
    }
    console.log('In your cart, you have '+cartView.join(', ')+".")
  }
}

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
function removeFromCart(item){
  if (cart.hasOwnProperty(item)){
    console.log('That item is not in your cart.');
  } else {
    for (var )
  }
}
