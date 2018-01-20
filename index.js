var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var itemPrice = Math.floor(Math.random() * 100);
 var obj =  Object.assign({}, { [item] : itemPrice});
   cart.push(obj);
   if(cart.length > 0){
   console.log(`${item} has been added to your cart.`);
return cart;
 
   }
 
}

function viewCart() {
  // write your code here
 // store your values
  var se;
  var k = [];
  var price = [];
  var l;
  var dict= null;
  var cost;
  //loop through cart
  for (var i=0; i < cart.length; i ++){
    //get keys
    dict = Object.keys(cart[i]);
    for(var m=0; m < dict.length; m++){
      k.push(dict[m]);
      cost = dict[m];
    }

   se = cart[i];
   l = se[cost];
   price.push(l);
     console.log(cart[i]);
  }
  if (cart.length === 0){
    console.log(`Your shopping cart is empty.`);
    console.log(dict);
  }
  if(cart.length === 1){
    console.log(`In your cart, you have ${k[0]} at $${price[0]}.`);
  }
  if (cart.length === 2){
    console.log(`In your cart, you have ${k[0]} at $${price[0]} and ${k[1]} at $${price[1]}.`);
  }
  if (cart.length === 3){
    console.log(`In your cart, you have ${k[0]} at $${price[0]}, ${k[1]} at $${price[1]}, and ${k[2]} at $${price[2]}.`);
  }
  if(cart.length >= 3){
    console.log(`In your cart, you have ${k[0]} at $${price[0]}, ${k[1]} at $${price[1]}, ${k[2]} at $${price[2]}, and ${k[3]} at $${price[3]}.`);
  }
}

function total() {
  // write your code here
  var items = 0;
  var value;
  for(let i =0; i < cart.length; i++){
    let k = cart[i];
    let o = Object.keys(cart[i]);
    for(let s = 0; s < o.length; s++){
      value = o[s];
    }
     items += k[value];
    
    
  }
  return items;
}

function removeFromCart(item) {
  // write your code here
  var iteminCart = false;
  for(let i=0; i < cart.length; i++){
    
   
    if(cart[i].hasOwnProperty(item)){
      const index = cart.indexOf(cart[i]);
      cart.splice(index, 1);
      iteminCart = true;
    }
  }
   if (iteminCart === false){
      console.log("That item is not in your cart.");
    }
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  if(!cardNumber){
    console.log("Sorry, we don't have a credit card on file for you.");
  }
  
  if(cardNumber){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  }
  cart = [];
  return cart;
}
