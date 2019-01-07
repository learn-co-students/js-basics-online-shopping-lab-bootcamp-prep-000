var cart = [];

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
  var s
    
      if (cart.length===1)
    {
      
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`;
    
    }
    
    else if (cart.length===2)
    
    {
      return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, and ${getCart()[1].itemName} at $${getCart()[1].itemPrice}.`
    
      
      
    }
    
    else if (cart.length===3)
    {
      return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, ${getCart()[1].itemName} at $${getCart()[1].itemPrice}, and ${getCart()[2].itemName} at $${getCart()[2].itemPrice}.`
      
    }
     
  else
  {
    return "Your shopping cart is empty."
  }

}
function total() {
  var total1,i
  total1=0
  for(i=0;i<cart.length;i++)
  {
    total1=total1 + getCart()[i].itemPrice
  }
  return total1
}

function removeFromCart(item)
{
  var s=0,i
  for(i=0;i<cart.length;i++)
  {
    if (getCart()[i].itemName===item)
    {
      s=1
      return getCart().splice(i, 1);
    }
  }
  
  if (s===0)
  {
    return "That item is not in your cart."
  }
  
  
}

function placeOrder(cardNumber) {
  if (cardNumber===undefined)
  {
    return "Sorry, we don't have a credit card on file for you."
  }
  
  else 
  {
    var s=total()
    cart=[];
    return `Your total cost is $${s}, which will be charged to the card ${cardNumber}.`
  }
}
