var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // create an object representing the item consisting of one key/value pair where the key is the item name and the value is a random interger between 1 and 100
 //{itemName: itemPrice}

 var itemName = item;
 //itemName takes the argument and attaches it to a variable
 //is this redundant, and can I just use item throughout the function, or does this serve a purpose in terms of utilizing the argument in multiple different ways?
 //because item is given as a string there is no need to convert to a string or do anything to the argument here (i.e. `${item}`)

 var itemPrice = Math.floor(Math.random() * Math.floor(100));
//creates variable itemPrice and attaches it to the value of a random interger between 1 and 100 (price)


 cart.push ({ [itemName]: itemPrice });
//creates the key-value pair from the item argument and the random interger generator and attaches it to the object
 //uses .push to attach the object to the cart.
 //follows format { itemName: itemPrice }


 console.log (`${itemName} has been added to your cart.`);
 //prints which item has been added to the cart

 return cart
}



function viewCart() {
  var cartIntro = `In your cart, you have`;
  var l = cart.length-1;
  var whatsInside = [];


  if (cart.length > 2){
    //condition: if cart length is 3 or more items

      for (var i=0; i<l; ++i){
        //loop goings through cart and inspects each time one at a time
        //i starts at the first object in the array and goes up to the last (cart.length will go one above, how convenient)

        var item = cart[i];
        var itemName = Object.keys(item)[0];
        var itemPrice = item[itemName];
        //i is used to identify each object in the array
        //assigns current object we are working on to the variable item
        //assigns key to the variable itemName
        //assigns value to the variable itemPrice
        whatsInside.push(` ${itemName} at $${itemPrice}`);

      }


      var l = cart.length-1;
      var lastItem = cart[l];
      //last item grabs the last object in the array (for the and, . statment)
      var lastItemName = Object.keys(lastItem)[0];
      var lastItemPrice = lastItem[lastItemName];

      var lastCartStatement = `, and ${lastItemName} at $${lastItemPrice}.`;

      console.log (`${cartIntro}${whatsInside}${lastCartStatement}`);

  } else if (cart.length == 2){
    //condition: if cart length has 2 items
    var itemOne = cart[0];
    var itemNameOne = Object.keys(itemOne)[0];
    var itemPriceOne = itemOne[itemNameOne];

    var itemTwo = cart[1];
    var itemTwoName = Object.keys(cart[1])[0];
    var itemTwoPrice = itemTwo[itemTwoName];
    //efficient way would be to set up objects so that they are easy to print
    //array of items, array of prices
    //call the array at the correct place instead of the specific item

    var cartStatementOne = ` ${itemNameOne} at $${itemPriceOne}`;
    var cartStatementTwo = ` and ${itemTwoName} at $${itemTwoPrice}.`;

    console.log(`${cartIntro}${cartStatementOne}${cartStatementTwo}`);

  } else if (cart.length == 1){
    //condition: if cart length has 1 items
    //I tried using cart.valueOf() to access the object inside the array, but I get back [object Object] when i print the result in the console.
    var item = cart[0];
    var itemName = Object.keys(item)[0];
    var itemPrice = item[itemName];

    console.log (`In your cart, you have ${itemName} at $${itemPrice}.`)
  } else {
    //condition: if the cart is empty
    console.log (`Your shopping cart is empty.`)
  }


}

function total() {

  var cartTotal = 0;

  for (var i=0; i<cart.length; ++i){
    var item = cart[i];
    var itemName = Object.keys(item)[0];
    var itemPrice = item[itemName];

    cartTotal += parseInt(itemPrice);
    //adds the current itemPrice in the loop to the variable cartTotal
  }
  return cartTotal;
}

function removeFromCart(item) {

  var cartLength = cart.length

  for (var i=0; i<cart.length; ++i){

    //loops through cart and evaluates each item in cart
    var currentItem = cart[i];
    var currentItemName = Object.keys(currentItem)[0];
    if (currentItemName == item) {
      //checks to see if item argument matches the currentItemName
    cart = [...cart.slice(0, i), ...cart.slice(i+1)];
      //removes currentItem from cart

    } else {
      //don't do anything
    }
  }

  if (cartLength == cart.length){

    /*if the variable cartLength is the same as the current cartLength (after going through the loop)
    then no items have been removed from the cart
    therefore, argument item is not among the items in the cart*/
    console.log (`That item is not in your cart.`);

  } else {
    //don't do anything
  }
}

function placeOrder(cardNumber) {
  if (cardNumber!= null) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = [];
  }else {
    console.log(`Sorry, we don't have a credit card on file for you.`)
  }

}
