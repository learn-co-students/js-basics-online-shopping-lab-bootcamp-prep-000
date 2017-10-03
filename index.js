var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var price = Math.floor(Math.random() * (100 - 1))
cart.push(Object.assign({},  { [item]:price }) )
console.log(item + " has been added to your cart.")
return cart;
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
  var sum =0;
  for(var i =0; i<cart.length;i++)
  {
    var itemName = Object.keys(cart[i])[0]
    var itemPrice = cart[i][itemName]
    sum += itemPrice
  }
  return sum
}

function removeFromCart(item) {
  // write your code here
  for(var i =0; i<cart.length; i++)
  {
    var itemName = Object.keys(cart[i])[0]
    if(itemName===item)
    {
    cart= cart.splice(i, 1)
    }
    else {
      alert("That item is not in your cart:")
    }
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if(!cardNumber)
  {
    console.log("Sorry, we don\'t have a credit card on file for you.")
    return
  }
  else {
    var totalCost = total();
  console.log('Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.')
  while(cart.length >0)
    cart.pop()
  }
}
