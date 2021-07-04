var cart = [];

function getCart() {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
   var price = Math.floor((Math.random() * 100) + 1);
   var newItem = { [item] : price };
   cart.push(newItem);
   console.log(`${item} has been added to your cart.`)
 return cart;
}

function viewCart() {
    var myObj = cart[0];
    var str = 'In your cart, you have ';
    if (cart.length === 0) {
        return console.log("Your shopping cart is empty.")

      } else if (cart.length === 1) {
        str += `${Object.keys(cart[0])} at $${myObj[Object.keys(cart[0])]}.`;
        return console.log(str);

      } else if (cart.length === 2) {
        str += `${Object.keys(cart[0])} at $${myObj[Object.keys(cart[0])]} and `;
        myObj=cart[1];
        str += `${Object.keys(cart[1])} at $${myObj[Object.keys(cart[1])]}.`
        return console.log(str);

      } else if (cart.length > 2) { 
          var i = 0;
          while (i<cart.length-3) {
            myObj = cart[i]
            str += `${Object.keys(cart[i])} at $${myObj[Object.keys(cart[i])]}, `;
            i++;
          }
          while (i<cart.length-2) {
            myObj = cart[i]
            str += `${Object.keys(cart[i])} at $${myObj[Object.keys(cart[i])]},`;
            i++;
          }
          while(i===cart.length-2){
            myObj = cart[i]
            str += ` ${Object.keys(cart[i])} at $${myObj[Object.keys(cart[i])]}`;
            i++;
          }
          while(i===cart.length-1){
            myObj = cart[i]
            str += `, and ${Object.keys(cart[i])} at $${myObj[Object.keys(cart[i])]}.`;
            i++;
          }
      }
      return console.log(str);
}

function total() {
    var totalCost = 0;
  for (var i = 0; i < cart.length; i++) {
    var myObj = cart[i];
    totalCost += myObj[Object.keys(cart[i])]
  }
  return totalCost;
}

function removeFromCart(item) {
  var itemExists = false;
  for (var i = 0; i<cart.length; i++) {
    if (cart[i].hasOwnProperty(item)){
      cart.splice(i,1);
      itemExists = true;
    } 
    
  }
  if (!itemExists) {
    console.log("That item is not in your cart.");
  }
  return cart;
}

function placeOrder(cardNumber) {
    if(!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = [];
  }
}
