var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 // generate random num between 1 - 100
 var itemPrice = Math.floor((Math.random() * 99));
 //call push on cart, pass new obj w/ item string as key, wrapped by [] and its value price not wrapped
cart.push(new Object({[itemName]: itemPrice}));
 //use backticks with template literals
 console.log(`${itemName} has been added to your cart.`);
 return cart;
}

function viewCart() {
  var cartObject = getCart();
  var cart = Object.keys(cartObject);
    if(cart.length < 1) {
      console.log(`Your shopping cart is empty.`);
    }else if (cart.length > 0) {
    var mystr = "In your cart, you have ";
    
    for(var i = 0, l = cart.length; i < l; i++) {
      //loops list of properties in cart
      //list reps properties in cart that will be iterated in cart 
      for each (var list in cart[i]){
        //here list reps key from cart and cart[i][list] reps value which is itemName and itemPrice
        mystr += `${list} at $${cart[i][list]}`;
        if(i !== cart.length-1) {
          mystr += `, `;
        } else {
          mystr += ".";
        }
      }
    }
  console.log(mystr);
  }
}
function total() {
  var total = 0;
  for(i=0; i<cart.length; i++) {
     cartTotal += cart[i][Object.keys(cart[i])]
  }
  return total;
}

function removeFromCart(item) {
  cart.hasOwnProperty(item) ? item.pop() : console.log("That item is not in your cart.");
}

function placeOrder(cardNumber) {
  if (!creditCard) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log("Your total cost is $" + total() + ", which will be charged to the card " + creditCard + ".");
    cart = [];
  }
}
