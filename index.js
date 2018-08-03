var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var objN ={};
  objN.itemName=item;
  objN.itemPrice=Math.floor(Math.random()*100+1);
  cart.push(objN);
  return item+' has been added to your cart.'
}

function viewCart() {
  if (Object.keys(cart).length === 0){
    return 'Your shopping cart is empty.'
  } else if(Object.keys(cart).length === 1) {
    return 'In your cart, you have '+cart[0].itemName+' at $'+cart[0].itemPrice+'.'
  } else if(Object.keys(cart).length === 2) {
    return 'In your cart, you have '+cart[0].itemName+' at $'+cart[0].itemPrice+', and '+cart[1].itemName+' at $'+cart[1].itemPrice+'.'
  } else {
    var cartNew =[];
    var l = Object.keys(cart).length
    for (let i = 0; i<l-1;i++){
      cartNew.push(cart[i].itemName+' at $'+cart[i].itemPrice)
    }
    return 'In your cart, you have '+cart[0].itemName+' at $'+cart[0].itemPrice+', '+cart[1].itemName+' at $'+cart[1].itemPrice+', and '+cart[2].itemName+' at $'+cart[2].itemPrice+'.'
  }
}

function total() {
  var l = Object.keys(cart).length
  var time = 0;
  for(let i=0; i<l; i++){
    time = time + parseInt(cart[i].itemPrice)
  }
  t = time;
  return time
}

function removeFromCart(item) {
  for(let j=0; j<Object.keys(cart).length; j++) {
     if (cart[j].itemName === item){
       cart.splice(j,1)
       return cart
     }
  }
     return "That item is not in your cart."
}

var t = total();
function placeOrder(cardNumber) {
  if (!cardNumber){
    return "Sorry, we don't have a credit card on file for you."
  } else {
    cart =[];
    return 'Your total cost is $'+t+', which will be charged to the card '+cardNumber+'.'
  }
}
