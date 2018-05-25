var cart = [];
var string ="In your cart, you have "

function getCart() 
{
 return cart;
}

function addToCart(item) 
{
 
 
 var additem = { itemName: "name of the item", itemPrice: "price of the item" }
 var object= additem
 additem.itemName=item;
 additem.itemPrice= Math.floor((Math.random() * 100) + 1);

 cart.push(additem);
 
 return  `${additem.itemName} has been added to your cart.`
 cart.push(item);
 
 return  additem

}

function setCart(c) {
  cart = c;
  return cart;
}



 

function viewCart()
{
  var i
    if(cart.length<1)
    {
      return "Your shopping cart is empty."
    }
  
  for (i=0;i<cart.length;i++)
  {
    
    string=string+`${getCart()[i].itemName} at $${getCart()[i].itemPrice}`
    
    
  }
  return string +"."
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
