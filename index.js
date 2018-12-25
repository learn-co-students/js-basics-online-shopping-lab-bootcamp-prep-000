var cart = []

function getCart(){
  return cart
}


function addToCart(item){
  
  var price=Math.ceil(Math.random()*100);
  cart.push({[item]:price});
  return `${item} has been added to your cart`;
}

addToCart('oil')
addToCart('vinegar')
addToCart('salt')
addToCart('sugar')



function viewcart(){
  if(cart.length===0){
    console.log("Your cart is empty.");
  }
  
  var newArray=[];
  for(let i=0;i<cart.length;i++){
    var keys=Object.keys(cart[i])[0];
    newArray.push(keys+ "at $" +cart[i][keys]);
  }
  var mystring =" In your cart, you have,";
  if(cart.length===1){
  mystring += (newArray[0] + "and" + newarray[1] +".");
  }
  else if(newArray.length>2){
    var lastelement=newArray.pop();
    var other_item=newArray.join(",");
    mystring += (other_item + ", and" + lastelement + ".");
  }
  console.log(mystring);
  return cart;
}
viewCart();
function total(){
 
 var t;
  for(i=0;i<cart.length;i++){
    t+=Object.keys(cast[i]);
  }
 return t;
}
function removeFromCart(item) {
  let itemInCart = false

  for (let i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true
      cart = cart.slice(0, i).concat(cart.slice(i + 1))
    }
  }

  if (!itemInCart) {
    console.log("That item is not in your cart.")
  }

  return cart
}
removeFromCart('oil');

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return console.log("We don't have a credit card on file for you to place your order.")
  }

  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)

  cart = []
}
placeOrder();

