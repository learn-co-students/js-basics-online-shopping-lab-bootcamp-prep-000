var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var n = Math.floor((Math.random() * 100) + 1);
 var newCart = {};
 newCart.itemName = item;
 newCart.itemPrice = n;
 cart.push(newCart);
 return `${item} has been added to your cart.`
}

function viewCart() {
if (getCart().length === 0) {
    return "Your shopping cart is empty."
  }  else {
     var sentence = 'In your cart, you have '
  if (getCart().length >= 1 ) {
    sentence += `${getCart()[0].itemName} at $${getCart()[0].itemPrice}`
  }
  if (getCart().length >= 2 ) {
    var moreThanTwo = ''
    for (var i=1; i<getCart().length -1; i++) {
      moreThanTwo += `, ${getCart()[i].itemName} at $${getCart()[i].itemPrice}`
    }
    sentence += `${moreThanTwo}, and ${getCart()[getCart().length-1].itemName} at $${getCart()[getCart().length-1].itemPrice}`
  }

  return `${sentence}.`
  }
}



function total() {
  var sum = 0;
  for (let i = 0; i < getCart().length; i++) {
    sum = sum + getCart()[i].itemPrice;
  }
  return sum
}

function searchItem(item) {
  var itemToRemove
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].item === item) {
      itemToRemove = getCart()[i];
    } return itemToRemove;
  }
}

function thereIsNoItem() {
  return `That item is not in your cart.`
}

function deleteItem (item) {
  itemIndex = cart.indexOf(item);
  cart.splice(itemIndex, 1);
}

function removeFromCart(item) {
  var removeItem = searchItem(item);
  return removeItem ? deleteItem(removeItem) : thereIsNoItem(); 	
}

console.log(cart)

//function placeOrder(cardNumber) {
  // write your codehere 

 