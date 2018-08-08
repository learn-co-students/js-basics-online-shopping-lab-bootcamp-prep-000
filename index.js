var cart = [
  {itemName: "test"},
  {itemName: "test2"},
  {itemName: "test3"}
  ];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 let price = Math.floor(Math.random()*100)
 cart.push({["itemName"]:item, ["itemPrice"]:price})
 return `${item} has been added to your cart.`
}

function viewCart () {
  if (cart.length > 2) {
    var first = "In your cart, you have ";
    var second = "";
    var third = "";
    for (let i=0 ; i < getCart().length-1 ; i++) {
      second += `${cart[i].itemName} at $${cart[i].itemPrice}, `;
    } var l = getCart.length+2;
      third += `and ${cart[l].itemName} at $${cart[l].itemPrice}.`;
      var sentence = first + second + third;
      return sentence;
  } else if (cart.length === 1) {
    return  `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else if (cart.length === 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  } else {
    return `Your shopping cart is empty.`
  }
}


function total() {
  // write your code here
  var sum = 0;
  for (let i = 0 ; i < cart.length ; i++) {
    sum += cart[i].itemPrice;
  } return sum;
}

function removeFromCart(item) {
  for (let i=0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i,1);
      return cart;
    } 
  } return "That item is not in your cart."
}

console.log(removeFromCart("test2"));
console.log(removeFromCart("floppy"));


function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var cost = total();
    cart = [];
    return `Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`
  } 
}

