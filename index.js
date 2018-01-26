var cart = [];

function getCart() {
 return cart;
}

console.log(cart);

function setCart(c) {
  cart = c;
  return cart;
}
cart1=[{Apple: 20},{Banana: 40}];
console.log(setCart(cart1));

function addToCart(item) {//here item refers to the name of an //item.
   function randomNumber(){
     var num=Math.floor(Math.random()*100);
  }
  var item1={};
  var num=Math.floor(Math.random()*100);
  if(num >0 && num < 100){
  item1[item]=num;
  cart.push(item1);
  console.log(cart);
  return `${item} has been added to your cart.`;
  }
  else{
    var i=0;
    while(num >0 && num <100){
    randomNumber();
    i++;
    }
  }
  }

console.log(addToCart('Pineapple'));

function viewCart() {
  if(cart.length <= 0){
    return "Your shopping cart is empty.";
  }
  else{
  var newCart=[];
  for(let i=0; i<cart.length; i++){
    if(i === cart.length-1){
      newCart.push(` and ${Object.keys(cart[i])} at $${Object.values(cart[i])}`);
    }else{
    newCart.push(`${Object.keys(cart[i])} at $${Object.values(cart[i])}`);
    }
  }
  return `In your cart, you have ${newCart}.`;
  }
}
console.log(viewCart());

console.log(cart);


function total() {
  var total=0;
  for(let i=0; i<cart.length; i++){
   total=parseInt(Object.values(cart[i]))+total;
  }
  return total;
}
console.log(total());

function removeFromCart(item) {
  for(let j=0; j< cart.length; j++){
             if(cart[j].hasOwnProperty(item) === true){
                 cart.splice(j,1);
                 }
             }
  return cart;
}
console.log(removeFromCart('Apple'));


function placeOrder(cardNumber) {
 if(cardNumber === undefined){
   console.log("Sorry, we don't have a credit card on file for you.");
 }
 else{
   console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart=[];
 }
}
console.log(placeOrder(57892705874));



