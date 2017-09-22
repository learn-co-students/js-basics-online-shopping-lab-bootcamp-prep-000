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
 var price = Math.floor(Math.random()*100);
 var product = {[item]: price};
 cart.push(product);

 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
  if (cart.length > 0){
      var newArray = [];
      var i = 0;
      while (cart.length > i){
      newArray.push(`${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`);
      i++;
    }

    function formatArray(arr){
    var outStr = "";
    if (arr.length === 1) {
        outStr = arr[0];
    } else if (arr.length === 2) {
        //joins all with "and" but no commas
        //example: "bob and sam"
        outStr = arr.join(' and ');
    } else if (arr.length > 2) {
        //joins all with commas, but last one gets ", and" (oxford comma!)
        //example: "bob, joe, and sam"
        outStr = arr.slice(0, -1).join(', ') + ', and ' + arr.slice(-1);
    }
    return outStr;
}

    console.log(`In your cart, you have ${formatArray(newArray)}.`);

  } else {
    console.log("Your shopping cart is empty.");
  }

}

function total() {
  // write your code here
  var sum = 0;
  for (let i=0; i < cart.length; i++){
    sum += parseInt(cart[i][Object.keys(cart[i])]);
  }
  return sum;
}

function removeFromCart(item) {
  for (let i=0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item)){
      cart.splice(i, 1);
      return cart;
    }}
      console.log("That item is not in your cart.");
      return cart;
}

function placeOrder(n) {
  // write your code here
  if (n==null){
    console.log("Sorry, we don't have a credit card on file for you.");
  } else {
    var sum = 0;
    for (let i=0; i < cart.length; i++){
      sum += parseInt(cart[i][Object.keys(cart[i])]);
    }
    console.log(`Your total cost is $${sum}, which will be charged to the card ${n}.`);
    cart.length = 0;
  }
}
