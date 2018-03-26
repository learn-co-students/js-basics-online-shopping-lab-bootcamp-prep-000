var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemName = {}; 
  var itemPrice = Math.floor((Math.random() * 10) + 1);
  itemName = { [item] : itemPrice };
  cart.push(itemName);
  console.log(item + " has been added to your cart.");
  return cart;
  
  }

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  }
  else if (cart.length === 2) {
    var itemList = [];
    for (let i = 0; i < cart.length; i++) {
      for (var item in cart[i]){
        itemList.push(item + " at $" + cart[i][item]);
      }
    }
    console.log("In your cart, you have " + [itemList.slice(0, -1).join(', '), itemList.slice(-1)[0]].join(itemList.length < 2 ? '' : ' and ') + ".")
}
  else {
    var itemList = [];
    for (let i = 0; i < cart.length; i++) {
      for (var item in cart[i]){
        itemList.push(item + " at $" + cart[i][item]);
      }
    }
    console.log("In your cart, you have " + [itemList.slice(0, -1).join(', '), itemList.slice(-1)[0]].join(itemList.length < 3 ? '' : ', and ') + ".")
}}

function total() {
  
   var pricePerItemInCart = [];
  var totalPrice = 0
  
  for(var i = 0; i < cart.length; i++) {
  var itemPrice = cart[i][Object.keys(cart[i])]
    pricePerItemInCart.push(itemPrice)
    }
  
  for (var j =0; j<pricePerItemInCart.length; j++) {
    totalPrice = pricePerItemInCart[j]+=totalPrice
  }
  return totalPrice
}


function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1)
      return cart
    } 
  } 
  console.log('That item is not in your cart.')
  return cart;
}

function placeOrder(cardNumber) {
  if(cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    for (var i = cart.length; i>= 0; i--) {
      cart.pop();
    } 
    } else 
      console.log('Sorry, we don\'t have a credit card on file for you.')
return cart;
  
}
