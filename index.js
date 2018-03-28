var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function itemConstructor(name) {
  return {
    itemName: name,
    itemPrice: Math.floor(Math.random() * (Math.floor(100) - Math.ceil(1)) + Math.ceil(1)),
  }
}

function addToCart(nameOfItem) {
  // var newItem = itemConstructor(nameOfItem); Alternate solution, using variable
  // console.log(newItem);                      Alternate solution, using variable
  cart.push(itemConstructor(nameOfItem));
  //  return `${newItem.itemName} has been added to your cart.` Alternate solution, using variable
  return `${nameOfItem} has been added to your cart.`
}

function viewCart() {
  if (!cart.length) {
    return "Your shopping cart is empty."
  }

  var statement1 = "In your cart, you have"
  var statement2 = "."

  if (cart.length === 1) {
    console.log(`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`);
  } else if (cart.length === 2) {
    console.log(`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}]`);
  } else {
    var listOfItems = "";
      for (var i = 0; i < cart.length -1; i++) {
        listOfItems += `${cart[i].itemName}, at $${cart[i].itemPrice}, `
      }
        listOfItems += `and ${cart[cart.length -1].itemName} at $${cart[cart.length -1].itemPrice}`

    return `In your cart, you have ${listOfItems}.`
  }
}

function total() {
  return cart.reduce( function(a, b){
        return a + b[prop];
    }, 0);
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
