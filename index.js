var cart = [];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getCart() { //this updates the items included in the cart list
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
var object = {
  itemName: item,
  itemPrice: getRandomInt(100)
};
 cart.push(object) //this adds the items to the cart
 return `${item} has been added to your cart.`
}

function viewCart() {
  var cartSummary = []; //has to be outside the for loop because otherwise it will empty each time.
  for (var i = 0; i < cart.length; i++) {
    cartSummary.push(`${cart[i].itemName} at \$${cart[i].itemPrice}`);
  }
  if (cart.length === 0) {
    return 'Your shopping cart is empty.';
  }
    if (cart.length === 1) {
      return `In your cart, you have ${cartSummary[0]}.`;
    }
      else {
        var final = cartSummary.pop() //remove the last entry and add to the end of the sentence.
        return `In your cart, you have ${cartSummary.join(', ')}, and ${final}.`
    }
}

function total() {
  // write your code here
  var costSummary = [];
  for (var i = 0; i < cart.length; i++) {
    costSummary.push(`${cart[i].itemPrice}`); //this adds all the costs to an array
  }
  var sum = 0;

  for (var i = 0; i < costSummary.length; i++) {
    sum += parseInt(costSummary[i])
  }
  return sum
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (item === cart[i].itemName) {
      cart.splice([i], 1)
    }
    // if (item === cart[i].itemName !== false) {
    //return 'That item is not in your cart.'
    //   }
    }
}
//  var tie = cart.indexOf({itemName: "item", itemPrice: })
//const cardNumber = Math.floor(Math.random() * 100000000);

function placeOrder(card) {
  if (card === undefined) {
    var message = 'Sorry, we don\'t have a credit card on file for you.'
    cart = [];
  } else {
    var message = `Your total cost is \$${total()}, which will be charged to the card ${card}.`
    }
    return message
}
