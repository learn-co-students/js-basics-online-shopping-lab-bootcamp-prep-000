var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var price= Math.floor(Math.random()*100+1);
var itemCart= {};
itemCart[item]= price;
cart.push(itemCart);
console.log(`${item} has been added to your cart.`);
return cart;
}

function viewCart() {
  var itemArray=[];
  var output= "In your cart, you have ";
  var keyArray= Object.keys(cart);

  if(cart.length===0){
    console.log('Your shopping cart is empty.');
  } else {
    for (var i =0;i<cart.length;i++){

      itemArray.push(Object.keys(cart[i]) + " at $" + cart[i][Object.keys(cart[i])[0]]) ;
         console.log(itemArray);
    }
    if (itemArray.length===1){
      console.log(output + itemArray + '.');

    } else if (itemArray.length===2){
      console.log(output + itemArray.join(' and ')+'.');

    } else {
      var end='';
      for(var j=0;j<itemArray.length;j++){

        if (j<itemArray.length-1){
          end += itemArray[j] + ", ";
        } else {end += "and " + itemArray[j]+".";}
      }
    }console.log (output + end);
  }
}

function total() {
  var sum=0;
  for (var i =0;i<cart.length;i++){
  sum+= cart[i][Object.keys(cart[i])[0]] ;
} return sum;
}

function removeFromCart(item) {
  var inCart=false;

  for(var i =0;i<cart.length;i++){
    if (cart[i].hasOwnProperty(item)){
      cart.splice(i,1);
      inCart=true;
    }
  }

  if (inCart===false){
    console.log('That item is not in your cart.');
  }
  console.log(cart);
}

function placeOrder(cardNumber) {
  var localTotal=total();

  if (!cardNumber){
    console.log("Sorry, we don't have a credit card on file for you.");
  } else {
    console.log(`Your total cost is $${localTotal}, which will be charged to the card ${cardNumber}.`);
  } cart=[];
}
