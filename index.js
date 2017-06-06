var cart = [];                                                                      //defined a global variable cart that contains an empty array

function setCart(newCart) {                                                         //provided function
  cart = newCart;
}

function total() {                                                                 //provided function
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart(){                                                                     //function that returns the contents of cart with no argument
  return cart;
}

function addToCart(item){                                                               //create a function that takes an argument as a string and adds items to cart
  const price = Math.floor(100 * Math.random());                                        //generate a random number from 0 to 1, multiply it by 100, and then round it to the nearest integer. Then set that value to price.
  cart.push({[item] : price});                                                          //add the key and value as an object key-value pair to the end of the cart array
  console.log(`${item} has been added to your cart.`);                                  //print that the item has been added to cart
  return getCart();                                                                     //return the contents of cart using the getCart() function
}

function viewCart(){                                                                                        //function that lists the key and value of all the items in the cart
  var string = ("In your cart, you have ");                                                                 //create a string that's the beginning of a sentence
  var l = cart.length;                                                                                      //set l = to the length of the cart array
  if (cart.length > 0){                                                                                     //perform an action if the cart array has something in it
    for (var i = 0; i < l - 1; i++){                                                                        //go through each index in cart except for the last one and add the following
      string = string + (`${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}, `);                 //add to the sentence (string) the name of the key and it's corresponging value as price
    }
    string = string + (`${Object.keys(cart[l - 1])} at $${cart[l - 1][Object.keys(cart[l - 1])]}.`);       //add to the sentence (string) the name of the final key and its corresponding value as price
    console.log(string);                                                                                   //print the entire sentence (string)
  } else {                                                                                                 //if the cart has nothing in it do the following
    console.log("Your shopping cart is empty.");                                                           //print the shopping cart is empty
  }
}

function removeFromCart(item){                                                          //function that removes items from the cart
  var tally = 0;                                                                        //variable tally that is set to zero and will keep track of the number of times there is no match between the argument and the keys in cart
  for (var i = 0, l = cart.length; i < l; i++){                                         //perform an action over all the elements of cart, and set cart.length to the variable l
    if (item == Object.keys(cart[i])){                                                  //if there's a match between the argument and a key do the following
      cart.splice(i, 1);                                                                //get rid of the object contains the matching key
      console.log(`${item} has been removed from your cart.`);                          //print the item that you removed from the cart
    } else {                                                                            //in all other situations, basically when there's no match between the argument and a key
      tally += 1;                                                                       //add 1 to tally
    }
  }
  if (tally === l){                                                           //tally will equal cart.length if the for loop checked each object and found no match between the key and argument. If this happens, do the following.
    console.log("That item is not in your cart.");                                      //print that the item is not in the cart
  }
  return getCart();                                                                     //return the contents of the cart
}

function placeOrder(cardNumber){                                                                                        //function that places an order using a string argument that is a credit card number
  if (cardNumber === undefined){                                                                                         //if no argument is passed, cardNumber will be undefined, and so the function will do the following
    console.log("We don't have a credit card on file for you to place your order.");                                     //print that there's no credit card on finle to make an order
  } else {                                                                                                                //if an argument is passed (looking for a string) do the following
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);                      //call on total() function to add up combined values of each object and describe what card this total will be charged to
    cart = [];                                                                                                          //empty the shopping cart by emptying the array
  }
}
