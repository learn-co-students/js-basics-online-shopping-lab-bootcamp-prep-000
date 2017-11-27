var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemPrice =(Math.floor(Math.random()*100));
 var newItem=Object.assign({},{[item]: itemPrice});
 cart.push(newItem);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  if(cart.length===0){
    return console.log('Your shopping cart is empty.');
  }else if(cart.length===1){
      var key = Object.keys(cart[0]);
      return console.log(`In your cart, you have ${key} at $${cart[0][key]}.`)
  }else if(cart.length===2){
    var inCart = 'In your cart, you have ';
    for(let i=0;i<cart.length;i++){
      let key = Object.keys(cart[i]);
      if(i===0){
        inCart = inCart + `${key} at $${cart[i][key]} `;
      }else{
        inCart = inCart + `and ${key} at $${cart[i][key]}.`;
      }
    }
    return console.log(inCart);
  }else if(cart.length >= 3){
    let inCart = 'In your cart, you have ';
    for (let i=0;i<cart.length;i++){
      let key = Object.keys(cart[i]);
      if (i === cart.length - 1){
        inCart =inCart + `and ${key} at $${cart[i][key]}.`;
      }else{
        inCart = inCart + `${key} at $${cart[i][key]}, `;
      }
    }
    return console.log(inCart);
  }
}

function total() {
  var totalCost = 0;
  for (let i=0;i<cart.length;i++){
    var key = Object.keys(cart[i]);
    totalCost = totalCost + cart[i][key];
  }
  return totalCost;
}

function removeFromCart(item) {
  for(let i = 0; i<cart.length;i++){
    if(cart[i].hasOwnProperty([item])){
      cart.splice([i],1);
	  return cart;
    }else if(i===cart.length - 1){
    }
  }
  console.log("That item is not in your cart.");
}
function placeOrder(cardNumber) {
  if(cardNumber){
    var cartTotal = total();
    console.log(`Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }else{
    console.log("Sorry, we don\'t have a credit card on file for you.");
  }
}
