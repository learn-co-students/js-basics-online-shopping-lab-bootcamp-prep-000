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
  var itemPrice = Math.floor(Math.random() * (100 - 1)) + 1;
  var itemObject = Object.assign({},{[item]: itemPrice});
  cart.push(itemObject);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
   // write your code here
  var  contents = "In your cart, you have ";
  var keys = [];
     for(var i=0;i<cart.length;i++) {
     keys[i] = Object.keys(cart[i]);
   } 
  
  if (cart.length === 0)
    console.log(`Your shopping cart is empty.`);


  if (cart.length === 1) {
    // var key1 = Object.keys(cart[0]); 
    console.log(`In your cart, you have ${keys[0]} at $${getCart()[0][keys[0]]}.`);
  }

  
    if (cart.length === 2) {
      
    console.log(`In your cart, you have ${keys[0]} at $${getCart()[0][keys[0]]} and ${keys[1]} at $${getCart()[1][keys[1]]}.`);
  }
  

  if (cart.length >= 3) {
    var content = "In your cart, you have ";
    for (var j = 0;j<=cart.length-1;j++) {
      content += `${keys[j]} at $${getCart()[j][keys[j]]}`;
      if (j !== cart.length-1)
        content += ", ";
      else
        content +=".";
        
      if  (j === cart.length-2)
        content += "and ";
    }
    console.log(content);
    
  }
}

function total() {
  // write your code here
    var keys = [];
    var total = 0;
    
     for(var i=0;i<cart.length;i++) {
        total += getCart()[i][Object.keys(cart[i])];
   } 
   
  
   return total;
}

function removeFromCart(item) {
  // write your code here
  var inCart = false;
  for (var i = 0;i<cart.length;i++) {
    if (Object.keys(getCart()[i])[0] === item) {
      getCart().splice(i,1);
      inCart = true
    }
  }
  
  if(!inCart)
    console.log("That item is not in your cart.");
    
  return getCart();
  
  
}

function placeOrder(cardNumber) {
  // write your code here
  
  if (!cardNumber)
    console.log("Sorry, we don't have a credit card on file for you.");
  else
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    
    setCart([]);
}
