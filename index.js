var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  const name = itemName;
  const itemPrice = Math.floor(Math.random()*101);
  const object = new Object;
  object[name] = itemPrice;
  cart.push(object);
  console.log(`${Object.keys(object)} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if(cart.length <=0) {
    console.log('Your shopping cart is empty.');
    return;
  } else {
    const object = Object.assign(cart);
    if(object.length === 1) {
      const name = Object.keys(object[0]);
      const price = Object.values(object[0]);
      console.log(`In your cart, you have ${name} at $${price}.`);
      return;
    }
    if(object.length === 2) {
      let string = 'In your cart, you have '
      const name1 = Object.keys(object[0]);
      const name2 = Object.keys(object[1]);
      const price1 = Object.values(object[0]);
      const price2 = Object.values(object[1]);
      console.log(`In your cart, you have ${name1} at $${price1} and ${name2} at $${price2}.`)
      return;
    }
    if(object.length > 2) {
      let string = 'In your cart, you have ';
      for(var i = 0; i < cart.length - 1; i = i + 1){
        let name = Object.keys(object[i]);
        let price = Object.values(object[i]);
        string+=`${name} at $${price}, `
      }
      string += `and ${Object.keys(object[object.length-1])} at $${Object.values(object[object.length-1])}.`
      console.log(string);
      return;
    }
    // } else {
    //   let string = 'In your cart, ';
    //   for(var i = 0; i < cart.length; i = i + 1){
    //     string += `you have ${Object.keys(object[i])} at ${Object.values(object[i])}, `
    //     if(i < cart.length  ) {
    //       string += `and ${Object.keys(object[cart.length])} at ${Object.values(object[cart.length])}.`
    //       break;
    //     }
    //   }
    //     console.log(string);
    //     return
    // }

  }
  // write your code here
}


function total() {
  // write your code here
  let total = 0;
  for(var i = 0; i < cart.length; i = i + 1) {
    total += parseInt(Object.values(cart[i]));
  }
  return total;
}


function removeFromCart(item) {
  let array = [];
  for(var j = 0; j<cart.length; j = j + 1){
    let temp = Object.keys(cart[j]).toString();
    array.push(temp);
  }
  console.log(array);
  console.log(cart.includes(item));
  if(array.indexOf(item)===-1){
    return console.log('That item is not in your cart.')
  } else {
  cart.splice(array.indexOf(item), 1);
  return cart;
}

}

function placeOrder(cardNumber) {
  if(!cardNumber){
    return console.log("Sorry, we don't have a credit card on file for you.");
  }
  if(cardNumber){
    let total = 0;
    for(var i = 0; i < cart.length; i = i + 1) {
      total += parseInt(Object.values(cart[i]));
    }
    cart = [];
    return console.log(`Your total cost is $${total}, which will be charged to the card ${cardNumber}.`);
  }

  // write your code here
}

addToCart('Apple');
addToCart('banana');
addToCart('oranges');
viewCart();
total();
removeFromCart('oranges');
placeOrder(11111111);
