var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  // Define the item with randomly generated price
  var itemObj = {
    itemName: item,
    itemPrice: 1 + Math.floor( Math.random() * 100 )
  };
  // Use getter and setter functions to store the item.
  var itemInCart = setCart([...getCart(), itemObj]);
  // Confirm item was added to the cart
  if (itemInCart[itemInCart.length - 1].itemName===item)
  {
    return `${item} has been added to your cart.`;
  }
}

function viewCart() {
  var cart = getCart();
  var cartLen = cart.length;
  var cartMessage = 'Your shopping cart is empty.';
  // If there are no items in the cart...
  if (cartLen===0)
  {
    // Abort, we already know the cart is empty so no use going further.
    return cartMessage;
  } else
  {
    // Initialize the string
    cartMessage = 'In your cart, you have';
    for (let i=0; i<cartLen; i++)
    {
      // If we are at the last item and the array has more than one item, append ` and `.
      // Otherwise, append ` ` to the string cartMessage.
      cartMessage += (i===cartLen-1 && cartLen!==1) ? ` and ` : ` `;
      cartMessage += `${cart[i].itemName} at $${cart[i].itemPrice}`;
      cartMessage += (i===cartLen-1) ? `.` : `,`;
    }
    return cartMessage;
  }
}

function total() {
  var cart = getCart();
  var cartLen = cart.length;
  var cartSum = 0;
  // If there are no items in the cart...
  if (cartLen===0)
  {
    // Abort, return the zero value and don't go any further.
    return cartSum;
  } else
  {
    for (let i=0; i<cartLen; i++)
    {
      // Parse all values as integers and add them arithmetically.
      cartSum += parseInt(cart[i].itemPrice);
    }
    return cartSum;
  }
}

function removeFromCart(item) {
  var cart = getCart();
  var cartLen = cart.length;
  var cartMessage = 'That item is not in your cart.';
  // If there are no items in the cart...
  if (cartLen===0)
  {
    // Abort, the item can't possibly be here
    return cartMessage;
  } else
  {
    // Allow us to check for presence of item later.
    var index = false;
    for (let i=0; i<cartLen; i++)
    {
      // If item is found, store where it is.
      if(cart[i].itemName===item)
      {
        index = i;
      }
    }
    // If we found the item, save the updated cart with item removed and return it.
    if(index)
    {
      var updatedCart = cart.splice(index, 1);
      return updatedCart;
    } else
    {
      // If we never found the item, return the message.
      return cartMessage;
    }
  }
}

function placeOrder(cardNumber) {
  var orderMessage = 'Sorry, we don\'t have a credit card on file for you.';
  // If we received a card number, run it, display the charge details, and empty the cart.
  if ( !isNaN(cardNumber) )
  {
    orderMessage = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
    setCart([]);
  }
  return orderMessage;
}
