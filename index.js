var cart = [];                                                                                              //cart array to store items for purchase

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);                                                            //math.random() * 100 creates random number up to 100 and math.floor makes it a rounded integer
  cart.push({ [item]: price });                                                                           //adds item and random price to cart array
  console.log(`${item} has been added to your cart.`);                                                    //notifies of cart addition
  return cart;
}

function viewCart() {
  var items = [];                                                                                         //store items in empty array
  if (cart.length === 0){
    console.log("Your shopping cart is empty.")                                                           // if cart is empty pass notification for empty cart
  }
  var string = "In your cart, you have ";                                                                 //text string for below

  if (cart.length === 1) {                                                                                // string for cart with one item
    console.log(string += `${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`)
  } else if (cart.length === 2) {                                                                         //string for cart with two items
    console.log(string += `${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]} and ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}.`)
  } else {
    for (var i=0; i<cart.length; i++) {                                                                   //loop functionality
      var joint;                                                                                          //var for text connection
      if (i === cart.length - 2){
          joint = ", and ";                                                                               //textual connector
      } else if (i === cart.length - 1) {
          joint = "";                                                                                     //textual connector
      } else {
          joint = ", ";                                                                                   //textual connector
      }
      console.log(string += `${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}` + joint + `${i === cart.length - 1 ? '.' : ''}`)
    }
  }

  return (string);
}

function total() {
  var sum = 0;                                                                                            //store
  //var itemsInCart = [];
  for (let i = 0; i < cart.length; i++){                                                                  //loop functionality
    sum += cart[i][Object.keys(cart[i])];                                                                 // each iteration the sum is applied to the sum variable
  }
  return sum;                                                                                             //return sum
}

function removeFromCart(item) {

let itemToRemove = false                                                                                  //boolean

for (let i = 0; i < cart.length; i++) {                                                                   //loop functionality
    if (cart[i].hasOwnProperty(item)) {                                                                   // checks cart at i iterated index for the same input name as item
      itemToRemove = true;                                                                                //if the name matches itemToRemove becomes true
      cart = cart.slice(0, i).concat(cart.slice(i + 1));                                                  //slices from beginning to the item index. the item is then concatenated with the second half of the array
    }
  }
  if (!itemToRemove){                                                                                     // if item doesnt pass check then message is passed
    console.log("That item is not in your cart.")
  }
  return cart;
}

function placeOrder(cardNumber) {
  //var text1 ="Your total cost is "
  //var text2 =", which will be charged to the card "
  if(!cardNumber){                                                                                        //if not cardNumber then issue statement
    return console.log("Sorry, we don't have a credit card on file for you.")
  }
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)         //if cardNumber matches then pass message with total function displaying the total and card number
  cart = [];                                                                                              //resets cart back to empty if success
}
