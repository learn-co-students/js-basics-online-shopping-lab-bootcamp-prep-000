var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor((Math.random() * 100) + 1)
 var itemObject = {
   [item] : itemPrice
 }
 cart.push(itemObject)
 console.log(`${item} has been added to your cart.`)
 return cart
}


function viewCart() {
  var statement = `In your cart, you have `
  var finalStatement = ''
  if (cart.length === 0) {
    finalStatement = 'Your shopping cart is empty.'
  } else {
    if (cart.length == 1) {
      var itemName1 = Object.keys(cart[0])
      var itemCost1 = Object.values(cart[0])
      finalStatement = statement + `${itemName1} at $${itemCost1}.`
    } else {
      if (cart.length == 2) {
        var itemName1 = Object.keys(cart[0])
        var itemCost1 = Object.values(cart[0])
        var itemName2 = Object.keys(cart[1])
        var itemCost2 = Object.values(cart[1])
        finalStatement = statement + `${itemName1} at $${itemCost1} and ${itemName2} at $${itemCost2}.`
      } else {
        if (cart.length >= 3) {
          var itemNameLoop = ''
          var itemPriceLoop = ''
          var statement = 'In your cart, you have'
          for (var i = 0; i < cart.length-1; i++) {
            itemNameLoop = Object.keys(cart[i])
            itemPriceLoop = Object.values(cart[i])
            statement = `${statement} ${itemNameLoop} at $${itemPriceLoop},`
          }
          for (var i = cart.length-1; i < cart.length; i++) {
            statement = statement.slice(0, statement.length)
            itemNameLoop = Object.keys(cart[i])
            itemPriceLoop = Object.values(cart[i])
            finalStatement = `${statement} and ${itemNameLoop} at $${itemPriceLoop}.`
          }
        }
      }
    }
  }
  console.log(finalStatement)
}

function total() {
  var sum = 0
  for (var i = 0; i < cart.length; i++) {
    sum = sum + parseInt(Object.values(cart[i]))
  }
  return sum
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i,1)
      return cart
    }
  }
  console.log(`That item is not in your cart.`);
  return cart
}

function placeOrder(cardNumber) {
  if (cardNumber !== undefined) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  } else {
    console.log(`Sorry, we don't have a credit card on file for you.`);
  }
}

// addToCart('apples')
// addToCart('oranges')
// addToCart('bananas')
//
// viewCart()
// function total(){
//   var sum = 0;
//   for (var i = 0; i < cart.length; i++) {
//     for (var key in cart[i]){
//       sum = sum + parseInt(cart[i][key])
//     }
//   }
//   return sum;
// }
//
// console.log(total())
//console.log(total());

// addToCart('1STTESTITEM')
// addToCart('2NDTESTITEM')
// addToCart('3RDTESTITEM')
// addToCart('4RDTESTITEM')
// console.log(cart);
// console.log(removeFromCart('2NDTESTITE'))

// console.log(viewCart());
// console.log(total());
// placeOrder();
//TEST------TEST------TEST-----TEST-----TEST
// console.log(cart);
// console.log(cart[1]);
//
//
// console.log('----------------');
// console.log(viewCart());
// console.log('----------------');
// var itemNameLoop = ''
// var itemPriceLoop = ''
// var statement = 'In your cart, you have'
//
// for (var i = 0; i < cart.length-1; i++) {
//   itemNameLoop = Object.keys(cart[i])
//   itemPriceLoop = Object.values(cart[i])
//   // console.log(itemNameLoop);
//   // console.log(itemPriceLoop);
//   statement = `${statement} ${itemNameLoop} at $${itemPriceLoop},`
// //In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.
// }
//
// for (var i = cart.length-1; i < cart.length; i++) {
//   statement = statement.slice(0, statement.length - 1)
//   // itemNameLoop = Object.keys(cart[i])
//   itemPriceLoop = Object.values(cart[i])
//   // console.log(itemNameLoop);
//   // console.log(itemPriceLoop);
//   statement = `${statement} and ${itemNameLoop} at $${itemPriceLoop}.`
// //In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.
// }
//
// console.log(statement);
