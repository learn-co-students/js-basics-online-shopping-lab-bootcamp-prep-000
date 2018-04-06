var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor(Math.random()*100);
  cart.push({[item] : itemPrice});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart(){
  var string = "In your cart, you have";
  if (cart.length===0){
    console.log("Your shopping cart is empty.");
  }else if (cart.length===1){
      console.log(`${string} ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`);
  }else if (cart.length===2){
    console.log(`${string} ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]} and ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}.`);
  }else{
    var items=[];
    for (let i=0; i<cart.length-1; i++){
      items.push(` ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`);
    }
      console.log(`${string}${items}, and ${Object.keys(cart[cart.length-1])} at $${cart[cart.length-1][Object.keys(cart[cart.length-1])]}.`);
  }return cart;
}

function total(){
  var isolatePrices=[];
  for (let i=0; i<cart.length; i++){
    isolatePrices.push(cart[i][Object.keys(cart[i])]);
  }
  var sum = 0;
  for (let t=0; t<isolatePrices.length; t++){
    sum = sum + isolatePrices[t];
  }
  return sum;
}

function removeFromCart(item){
  for (let i=0; i<cart.length; i++){
    if (Object.keys(cart[i])[0]===item){
      cart = [...cart.slice(0,i),...cart.slice(i+1)];
    }
  }
  console.log("That item is not in your cart.");
  return cart;
}

function placeOrder(cardNumber){
  if (cardNumber){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    for (let i=cart.length; i>0; i--){
      cart.shift();
    }
  }else{
    console.log("Sorry, we don't have a credit card on file for you.");
  }
  return cart;
}