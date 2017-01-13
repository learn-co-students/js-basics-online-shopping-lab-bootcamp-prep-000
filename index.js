var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function getCart(){
  return cart
}

function total() {
  let t = 0
  for (var i = 0; i < cart.length; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }
  return t
}

function addToCart(item){
var price = Math.floor(Math.random()*100);
var itemObj = {};
itemObj[item] = price;
cart.push(itemObj);
console.log(item + " has been added to your cart.")
return cart
}

function viewCart() {
  var returnString = "In your cart, you have "
  if (cart.length > 0){
    for (var i = 0; i < cart.length; i++){
      debugger
        for (var e in cart[i]){
          if (i < cart.length - 1){
            returnString = returnString + e + " at $" + cart[i][e] + ", ";
          }else{
          returnString = returnString + e + " at $" + cart[i][e] + ".";
        }
      }
      console.log(returnString)
    }
  }else{
    console.log("Your shopping cart is empty.")
  }
}

function removeFromCart(item){
  if (cart.length === 0){
    console.log("That item is not in your cart.")
  }else{
    for (var i = 0; i < cart.length; i++){
      for (var e in cart[i]){
        if (e === item){
          cart.splice(i, 1);
        }else{
          console.log("That item is not in your cart.");
        }
      }
    }
  }

}

function placeOrder(cardNumber){
  if (cardNumber){
    console.log("Your total cost is $" + total() + ", which will be charged to the card " + cardNumber + ".");
    cart = [];

  }else{
    console.log("We don\'t have a credit card on file for you to place your order.");
  }
}
