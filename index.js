var cart = [];

var itemName;

function getCart(itemName) {

   return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {

      var  itemPrice = Math.floor((Math.random() * 10) + 1);

      var newItem = {};
//      Object.assign(newItem,{[itemName]:itemPrice});
      cart.push({[itemName]:itemPrice});
//      cart.push(newItem);
      console.log(`${itemName} has been added to your cart.`);

      return cart;
}

function viewCart() {
      var text = 'In your cart, you have ';

      var i =0;
      var keys = Object.keys(cart);
      if (cart.length == 0){
               console.log('Your shopping cart is empty.');

      } else if(cart.length == 1) {
            var textFinal = text + Object.keys(cart[i]) +' at $'+ cart[i][Object.keys(cart[i])] +'.';
            console.log(textFinal);
      } else if((cart.length == 2)){
            var textFinal = text + Object.keys(cart[i]) +' at $'+ cart[i][Object.keys(cart[i])] +' and '+ Object.keys(cart[i+1]) +' at $'+ cart[i+1][Object.keys(cart[i+1])]+'.';
            console.log(textFinal);
      }  else {
          for(var i=0; i<cart.length-1; i++){
            var text =  text + Object.keys(cart[i]) +' at $'+ cart[i][Object.keys(cart[i])] +', ';
            }
            var textTemp = text;
            textFinal =  textTemp + 'and '+ Object.keys(cart[cart.length-1]) +' at $'+ cart[cart.length-1][Object.keys(cart[cart.length-1])] +'.' ;
            console.log(textFinal);
      }
}

function total() {
          var i =0;
          var total = 0;
          for(var i=0; i<cart.length; i++){
            total =  total + cart[i][Object.keys(cart[i])];
            }
          return total;
}

function removeFromCart(itemName) {
            var i =0;
            var keys = Object.keys(cart);

            for(var i=0; i<cart.length; i++){

                  if (cart[i].hasOwnProperty(itemName)){

                    cart.splice(i, 1);
                    return cart;
                  }

              }
            console.log('That item is not in your cart.');
            return cart;

}

function placeOrder(cardNumber){
        var amount;
        if (cardNumber == null){
          console.log("Sorry, we don\'t have a credit card on file for you.");
        } else {
           amount = total();
          console.log(`Your total cost is $${amount}, which will be charged to the card ${cardNumber}.`);
          cart = [];
        }
  }
