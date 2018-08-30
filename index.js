var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {

  //ensures that integer will be 1<=n<100
  var min = 1;
  var max = 100; 
  var random = Math.random() * (max - min) + min; 
  
  //creates object out of item, assigns random price, adds to cart
  var newItem = {itemName: item,
                itemPrice: Math.floor(random)}
  cart.push(newItem);
  
  return `${item} has been added to your cart.`;
}

function viewCart() {
  
  if (cart.length > 0) {
   var string = 'In your cart, you have';
   for (var i = 0; i < cart.length; i++) {
     
     //adds just 1 item if cart only has 1 in it
     if (cart.length === 1) {
       string = `${string} ${cart[i].itemName} at $${cart[i].itemPrice}.`;
     } else { //looks at carts with 2+ items
       
       //if i is not pointing to last item, style the string this way
       if (i < cart.length -1) {
         string = `${string} ${cart[i].itemName} at $${cart[i].itemPrice},`;
       } else {
         
         //if i is pointing to last item, style the string this way
         string = `${string} and ${cart[i].itemName} at $${cart[i].itemPrice}.`; 
       }
     }
    }
   return string;   
  } else {
    return 'Your shopping cart is empty.';
  }
}

function total() {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    total = total + cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  var length = cart.length;
  
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i,i);
    } else {}
  }
  
  if (cart.length === length) {
    return 'That item is not in your cart.';
  } else {
    return cart;
  }
}

function placeOrder(cardNumber) {
  var card = cardNumber;
  var cost = total().toString();
  if (card) {
    cart = [];
    return `Your total cost is $${cost}, which will be charged to the card ${card}.`
  } else {
    return 'Sorry, we don\'t have a credit card on file for you.';
  }
}
