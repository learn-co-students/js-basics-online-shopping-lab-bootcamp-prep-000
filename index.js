var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  	var itemName = item;
  	var itemPrice = Math.floor(Math.random() * 99) + 1;
  	var newItem = { [itemName]: itemPrice }
  	cart.push(newItem);
  	if (cart.length != 0) {
    	console.log(itemName + ' has been added to your cart.')
    }
    return cart;

}

function viewCart() {
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.');
  }
  else if (cart.length === 1){
  	var oneItem = cart[0];
    var oneItemName = Object.keys(oneItem);
    var oneItemPrice = oneItem[oneItemName];
    var oneItemStatement = oneItemName + " at $" + oneItemPrice + ".";
    console.log("In your cart, you have " + oneItemStatement);
  }
  else if (cart.length === 2) {
  	var firstItem = cart[0];
    var firstItemName = Object.keys(firstItem);
    var firstItemPrice = firstItem[firstItemName];
    var firstItemStatement = firstItemName + " at $" + firstItemPrice;
    var secondItem = cart[1];
    var secondItemName = Object.keys(secondItem);
    var secondItemPrice = secondItem[secondItemName];
    var secondItemStatement = secondItemName + " at $" + secondItemPrice + ".";
    console.log("In your cart, you have " + firstItemStatement + " and " + secondItemStatement);
  }
  else {
    var sentence = "";
	for (var x = 0; x < cart.length; x++) {
		var objectNamePrice= cart[x];
		var objectName = Object.keys(objectNamePrice);
    	var objectPrice = objectNamePrice[objectName];
    	var sayNamePrice = objectName + " at $" + objectPrice;
    	if (x === cart.length - 1) {
      		sentence += " and " + sayNamePrice + "."
      		}
      	else {
      		sentence += " " + sayNamePrice + ","
      		}
		console.log("In your cart, you have" + sentence);
	}
	}
}

function total() {
    var itemTotal = 0;
    for (var x = 0; x < cart.length; x++) {
      var itemNamePrice = cart[x];
      var itemName = Object.keys(itemNamePrice);
      var itemPrice = itemNamePrice[itemName];
      itemTotal += itemPrice;
    }
    return itemTotal;
}

function removeFromCart(item) {
  let itemInCart = false;

  for (let i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true;
      cart = cart.slice(0, i).concat(cart.slice(i + 1));
      l--;
    }
  }

  if (!itemInCart) {
    console.log("That item is not in your cart.");
  }

  return cart;
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.");
    return false;
  }

  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);

  cart = [];
}
