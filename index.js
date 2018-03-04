var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  if (addToCart.length === 0) {
    return "Your shopping cart is empty.";
  }
  var newItem = {}; //creates new item
  newItem[item] = Math.floor(Math.random() * 100) + 1;
  
  cart.push(newItem); //adds newItem to cart
  console.log(`${item} has been added to your cart.`);
  return cart; //returns updated cart
}

function viewCart() {
  if (cart.length === 0) {
  console.log("Your shopping cart is empty.");
} else {
  var items = [];
  for (var i = 0; i < cart.length; i++) {
    for (var item in cart[i]) {
      items.push(item + " at $" + cart[i][item]);
    }
  }
    if(items.length ===1){
      console.log("In your cart, you have " + items[0] + ".");

    }
    else if(items.length ===2){
          console.log("In your cart, you have " + items.join(" and ") + ".");
    }
    else {
      console.log();
      console.log("In your cart, you have " + items.slice(0, -1).join(", ") + ', and '+  items[items.length-1] + ".");
    }
  }
}


function total() {
 var cart = getCart();
 var sum = 0;
 
 for (var i = 0; i < cart.length; i++) {
    for (var item in cart[i]) {
      sum += cart[i][item]
    }
 }
  return sum;
}


function removeFromCart(item) {
  var cart = getCart();
  var isFound = false;
  var removeItemPos;
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].hasOwnProperty(item)){
        isFound = true;
        removeItemPos = i;
      }
  }
  if(!isFound){ //isFound is false
    console.log('That item is not in your cart.')
  }
  else{
    cart.splice(removeItemPos,1); //removes found item from cart 
    return cart; //returns updated cart without the removed item 
  }
}

function placeOrder(cardNumber) {
  if (!cardNumber) { //if there's no card on file
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    
    setCart([]); //empties cart array
  }
}
