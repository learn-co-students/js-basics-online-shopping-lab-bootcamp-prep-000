var cart=[];
// define global variable, variables deined w = operator, initialize an empty array
//cart = {'pizza':44, 'kindle':33, 'flatscreen':22, 'telescope':
//this is what it will look ook like when a few items have been added
//cart = [{'a':33}, {'b':44}, {'c':55}]
function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}


function getCart() {
  return cart
}

function addToCart(item) {
  var itemPrice = Math.floor(Math.random() * 100);
  cart.push({ [item]: itemPrice })
  console.log(`${item}has been added to your cart.`);
  return cart
}
//[{"0": {"itemname": price}} 
/*This function should loop over every item in cart to print out
function viewCart( ){
var total = cart.length    //loop over every item in the cart arr
      if (cart.length === 0) {
        return console.log("Your shopping cart is empty.");
      }

var itemAndPrice=(`${cart[itemName]} + "at $" );
var str = "In your cart, you have";
  for (var itemInCart in cart) //for ...in loop
        var itemsWithPrices = (cart[i]);
        var item = //Object.keys for item and price at index 0;
        var price = ;
            //do something run some code
        itemsWithPrices.push(`${item} at $${price}`);
          }
          console.log(`In your cart, you have ${itemsAndPrices.join(', ')}.`);
    }
}
*/
function placeOrder(cardNumber) {
  if (!cardNumber) {
    return console.log("We don't have a credit card on file for you to place your order.")
  }

  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)

  cart = []
}
function removeFromCart(item){
    for (var index in cart){
      var current = cart[index]
      if (cart[index].hasOwnProperty(item)){
        cart.splice(index, 1)
        return cart
      }
    }
    console.log("That item is not in your cart.")
  }
