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
  itemName[item] = Math.floor(Math.random()*100);
  cart.push(itemName);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length === 0){
    console.log('Your shopping cart is empty.');
  }else if(cart.length === 1){
    console.log(`In your cart, you have ${Object.keys(cart[0])[0]} at $${Object.values(cart[0])[0]}.`);
  }else if(cart.length === 2){
    console.log(`In your cart, you have ${Object.keys(cart[0])[0]} at $${Object.values(cart[0])[0]} and ${Object.keys(cart[1])[0]} at $${Object.values(cart[1])[0]}.`);
  }else{
    let i = 0;
    var dime = ['In your cart, you have'];
    do{
      if (i < cart.length - 1){
        dime.push(`${Object.keys(cart[i])[0]} at $${Object.values(cart[i])[0]},`);
      }else{
       dime.push(`and ${Object.keys(cart[i])[0]} at $${Object.values(cart[i])[0]}.`); 
      }
    i++
  } while(i < cart.length){
    console.log(`${dime.join(' ')}`);
    }
  }
}

function total() {
  var mytotal = 0;
  for (let i = 0; i < cart.length; i++){
    mytotal = mytotal+ parseInt(Object.values(cart[i])[0]);
  }
  return mytotal;
}

function removeFromCart(item) {
  var tfResult = false;
  var foundSomething = '';
  let i = 0;
  do{
    if(cart[i]){
      if (Object.keys(cart[i])[0] === item){
      // if (Object.keys(cart[i]).includes(item)){
      // if ( cart[i].hasOwnProperty(item) ){
        foundSomething = i;
        tfResult = true;
      }
    }
    i++
  }while(i < cart.length){
    if (tfResult){
      cart.splice(foundSomething, 1 );
    }
    else{
      console.log("That item is not in your cart.");
      return cart;
    }
  }
}

function placeOrder(cardNumber) {
  if (cardNumber){
    var myCartTotal = total();
    console.log(`Your total cost is $${myCartTotal}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }else{
    console.log("Sorry, we don't have a credit card on file for you.");
  }
}
