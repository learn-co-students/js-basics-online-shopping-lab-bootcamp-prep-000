var cart = [];

function addToCart(item) {
 // write your code here	  var keyValue = []
 for(var i=0; i<item.length; i++){
   keyValue[i]= {
     itemName:item,
     itemPrice:(Math.floor(Math.random() * Math.floor(100)))
   }
   cart.push(keyValue[i]);
   return `${item} has been added to your cart.`;
 }
} 

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
}

function viewCart() {
  // write your code here

  if(cart.length === 0){
    return 'Your shopping cart is empty.'
  }
  for (var i=0; i<cart.length; i++){
    if(i === cart.length-1 && i>0){
      result[i] = ` and ${cart[i]['itemName']} at $${cart[i]['itemPrice']}`
    }else{
      result[i]=` ${cart[i]['itemName']} at $${cart[i]['itemPrice']}`
    }
  }
    //return answer 
  return `In your cart, you have${result}.`
}	}
var totalCost=0;
}

function total() {
  // write your code here	  var cost=0;
  // iterate over the cart
  for(var i=0; i<cart.length; i++){
    //add item price to total
    cost += cart[i]['itemPrice']
    totalCost=cost
  }
  return totalCost;
}	}

function removeFromCart(item) {
 var foundItem = ""
  for(var i=0; i<cart.length; i++){
  if(cart[i]['itemName']===item){
    foundItem = cart[i];
      }
  }
var index = cart.indexOf(foundItem)
    if(foundItem){
      return cart.splice(index,1) 
    }
    else{
      return 'That item is not in your cart.'
   }
}	}


function placeOrder(cardNumber) {
  // write your code here	  // if cardNumber is empty
  if(cardNumber === undefined){
    // return 'Sorry, wedon't have a credit card on file for you.'
    return "Sorry, we don't have a credit card on file for you."
  // otherwise   
  } else{
  //return 'Your total cost is TOTAL, wich will be charged to the card CARDNUMBER.' 
    cart = [];
    return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`

  }

}	}