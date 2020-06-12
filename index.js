

var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

// looked at solution


function addToCart(passedInItemNameString) {
  var item = { itemName: passedInItemNameString , itemPrice: Math.floor(Math.random() * 100)+1}
  cart.push(item)
  return `${passedInItemNameString} has been added to your cart.`
  // write your code here
}

function viewCart() {
  if (cart.length === 0) {
    return `Your shopping cart is empty.`
  } else if (cart.length === 1) {
    return 'In your cart, you have ' + cart[0].itemName + " at " + "$" + cart[0].itemPrice + "."
  }
  var item_status_string = 'In your cart, you have ';
  for(let i = 0; i < cart.length - 1; i++) {
    item_status_string = item_status_string +cart[i].itemName + " at " + "$" + cart[i].itemPrice + ", "
  }
  if (cart.length > 1) {
    item_status_string += 'and ' + cart[cart.length-1].itemName + " at " + "$" + cart[cart.length-1].itemPrice + "."
  }

  return item_status_string;

} 
 

  /**
   * cart = [
   *  {
   *    itemName: "bannas",
   *    itemPrice: 12
   *  },
   *  {
   *    itemName: "apples",
   *    itemPrice: 14
   *  },
   *  {
   *    itemName: "melons",
   *    itemPrice: 15
   *  },
   * ]
   */

  //First Objective
  //In your cart, you have lemons at $65.
  //Second Objective
  //In your cart, you have mango at $16, and nuts at $29.
  //Third Objective
  //In your cart, you have orange at $7, pear at $51, and quince at $79.




  function total() {
   let sum = 0
   for (let i = 0; i < cart.length; i++){
    sum += cart[i].itemPrice
   }
  // write your code here
  return (sum)
}


function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++){
    if(item === cart[i].itemName){
    cart.splice(i,1)
    return(cart)
  }
}
  return (`That item is not in your cart.`)
}


function placeOrder(cardNumber = undefined) {
  if (cardNumber) {
    const customerTotal = total()
    cart = []
    return (`Your total cost is $${customerTotal}, which will be charged to the card ${cardNumber}.`)
  }
    for (let i = 0; i < cart.length; cart[i++] = 0){
      return (cart)
    }
  if (cardNumber === undefined) {
    return(`Sorry, we don't have a credit card on file for you.`)
  }

}

// function placeOrder(cardNumber = undefined) {
 
//   if (cardNumber) {
//     const customerTotal = total()
//      cart = []
// return (`Your total cost is $${customerTotal}, which will be charged to the card ${cardNumber}.`)
//   }

//   if (cardNumber === undefined) {
//     return(`Sorry, we don't have a credit card on file for you.`)
//   }
 
// }


// Procedure: comparison of CC value true or false (CC number, cart value)
// Cc number = true or false
// If true then return interpolated string with cart value
// Pull items out of cart to show empty cart

// If false then return string indicating no CC
