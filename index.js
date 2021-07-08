var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var cart = getCart();
  var cartItem = {
    [item]: Math.floor((Math.random() * 100) + 1)
  };
  cart.push(cartItem);
  console.log(`${item} has been added to your cart.`);
  return cart;
 // write your code here
}

function viewCart() {
  if (getCart().length === 0){
    console.log("Your shopping cart is empty.");
    return;
  }
  var text = "In your cart, you have ";
  for (let i=0;i<getCart().length;i++){
    let name = Object.keys(getCart()[i])[0];
    let price = getCart()[i][name];
    text += `${name} at $${price}`;
    if (i < getCart().length - 2){
      text += ", ";
    } else if (i === getCart().length - 2){
      if (getCart().length > 2){
        text += ", and ";
      } else {
        text += " and ";
      }
    } else {
      text += ".";
    }
  }
  console.log(text);
}

function total() {
  var sum = 0;
  for (let i=0;i<getCart().length;i++){
    let name = Object.keys(getCart()[i])[0];
    let price = getCart()[i][name];
    sum += parseInt(price);
  }
  return sum;
  // write your code here
}

function removeFromCart(item) {
  for (let i=0; i<getCart().length; i++){
    let name = Object.keys(getCart()[i])[0];
    if (name === item){
      getCart().splice(i, 1);
      return getCart();
    }
  }
  console.log("That item is not in your cart.")
  // write your code here
}

function placeOrder(cardNumber) {
  if (parseInt(cardNumber) > 0){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    setCart([]);
    return;
  }
  console.log("Sorry, we don't have a credit card on file for you.");
  // write your code here
}


var cart = [{'cebola':'15'}, {'alho':'17'}]
viewCart();
//console.log(test[0])
//console.log(test[0].keys())
//console.log(test[0].hasOwnProperty())
//console.log(test.keys())
//console.log(test[0]['cebola'])
//console.log(test[0].arroz === undefined)
placeOrder(34283960);
