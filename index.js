var cart = [];


function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  
var price = Math.floor(Math.random()*100)
  
var itemAndPrice = {
  itemName: item,
    itemPrice: price
}
  
cart.push(itemAndPrice)

return `${item} has been added to your cart.`
}




