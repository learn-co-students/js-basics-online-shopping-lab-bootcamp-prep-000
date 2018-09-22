var cart = [];

function setCart(newCart) {	
cart = newCart;
}	

 function getCart() {
  return cart;
}

	function addToCart(item) {
	var price = Math.ceil(Math.random() * 100 + 1);
	var item_object = {};
  item_object[`itemName`] = item
  item_object[`itemPrice`] = price
  cart.push(item_object)
	return `${item} has been added to your cart.` 
	}
  
  
// price is the number needed with itemPrice

function viewCart() {
 if (cart.length > 0){
  var soonArray = []
    for (var i = 0; i < cart.length; i++){
    soonArray.push(`${getCart()[i].itemName} at $${getCart()[i].itemPrice}`)
    }
  var myString = "In your cart, you have "
    if (soonArray.length === 1) {
      myString += soonArray + "."}
    else if(soonArray.length === 2){
      myString += (soonArray[0] + ", and " + soonArray[1] + ".")}
    else if(soonArray.length > 2){
      var lastelement = soonArray.pop()
      var other_item = soonArray.join(", ") 
      myString += (other_item + ", and " + lastelement + ".")
      }
  return myString
  }
  else if(cart.length === 0){
    return "Your shopping cart is empty."}
}


function total() {
var totalArray = []
if (getCart().length > 0){
  for (var i = 0; i < cart.length;i++){
    totalArray.push(
      parseInt(`${getCart()[i].itemPrice}`)
      )
    }
  var sum = totalArray.reduce((x,y) => x + y)
  return sum
}
return 0
}

function removeFromCart(item) {
  for (var i = 0; i < getCart().length; i++) {
    if (getCart()[i].itemName === item){
      getCart().splice(i,1);
      return getCart();
    }
  }
  return `That item is not in your cart.`
}


function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return (`Sorry, we don't have a credit card on file for you.`);
  } else {
    var newTotal = total()
    cart.splice(0,cart.length)
    return (`Your total cost is $${newTotal}, which will be charged to the card ${cardNumber}.`);
  }
}


