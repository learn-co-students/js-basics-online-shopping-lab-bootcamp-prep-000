var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}


//1)
function addToCart(item) {

  //Create new obj
  var itemObj = {
    itemName: item,
    itemPrice: Math.floor(Math.random() * 100) + 1
  }

  cart.push(itemObj);

 return `${item} has been added to your cart.`;

}


//2, 6)
function viewCart() {

  //If nothing is in my cart, return
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  }

  var firstItemIndex = 0;
  var lastItemIndex = cart.length-1;
  var answer = `In your cart, you have `;
  var numOfItems = cart.length;
  //console.log(`numOfItems in cart: ${numOfItems}`);


  //If there is a first item (then there are items in the cart)
  if (numOfItems === 1) {

    //console.log(`first if (numOfItems === 1)`);
    answer +=  `${cart[0].itemName} at $${cart[0].itemPrice}.`;
    return answer;


  } else if (numOfItems > 2) {

    //console.log(`else if (numOfItems > 2)`);
    //Add first item
    answer += `${cart[firstItemIndex].itemName} at $${cart[firstItemIndex].itemPrice}`;
    //For all items except for the last (...length-1) add itemName and itemPrice to the answer
    for (let i = 1; i < (cart.length-1); i += 1) {
      answer += `, ${cart[i].itemName} at $${cart[i].itemPrice}`;
    }

    //Add the last item
    answer += `, and ${cart[lastItemIndex].itemName} at $${cart[lastItemIndex].itemPrice}.`;
    return answer;

  } else { //If numOfItems is 2

    //console.log(`else if (numOfItems === 2)`);
    answer +=  `${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
    return answer;
  }

}


//3, 12)
function total() {

  var total = 0;

  for (let i = 0; i < cart.length; i += 1) {
    total += cart[i].itemPrice;
  }

  return total;

}


//4, 13)
function removeFromCart(item) {

  //Loop through the cart and...
  for (let i = 0; i < cart.length; i += 1) {

    //... test if you find an item named like <item>
    if (cart[i].itemName === item) {

      //If so, set a variable to the current <cart[index]>
      var isPresentAtIndex = i;
    }

  }

  if (!isPresentAtIndex) {
    return "That item is not in your cart."
  }

  cart.splice(isPresentAtIndex, 1);
  return cart;

}


//5, 17)
function placeOrder(cardNumber) {

 if (!cardNumber) {
   return "Sorry, we don't have a credit card on file for you.";
 }

 var amount = total();
 setCart([]);
 return `Your total cost is $${amount}, which will be charged to the card ${cardNumber}.`;

}
