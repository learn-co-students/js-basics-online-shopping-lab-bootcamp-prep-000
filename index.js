var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}
function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
  }
function addToCart(item) {
 var randomPrice = randomInteger(1,100);
 var items = { [item]: randomPrice };
// console.log(items);
// console.log('randomPrice', randomPrice);
 cart.push(items);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
  console.log('view cart => ', cart);
    if (cart.length === 0) {
      console.log ('Your shopping cart is empty.');
    }
  else {
  var text = 'In your cart, you have ';
  for ( let i = 0; i < cart.length; i++) {
    var obj = cart[i];          // [ { apple: 49 } ]
    var item = Object.keys(obj); // [ { apple } ]
    var itemName = item[0];     // apple
    var price = obj[itemName];

    if (cart.length === 1) {
      text += `${item[0]} at $${price}${(i === cart.length - 1) ? "." : ", "}`;
    }
    else if (cart.length === 2){
      text += `${(i === cart.length - 1) ? " and " : ""}${item[0]} at $${price}${(i === cart.length - 1) ? "." : ""}`;
      }

    else if (cart.length > 2){
      text += `${(i === cart.length - 1) ? "and " : ""}${item[0]} at $${price}${(i === cart.length - 1) ? "." : ", "}`;
    }
  }
    console.log(text);
  }
}

function total() {
  // write your code here
  var totalPrice = 0;
  for ( let i = 0; i < cart.length; i++) {
    var obj = cart[i];          // [ { apple: 49 } ]
    var item = Object.keys(obj); // [ { apple } ]
    var itemName = item[0];     // apple
    var price = obj[itemName];
    totalPrice += price;
  }
  console.log ('totalPrice is ', totalPrice);
  return totalPrice;
}

function removeFromCart(item) {
  // write your code here
    var itemInCart = new Object();
    for ( let i = 0; i < cart.length; i++) {
          itemInCart = cart[i];
          var exist = itemInCart.hasOwnProperty(item);
/*          console.log(`cart[${i}] = `, cart[i]);
          console.log("var itemInCart = ", itemInCart);
          console.log("var item = ", item);
          console.log("var exist = ", exist);
          console.log(); */
          if (exist === true) {
           console.log('cart =', cart );
           cart = [...cart.slice(0, i), ...cart.slice(i+1)];
           return (cart);
          }
          else {
          }
        }
          console.log('That item is not in your cart.');
          return cart;
      }

function placeOrder(cardNumber) {
  // write your code here
  if ( cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.")
    return;
  }
    else {
      var price = total();
      console.log(`Your total cost is $${price}, which will be charged to the card ${cardNumber}.`)
      return cart=[];
    }
  }
