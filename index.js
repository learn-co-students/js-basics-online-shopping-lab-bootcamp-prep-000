var cart = [];

function getCart(){
  return cart;
}

function addToCart(item){
  var price = Math.random();
   var object = {}
     object[item] = Math.floor(price * 100);
      cart.push(object)
        console.log(item + " has been added to your cart.");
return cart;
}

function viewCart(){
  var currentCart = [];
   var length = cart.length;
     if (length > 0){
       for (let i = 0; i < length; i++){
         var item = Object.keys(cart[i])[0]// Object.keys(obj) gives us an array of keys in the object, we add [0] to access it
         var price = cart[i][item]// we need this format obj[key], so first off, what is our object?
        currentCart.push(item + " at $" + price)
        }
        console.log(`In your cart, you have ${currentCart.join(', ')}.`) //here outside of the for loop
      } else {
        console.log("Your shopping cart is empty.")
      }
}


function removeFromCart(item){
  let itemInCart = false;
  for (let i = 0; i < cart.length; i++) {
     if(item === Object.keys(cart[i])[0]){
      itemInCart = true;
      cart.splice(i, 1).concat(cart.splice(i, 0));
    }
  }
  if (itemInCart === false) {
    console.log("That item is not in your cart.");
  }
 return cart;
}

function placeOrder(cardNumber){
  let number = false;
  let total_price = total()
  for (let i = 0, l = cart.length; i < l; i++){ // get the total of all the items in the array
    number = true;                       // remove all the items from the cart
    cart.shift();
  }
  console.log(`Your total cost is $${total_price}, which will be charged to the card ${cardNumber}.`)
  if(number === false){
   console.log("We don't have a credit card on file for you to place your order.");
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
