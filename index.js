var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function getCart() {
  return cart;
}

function addToCart(item)
{
  var price = Math.floor(Math.random()*100);
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart(){
  if(cart.length==0)
  {
    console.log("Your shopping cart is empty.");
  } else {
    var myString = "In your cart, you have";
    //iterate over cart
    for(var i = 0; i<cart.length; i++){
      //myKey is the name of each item
      var myKey = Object.keys(cart[i]);
      myString = myString + " " + myKey + " at $" + cart[i][myKey] + ",";
    }
    //remove last command and replace with '.'
    myString = myString.substring(0, myString.length-1) + ".";
    console.log(myString);
  }
}

function removeFromCart(item){
  for(var i=0, l=cart.length; i<l; i++){
      if(Object.keys(cart[i])==item){
        //removes item from cart array
        cart.splice(i,1);
        return cart;
      }
  }
  //since didn't return anything, log cart
  console.log("That item is not in your cart.");
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

function placeOrder(cardNumber){
  if(cardNumber == undefined){
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}
