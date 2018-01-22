var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  debugger;
  if (item !== undefined) {
    cart.push({ [item]: Math.floor(Math.random() * 100) });
   console.log(`${item} has been added to your cart.`);
   return cart;
  }
}

function viewCart() {
  let getL = cart.length;
  //let getL = Object.keys(cart).length;
  let displayCartString = [];
  let i = 0;
  if (getL === 0) {
//   displayCartString[i] = "Your shopping cart is empty."
  console.log("Your shopping cart is empty.");
  } else {
    displayCartString[0] = "In your cart, you have"

    i++;
//    console.log('here: ');
    for (let array of cart) {
      for (let key in array) {
//        console.log('array ' + array.index);
      //  console.log( key+" at $"+ array[key]);
    //    console.log("length " + cart.length);
        displayCartString[i] = (((i===1)?' ':(i===cart.length&&i===2)?' and ':(i===cart.length)?', and ':", ") + key+" at $"+ array[key]);
      }
      i++;
    }
  }
  console.log(displayCartString.join('')+".");
}

function total() {
  let cartTotal= 0;
  for (let array of cart) {
    for (let key in array) {
      cartTotal += array[key];
    }
  }
  return cartTotal;
}

function placeOrder(cardNumber) {
  let getTotal = 0;
  getTotal = total();
  if (cardNumber === undefined || cardNumber === null || cardNumber.length <= 0){
    console.log("Sorry, we don't have a credit card on file for you.");
  }else {
    console.log(`Your total cost is \$${getTotal}, which will be charged to the card ${cardNumber}.`)
    cart = [];
    }
  }

  function removeFromCart(item) {
    let placeO = 0;
    let findI = 0;
    for (let array of cart) {

      for (let key in array) {
        console.log("item: " + key);
        if (key == item ) {
    //      console.log("found a match");
          findI = 1;
  //        findI = cart.findIndex(k => k=='bananas');
  //        console.log(" found the index at " + findI);
          cart.splice(placeO,1);
  //        console.log(cart);
        } else {
        }

      }
      placeO++;
    }
    (findI ===0 ? console.log('That item is not in your cart.'): '');
  }
