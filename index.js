var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100) + 1;
  var newItem = {};
  newItem[item] = price
  cart.push(newItem)
  console.log(item + " has been added to the cart")

}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your cart is empty")
  }else{
    addedItems = []
    for (i = 0; i<cart.length; i++){
      for (item in cart[i]){
        addedItems.push(item + " at $" + cart[i][item])
      }
    }
    console.log("in your cart, you have " + addedItems.join(', ') + ".")
  }
  
}

function total() {
  let tot = 0
  for (i = 0; i<cart.length; i++){
    for (var item in cart[i]){
      tot+=cart[i][item]
    }
    return tot
  }
  
}

function removeFromCart(item) {
  var itemIn = false
  for (i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item)){
      itemIn = true;
      cart.splice(i,1)
    }
    if (!itemIn) {
      console.log("The item is not your cart")
    }  
    return cart
  }
 

}

function placeOrder(creditCard) {
  if (!creditCard) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log("Your total cost is $" + total() + ", which will be charged to the card " + creditCard + ".");
    cart = [];
  }
}
