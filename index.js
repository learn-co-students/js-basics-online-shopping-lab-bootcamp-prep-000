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
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
