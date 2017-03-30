var cart =[];


function setCart(newCart) {
  var cart = newCart;
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

function getCart(){
  return cart
}

function addToCart(item, price){
  var price = Math.floor(Math.random()*100)
  for(var price in item[i]){
    return "${item} has been added to your cart."
  }
}
function viewCart(){
  if(i === 0){
      return "Your shopping cart is empty."
    }
  } else {
    for(var price in item){
    return "In your cart you have ${item} at ${price}."
    }
  }
}

function removeFromCart(){
    return "That item is not in your cart."
}

function placeOrder(num){
  if(num === 0){
    return "We don't have a credit card on file for you to place your order.";
  } else {
    console.log(total());
    return "Your total cost is $${total}, which will be charged to the card ${num}.";
  }
}

function emptyTheCart(cart,item){

}
