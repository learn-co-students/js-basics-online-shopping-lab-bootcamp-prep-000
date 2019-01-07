var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100) + 1; //generates price of item
  cart.push({[item]: price}); //makes object and pushes to array
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  const l = cart.length;
  if (!l) {
    return console.log("Your shopping cart is empty.");
  }
//above returns statement if cart is empty
  let filler = [];

  for (let i = 0; i < l; i++) {
    let itemAndPrice = cart[i];
    let item = Object.keys(itemAndPrice)[0];
    let price = itemAndPrice[item];

    filler.push(`${item} at \$${price}`);
  }

  switch(filler.length) {
    case 1:  //returns the statement at length of one
      break;
    case 2: //combines the two elements in filler array and returns the statement
      filler = filler.join(" and ");
      break;
    default: //combines all elements seperated with commas and "and" then returns statement
      filler[l-1] = "and ".concat(filler[l-1]);
      filler = filler.join(", ");
  }

  console.log(`In your cart, you have ${filler}.`);
}

function total() {
  var total = 0;
  for(var i = 0; i < cart.length; i++) { //run through each element in array cart
    for(var item in cart[i]) { //in each element find the value of key item
      total += cart[i][item]; //add item to total
    }
  }
  return total;
}

function removeFromCart(item) {
  var inCart = false; //compare factor for item if not in cart

  for(var i = 0, length = cart.length; i < length; i++){//need end var since the end value will change
    if(cart[i].hasOwnProperty(item)) { //checks array object at element 'i' to see if it contains the item
      inCart = true; //change check pass to true
      cart = cart.slice(0, i).concat(cart.slice(i + 1));
      //slices up to 'i' exlusively then concats the element following i till end of array
      //effectively removes element 'i'
      length--; //leangth becomes one shorter since item was removed
    }
  }

  if(inCart == false){ //what to print if item is not in cart
    console.log("That item is not in your cart.")
  }

  return cart;
}

function placeOrder(cardNumber) {
  if(!cardNumber){
    console.log("Sorry, we don't have a credit card on file for you.");
    return false
  }

  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);

  cart.splice(0);
}
