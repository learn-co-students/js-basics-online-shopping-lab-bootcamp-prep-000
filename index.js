var cart = [];

  function getCart() {
  return cart;
  }

  function setCart(c) {
    cart = c;
    return cart;
  }

  function addToCart(item) {
    var price = Math.floor(Math.random() * 100) + 1;
    var item_object = {itemName: item, itemPrice: price};
    cart.push(item_object)
    
    return item + " has been added to your cart."
  }

  function viewCart() {
    if(cart.length === 0){
      return "Your shopping cart is empty."
    }  
    var counter = 1;
    var firstSentence = "In your cart, you have " + cart[0].itemName + " at $" + cart[0].itemPrice;
    var sentence = "";
    var sentence3 = "";
    

    if (cart.length === 1){
      return firstSentence + ".";
    }
    else if(cart.length === 2){
      for(counter = 1; counter < cart.length; counter++){
        sentence +=  ", and " + cart[counter].itemName + " at $" + cart[counter].itemPrice;
      }
      return firstSentence + sentence + ".";
    }
    else if(cart.length > 2){
      for(counter = 1; counter < cart.length -1; counter++){
        sentence3 +=  ", " + cart[counter].itemName + " at $" + cart[counter].itemPrice;
      }
      return firstSentence + sentence3 + ", and " + cart[cart.length - 1].itemName + " at $" + cart[cart.length - 1].itemPrice + "."; 
    }
  }
  function total() {
    var sum = 0;
    var counter = 0;
    for (counter = 0; counter < cart.length; counter++){
      sum += parseInt(cart[counter].itemPrice);
    }
    return sum;
  }

  function removeFromCart(item) {
    var counter = 0;
    for (counter = cart.length - 1; counter >= 0; counter -- ){
      if (cart[counter].itemName === item){
        cart.splice(counter, 1);
        return cart
      }
      
    }
    return "That item is not in your cart."

  }

  function placeOrder(cardNumber) {
    if (!!cardNumber) {
      var totals = total();
      cart = [];
      return "Your total cost is $" + totals +  ", which will be charged to the card " +  cardNumber + ".";

    } else {
      return "Sorry, we don't have a credit card on file for you."

    }
  }