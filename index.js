var cart = [];

function getCart() {
const MyCart = [];

  var Okeys =  cart.keys();
  var OProp =  cart.hasOwnProperty();

  console.log('Object keys: '+ Okeys);
  console.log('Object property: '+ OProp);

 return cart;}

function setCart(c) {
  cart = c;

    // console.log('setCart Length: '+ cart.length);
    // console.log('setCart Cart: '+ cart);
    // console.log('setCart C: '+ c);

  return cart;}

function addToCart(item) {
 // write your code here

const MyCart = [];
var itemName = item;
var itemPrice = Math.floor(Math.random() * 1000)
var i = MyCart.length + 1;

  MyCart.push(itemName, itemPrice);

 console.log("${itemName} has been added to your cart.");

cart = MyCart;

return cart}

function viewCart() {
  // write your code here
  const MyCart = [];
  var count = MyCart.length;

  if (count === 0 )
    {   console.log('Your shopping cart is empty.') ; }

    let i = 0
     while (i < MyCart.length)
     { console.log('In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.');
       i++  }

var mycart = [];

// console.log('In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.');
//  if empty
// console.log('Your shopping cart is empty.') ;

}

function total() {
  // write your code here
  var mycart = [];

  var TotalallItems = 0;

  let i = 0
   while (i < mycart.length) {
    TotalallItems  = TotalallItems + mycart.itemPrice(i);
     i++
   }

console.log('Total of all Items: ' + TotalallItems) ;
  //mycar = cart;
  //loop get price of each item
  //and them present total

}

function removeFromCart(item) {
  // write your code here
// IF NOT FOUND -- That item is not in your cart.
const MyCart = [];
var i = 0;

function getPosition(item, MyCart)
  { var i;
    for (i = 0; i < MyCart.length; i += 1) {
        if (MyCart[i] === item) {
            return i;
        }    }
    return null; //not found
  };

     { if  (null) //true
          { console.log ('That item is not in your cart.')}
      else   MyCart.slice(i)  }
};


function placeOrder(cardNumber) {
  // write your code here
};
