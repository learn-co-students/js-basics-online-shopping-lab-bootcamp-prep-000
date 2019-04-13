var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}
// { itemName: name of the item, itemPrice: price of the item, } 
function addToCart (item) {
  var price = Math.floor(100*(Math.random()));
  var itemObj = {itemName: item,itemPrice: price}; 
  debugger
  cart.push(itemObj);
  console.log(itemObj);
  return cart;
}

function viewCart() {
  var cartItems = [];
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.') }
    
  var newarray = [];
      for (var i = 0; i < cart.length; i++) {
        var keys = Object.keys(cart[i])[0]
        newarray.push(keys + "at $" + cart[i])[keys]
        
        var mystring = "In your cart, you have"
        if(newarray.length === 1 ){
          mystring += newarray + "."
        } else if (newarray.length === 2){
          mystring += newarray[0] + "and" + newarray[1] + "." 
        } else if(newarray.length > 2) {
          var lastelement = newarray.pop()
          var other_item = newarray.join(". ")
          mystring += (other_item + ", and " + lastelement + ".")
        }
        console.log(mystring)
          
        }
      }

function total() {
  var sum = 0 
  for(var i = 0; i < cart.length; i++) {
    sum += cart[i][Object.keys(cart[i])]
  }
  return sum
  
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
