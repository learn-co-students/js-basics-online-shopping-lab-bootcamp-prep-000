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
 let price = Math.floor(Math.random() * 100) + 1;
 let newItem = { [item]: price };
 cart.push(newItem);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart(){
  var base = `In your cart, you have `;
  var items = [];
  if(cart.length === 0){
    console.log('Your shopping cart is empty.');
    return;
  } else if(cart.length > 0){
      for(var i = 0; i < cart.length; i++){
        var itemName = Object.keys(cart[i]);
        var price = cart[i][itemName];
        var statement = `${itemName} at $${price}`;
        items.push(statement);
      }
      if(cart.length === 1){
        base += `${items[0]}.`;
        console.log(base);
        return;
      } else if (cart.length === 2) {
        base += `${items[0]} and ${items[1]}.`;
        console.log(base);
        return;
      } else if (cart.length > 2){
          for(var i = 0; i < cart.length; i++){
            if(i < cart.length - 1){
              base += `${items[i]}, `;
            } else if (i === cart.length - 1) {
              base += `and ${items[i]}.`;
              console.log(base);
              return;
            }
          }
      }
  }
}

function total(){
  var totalCost = 0;
  for (var i = 0; i < cart.length; i++) {
  	var item = Object.keys(cart[i])[0];
  	var price = cart[i][item];
  	totalCost += price;
  }
  console.log(`Your current total is ${totalCost}.`);
  return totalCost;
}

function removeFromCart(item){
  for (var i = 0; i < cart.length; i++) {
  	if(cart[i].hasOwnProperty(item)){
  	  cart.splice(i,1);
  	  return cart;
  	}
  }
  console.log('That item is not in your cart.');
  return cart;
}

function placeOrder(n){
  if(arguments.length === 0){
    console.log("Sorry, we don't have a credit card on file for you.");
    return;
  } else {
      var totalCost = total();
  	  console.log(`Your total cost is $${totalCost}, which will be charged to the card ${n}.`);
  	  cart = [];
  	  return;
  }
}
