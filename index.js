var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var obj = new Object({ [item] : Math.floor((Math.random() * 100) + 1) })
  cart.push(obj)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() { //[{apples: 2}, {socks: 5}]
  if (cart.length) {
    var newArray = []

    for (var i = 0; i < cart.length; i++) {
      var currentItem = cart[i] //{apples: 2}
      var itemName = Object.keys(currentItem)[0] //"apples"
      var itemPrice = currentItem[itemName] //2

      newArray.push(`${itemName} at $${itemPrice}`)
    }
  } else {
    return console.log('Your shopping cart is empty.')
  }

  if(cart.length > 2) {
    //we only want to get up to the last element of newArray, all of that stuff we join with (", ")
    //then we join the last element of newArray with (" and ")
    //we can do this by using .slice to get the parts of the array we need
    //newArray.slice(0, newArray.length-1) <~ this part we .join with (", ")
    //then, after that, we join the last part of newArray (newArray.slice(-1))
    console.log(`In your cart, you have ${newArray.slice(0, newArray.length - 1).join(", ")}, and ${newArray.slice(-1)}.`)
  } else if (cart.length === 2) {
    console.log(`In your cart, you have ${newArray.join(" and ")}.`)
  } else if (cart.length === 1) {
    console.log(`In your cart, you have ${newArray[0]}.`)
  }
}

function total() {
  var cl = cart.length; // length of the cart
  var itemAndPrice; // saves to objet from the cart
  var item; // the object key
  var price; // the value of the object key property
  var allPrices = []; // to store the prices in an array
  var total = 0; // to add the values in the allPrices array

  for (var i = 0; i < cl; i++) {
      itemAndPrice = cart[i]; // returns object from cart array
      item = Object.keys(itemAndPrice)[0]; // returns object key in string format
      price = itemAndPrice[item]; // returns value of object key property
      allPrices.push(price);
  }
  for (var x = 0; x < allPrices.length; x++) {
      total += parseInt(allPrices[x]);
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
