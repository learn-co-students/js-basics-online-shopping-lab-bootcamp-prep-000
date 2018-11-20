var cart = [{itemName: "bananas", itemPrice: 10},{itemName: "chocolate", itemPrice: 20}]

function total() {
  var amount = 0
  for (var i=0; i < cart.length; i++){
    var item = cart[i];
    amount += item.itemPrice;
  }
  return amount;
}

function placeOrder(cardNumber) {
  var cost = total()
   if (cardNumber !== undefined){
     cart = []
     
     return "Your total cost is $" + cost + ", which will be charged to the card " + cardNumber + "." 
   } else {
     return "Sorry, we don't have a credit card on file for you."
   }
}


console.log(total())
console.log(placeOrder(9943883))