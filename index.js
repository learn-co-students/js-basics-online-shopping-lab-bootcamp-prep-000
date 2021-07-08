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
 cart.push({[item]: Math.floor(Math.random() * 100)})
 console.log(`${item} has been added to your cart.`)
 return cart;
}

function viewCart() {
  // write your code here
  console.log(cart.length);
  
  if(cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else if (cart.length === 1) {
      console.log(`In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])}.`)    
  } else if (cart.length === 2) {
    console.log(`In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])} and ${Object.keys(cart[1])} at $${Object.values(cart[1])}.`)
  } else {
    var str = "In your cart, you have "
    for(var i = 0; i < cart.length; i++) {
      str += `${Object.keys(cart[i])} at $${Object.values(cart[i])}, `
    }   
    // delete last comma and extra space and add a period at the end.
    str = str.slice(0, str.length - 2)
    str += "."

    //now string it all together
    var lastCommaPosition = str.lastIndexOf(','); 
    var part1 = str.slice(0, lastCommaPosition); 
    var part2 = ", and "; 
    var part3 = str.slice(lastCommaPosition + 2); 

    console.log(part1 + part2 + part3)
  }
}

function total() {
  // write your code here
  var total = 0 
  console.log(cart)
  for (var i = 0; i < cart.length; i++){
    total += parseInt(Object.values(cart[i]))
  }
  return total;
}

function removeFromCart(item) {
    // write your code here
    var found = false
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].hasOwnProperty(item)){
        // if item found is first, last or in between 
        if (i === 0) {
          cart.shift();
        } else if (i === cart.length - 1) {
          cart.pop();
        } else {
          var tempCart1=cart.slice(0,i)
          var tempCart2=cart.slice(i+1, cart.length)

          cart = tempCart1.concat(tempCart2)        
        }
        return cart.length        
      }
    }
    console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = []
  }
}