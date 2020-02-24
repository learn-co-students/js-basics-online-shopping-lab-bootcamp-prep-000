var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  var obj = {};
  obj[item] = price;
  cart.push(obj);
  console.log(item + " has been added to your cart.");
  return cart;
}

function viewCart() {
  
  var items = [];
   for (var i = 0; i < cart.length; i++) {
      for (var item in cart[i]) {
        items.push(item + " at $" + cart[i][item])
      }
    }
  var intro = 'In your cart, you have ';
 if (cart.length === 0)
  {console.log('Your shopping cart is empty.')}
  else if (cart.length === 1)
  {console.log(intro + items.slice(-1) +"." )}
  else if (cart.length === 2)
  {console.log(intro + items.join(" and ") + ".")}
  else if (cart.length > 2)
  {console.log(intro + items.slice(0, -1).join(', ') + ' and ' + items.slice(-1) +".")
  }
}

function total() {
  var totalPrice = 0;
                         
  for(let i=0;i<cart.length;i++)
  {
    for (var item in cart[i]) {
        totalPrice += cart[i][item];
      }
  }
  return totalPrice;
}

function removeFromCart(item) {
  var isPresent = false;
  
  for(var i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item)) {
      isPresent = true;
      cart.splice(i, 1);
    }
  }
  if(!isPresent){
    console.log("That item is not in your cart.");
  }
  return cart;
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined){
    console.log('Sorry, we don\'t have a credit card on file for you.')
}
else{

  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  cart = []
  return cart
  }
}
