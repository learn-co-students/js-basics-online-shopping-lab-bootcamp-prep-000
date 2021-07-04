 var cart = [];

function getCart() {
 return cart;
}
function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var lmd = {itemName: item, itemPrice: Math.floor((Math.random() * 100) + 1)};
getCart().push(lmd);
 return `${item} has been added to your cart.`;
}

function viewCart() {
var  lmd = getCart();
var dml = [];
for (var i = 0; i < lmd.length; i++){
  var md = Object.values(lmd[i]);
  var d = `${''} ${md[0]} at $${md[1]}`;
  var l = `${''} and ${md[0]} at $${md[1]}`;
  if (i === lmd.length - 1 && i !== 0){
    dml.push(`${l}`);
  } else{
  dml.push(`${d}`);
  }
}
if (lmd.length === 0){
  return "Your shopping cart is empty.";
} else {
  return `In your cart, you have${dml}.`;
}
}

function total() {
  var  lmd = getCart();
var dml = []
var i = 0
while (i < lmd.length){
  var md = Object.values(lmd[i]);
  var d = md[1]
  var covt = parseInt(d)
    dml.push(covt)
    i += 1
}
var total = 0; 
for (var k = 0; k < dml.length; k++){ 
     total += dml[k]
}
return total
}
 function removeFromCart(item) {
var lmd = getCart();
	var dml = [];
	var l = 0;
	while(l < lmd.length) {
		var lm = Object.values(lmd[l]);
		dml.push(lm)
l++
	}
	for (	var i = 0; i < dml.length; i++){
	 if (dml[i][0] === item) { 
				getCart().splice(i, 1)
				return lmd
			} 
		}	return "That item is not in your cart."
}

function placeOrder(cardNumber){
	var md = [cardNumber]
	var k = total()
	if (cardNumber === undefined){
		return "Sorry, we don't have a credit card on file for you."
	}else {getCart().splice(0) 
	return `Your total cost is $${k}, which will be charged to the card ${cardNumber}.`
	}
}

