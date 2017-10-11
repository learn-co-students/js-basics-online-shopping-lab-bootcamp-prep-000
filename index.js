var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.random() * 100                              //generate a random price that is not an integer
 price = Math.floor(price)                                    //truncate
 var newItem = new Object({[item] : price})                   //create the item-price pair
 cart.push(newItem)                                           //add it to the cart
 console.log(`${item} has been added to your cart.`)          //print the statement
 return cart                                                  //return the updated cart

}

function viewCart() {
  var results = []                                                              //array of strings
  var itemName
  var itemPrice

  if (cart.length < 1){                                                         //if the cart is empty...
    console.log("Your shopping cart is empty.")
    return

  } else if (cart.length === 1){                                                //if only 1 item
    itemName = Object.keys(cart[0])[0]
    itemPrice = cart[0][itemName]
    console.log(`In your cart, you have ${itemName} at $${itemPrice}.`)
    return

  } else if (cart.length === 2) {                                               //if 2 item cart
    itemName = Object.keys(cart[0])[0]
    itemPrice = cart[0][itemName]
    var item2 = Object.keys(cart[1])[0]
    var item2Price = cart[1][item2]
    console.log(`In your cart, you have ${itemName} at $${itemPrice} and ${item2} at $${item2Price}.`)
    return

  } else {                                                                      //3+ items
    for (let i = 0; i < cart.length; i++){                                      //iterate thru the cart

      itemName = Object.keys(cart[i])[0]                                        //get the item name
      itemPrice = cart[i][itemName]                                             //get the item price
      //add the appropriate strings:
      if(i === cart.length - 1){                                                //if last item
        results[i] = `and ${itemName} at $${itemPrice}.`
      } else {                                                                  //otherwise
        results[i] = `${itemName} at $${itemPrice}`
      }//end for if-else
    }//end for loop
    console.log("In your cart, you have " + results.join(", "))
    return
  }//end 3+ item cart else
}//end viewCart() function

function total() {

  var price = 0                                                                 //initialize total @ 0
  var itemName
  var itemPrice

  for(let i = 0; i < cart.length; i++){                                         //iterate thru the cart
    itemName = Object.keys(cart[i])[0]                                          //get the item name
    itemPrice = cart[i][itemName]                                               //get the item price

    price += itemPrice                                                          //add to the total
  }
  return price
}

function removeFromCart(item) {

  var currentObject
  var keyArray
  var itemName

  for(let i = 0; i < cart.length; i++){                     //iterate thru the cart
    currentObject = cart[i]                                 //get the object at the current index
    keyArray = Object.keys(currentObject)                   //get an array of keys of the current object
    itemName = keyArray[0]                                  //get the key (name), this is always at the zero index

    if(itemName === item && i === 0){                       //if its the first item in the cart
      cart = cart.slice(1)                                  //slice from index 1 to the end and update the cart
      return cart
    } else if (itemName === item && i === cart.length - 1){ //if its the last item in the cart
      cart = cart.slice(0,i)                                //slice from the beginning to the end (exclusive)
      return cart
    } else if (itemName === item){                          //if its neither the first nor last item in the cart
      var cartA = cart.slice(0,i)                           //slice from 0 to i exclusive
      var cartB = cart.slice(i+1)                           //and from i+1 to the end
      cart = cartA.concat(cartB)                            //combine the two slices back into cart
      return cart
    }//end if-else statements
  }//end for loop
  console.log("That item is not in your cart.")
  return cart
}//end function

//check test for specific input/output
function placeOrder(cardNumber) {
  if(cardNumber === undefined){                                                 //if there is no argument
    console.log("Sorry, we don't have a credit card on file for you.")          //print the statement
    return
  } else {                                                                      //otherwise
    var finalTotal = total(cart)                                                //get the total and print the statement
    console.log(`Your total cost is $${finalTotal}, which will be charged to the card ${cardNumber}.`)
    cart = []                                                                   //and empty the cart
    return
  }//end if-else
}//end function
