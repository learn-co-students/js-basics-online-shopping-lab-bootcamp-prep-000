var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

//----------------------------------------------------//

function addToCart(item) {
//generate a random number between 1 and 100, to be used as the price
  var itemPrice = Math.floor(Math.random()* 100);
//creates a new set of key/value pairs and adds them to the Cart Array
  cart.push({itemName: item, itemPrice: itemPrice});
return `${item} has been added to your cart.`;
}

function viewCart() {
  const howMany = cart.length;
  const fullCart = []
  if (cart.length === 0){
    return (`Your shopping cart is empty.`);
  } else if (cart.length === 1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
  else {
      for (let i = 0; i < cart.length; i++) {
        fullCart.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`);
      }
      let beginning = fullCart.slice(0, -1);
      let ending = fullCart.slice(-1);

      return `In your cart, you have${beginning}, and${ending}.`
  }
}
  // } else if (howMany === 1){
  //   return (`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`);
  // } else if (howMany === 2) {
  //   return (`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`);
  // } else if (howMany === 3) {
  //   return (`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice}, and ${cart[2].itemName} at $${cart[2].itemPrice}.`)}
  // I hate how I've accomplished this, becuase it's really strong-arming the problem.  I want to come back and properly fix it - probably using a for loop with something like (var i = 1; i < howMany -1; i++) {}

function total() {
  var costs = 0;
  for (var i = 0; i<cart.length; i++) {
    costs = costs + cart[i].itemPrice;
  }
  return costs;
}

function removeFromCart(item) {
  var found = false;
  for (var i = 0; i<cart.length; i++) {
    if (cart[i].itemName === item) {
      found = true;
      let beginning = cart.slice(0,i);
      let ending = cart.slice(i+1);
      cart = beginning.concat(ending);
    }
  }
  if (!found) {
    return "That item is not in your cart.";
  }
  return cart;
}

function placeOrder(cardNumber) {
  if(typeof cardNumber !== 'undefined'){
    var costs = 0;
    for (var i = 0; i<cart.length; i++) {
    costs = costs + cart[i].itemPrice;
    }
    let total = `Your total cost is $${costs}, which will be charged to the card ${cardNumber}.`;
    cart = [];
    return total;
  }
  if(typeof cardNumber === 'undefined') {
    return "Sorry, we don't have a credit card on file for you.";
}
}


//--------------------------------testing element-------------------------------------
//console.log(placeOrder(54322532))
//console.log(removeFromCart("toasters"))
//console.log(addToCart("bananas"));
//addToCart("Horns");
//addToCart("another thing");
