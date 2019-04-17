var cart = [];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getCart() { //this updates the items included in the cart list
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
let object = {
  itemName: item,
  itemPrice: getRandomInt(100)
};
 cart.push(object) //this adds the items to the cart
 return `${item} has been added to your cart.`
}

function viewCart() {
// //   // write your code here
// for (let i = 0; i < cart.length; i++) {
//   let cartSummary = [
//     `${cart[i].itemName} at \$${cart[i].itemPrice}`
//   ];
//   if (cart.length === 0) {
//     return 'Your shopping cart is empty.';
//   }
//   if (cartSummary.length === 1) {
//     return `In your cart, you have ${cartSummary[0]}.`;
//     }
//     else {
//       let final = cartSummary.pop //remove the last entry and add to the end of the sentence.
//       return `In your cart, you have ${cartSummary.join(', ')} and ${final}.`
//     }
// }
// }

if (cart.length === 0) {
  return 'Your shopping cart is empty.'
} if (cart.length === 1) {
  return `In your cart, you have ${cartSummary[0]}.`
  } else {
    let cartSummary = [];
      for (let i = 0; i < cart.length; i++) {
        cartSummary.push(`${cart[i].itemName} at \$${cart[i].itemPrice}`)
        // let cartSummary = [
        //   `${cart[i].itemName} at \$${cart[i].itemPrice}`
        // ]
        let final = cartSummary.pop //remove the last entry and add to the end of the sentence.
        return `In your cart, you have ${cartSummary.join(', ')} and ${final}.`
//    return `In your cart, you have ${cart[0].itemName} at \$${cart[0].itemPrice}.`; //opens the values inside the cart array
      }
  }
}

//create a new array with the entries of item and price and then to a join command join(', ').
    //  let i = 0;
    //  while (i < whatIGot.length) {
    //      whatIGot.push(`${i+1}. ${line[i]}`)
    //      ++i
    //    } return `The line is currently: ${whosLeft.join(', ')}`;


function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
  // delete cart.
}

function placeOrder(cardNumber) {
  // write your code here
    if (cardNumber === 12345678) {
      return `Your total cost is $undefined, which will be charged to the card 73013897.`
    } else {
      return 'Sorry, we don\'t have a credit card on file for you.'
    }
  }

//   if (cardNumber === cardNumber) {
//     return 'Sorry, we don\'t have a credit card on file for you.'
//   } else {
//     return `Your total cost is $undefined, which will be charged to the card 73013897.`
//   }
// }
