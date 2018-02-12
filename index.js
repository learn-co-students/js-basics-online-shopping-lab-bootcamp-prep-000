var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var itemPrice = Math.floor((Math.random() * 100) + 1);
  var item = { [itemName]: itemPrice };
 cart.push(item);
 console.log(`${itemName} has been added to your cart.`);
 return cart;
}

function viewCart() {
  let text1 = [];
  let text2 = [];
  let items = [];
  let prices = [];

  if (cart.length===0) {
       console.log(`Your shopping cart is empty.`);
      } else if (cart.length===1) {
        console.log(`In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])}.`);
      } else if (cart.length===2) {
          console.log(`In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])} and ${Object.keys(cart[1])} at $${Object.values(cart[1])}.`);
      } else {
        for (let i = 0; i < cart.length; i++) {
          if (i<cart.length - 1) {
            items.push(Object.keys(cart[i]));
            prices.push(Object.values(cart[i]));
            text1.push(`${items[i]} at $${prices[i]}`);
          } else {
            items.push(Object.keys(cart[i]));
            prices.push(Object.values(cart[i]));
            text2.push(`${items[i]} at $${prices[i]}`);
          }
            
          }
        console.log(`In your cart, you have ${text1.join(', ')}, and ${text2}.`);
      }
      
}


function total() {
  let sumArray= [];
  let intArray = [];
  let number;
  let sum;
  for (let i = 0; i<cart.length; i++) {
    sumArray.push(Object.values(cart[i]));
    intArray.push(parseInt(sumArray[i]));
  }
    return intArray.reduce((a, b) => a + b, 0);
}

function removeFromCart(itemName) {
  let array = [];
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(itemName)) {
    array = cart.splice(i, 1);
    return array;
    }
  } 
  if (array.length === 0) {
    console.log(`That item is not in your cart.`);
  }
    
}

function placeOrder(cardNumber) {
  if (cardNumber){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart.length = 0;
    return  cart;
  } else {
    console.log('Sorry, we don\'t have a credit card on file for you.');
  }
}
