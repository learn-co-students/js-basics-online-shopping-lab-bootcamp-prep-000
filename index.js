var cart = [];
var item;

function getCart() {
  return cart;
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


function addToCart(item) {
  var price = Math.floor(Math.random()*10);
  cart.push({[item]: price});	
  console.log(`${item} has been added to your cart.`);
  return cart;
}



function viewCart() {
  var newArray = [];
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.');
  } else {
    var i = 0;
    while (i < cart.length) {
      var newObj = cart[i];
      var newItem = Object.keys(newObj);
      for (var newItem in newObj){
        newArray.push(`${newItem} at $${newObj[newItem]}`);
      }
    i++; 
    }
 console.log(`In your cart, you have ${newArray.join(', ')}.`);
}
}



function removeFromCart(item){ 
  var i = 0;
  if(i < cart.length){
    var newObj = cart[i];
      if (newObj.hasOwnProperty(`${item}`)) {
      var x = cart.indexOf(`${item}`);
      cart.splice([x],1);
      return cart;
    } else {
      i++;
      console.alert("That item is not in your cart.");  
    }
  } else { 
  console.log("That item is not in your cart.");
}
}


function placeOrder(cardNumber) {
  if(cardNumber > 0){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    setCart([]);
  } else {
    console.log("We don\'t have a credit card on file for you to place your order.");
    
  }
  }

