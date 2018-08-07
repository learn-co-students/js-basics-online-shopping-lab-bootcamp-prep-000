var cart = [];

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

/* function viewCart() {
  // write your code here
  if (!cart.length) {
    return `Your shopping cart is empty.`
  } else {
    var sentence = "In your cart, you have ";
    var items = "";
    for (let i=0; i < cart.length+1; i++) {
      items += cart[i]['itemName']+" at ";
      items += "$"+cart[i]['itemPrice']+",";
      var fullSentence = sentence + items;
      return fullSentence.slice(0,fullSentence.length-1)+".";
    }
  }
} */

function viewCart () {
  // write your code here
    if (!cart.length) {
    return `Your shopping cart is empty.`
  } else if (cart.length>=3) {
    var commaItems = "";
    var fullSentence = "In your cart, you have ";
    for (let i=0;i<cart.length-1;i++) {
      commaItems += `${cart[i].itemName} at $${cart[i].itemPrice}, `
      fullSentence += commaItems;
      fullSentence += `and ${cart[cart.length].itemName} at $${cart[cart.length].itemPrice}.`
    }
  }
  return fullSentence;
}

//I give up!

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}


console.log(listOfCart());
