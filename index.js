var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price= Math.floor(Math.random()*Math.floor(100));
  var object= {itemName:item,itemPrice:price}
	cart.push(object)
	return `${item} has been added to your cart.`
}

function viewCart() {
  if(cart.length===0) {
      return `Your shopping cart is empty.`;
  }
  var cartlist=[]
  var l= cart.length
  var i=0
  while(i<l){
  cartlist.push(cart[i])
  i++
  } if (cartlist.length===1) {
    return `In your cart, you have ${cartlist[0].itemName} at $${cartlist[0].itemPrice}.`
  }else if(cartlist.length===2) {
    return `In your cart, you have ${cartlist[0].itemName} at $${cartlist[0].itemPrice}, and ${cartlist[1].itemName} at $${cartlist[1].itemPrice}.`
  } else {
    return `In your cart, you have ${cartlist[0].itemName} at $${cartlist[0].itemPrice}, ${cartlist[1].itemName} at $${cartlist[1].itemPrice}, and ${cartlist[2].itemName} at $${cartlist[2].itemPrice}.`
  }
}

function total() {
  var totalcost=[]
  var i=0
  while(i<cart.length) {
   totalcost.push(cart[i].itemPrice)
   i++
 }var sum = totalcost.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
return sum
}

function removeFromCart(item) {
  var i=0
  var cartnames=[]
  while(i<cart.length) {
    cartnames.push(cart[i].itemName)
    i++
  }
 var trash=cartnames.indexOf(item)
 if(trash>=0) {
  cart.splice(trash,1)
  return cart
} return `That item is not in your cart.`
}
function placeOrder(cardNumber) {
  var sum= total()
 if(cardNumber===undefined) {
   return `Sorry, we don't have a credit card on file for you.`
 } else {
   cart.length=0
   return `Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`
 } 
}
