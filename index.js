var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

//--------------FUNCTION 1- ADD TO CART -------------------------


function addToCart(item){
//let fin  = `${item} has been added to your cart.`
//console.log(cart)
let price = Math.floor(Math.random()*100)

let itemObj = {
  itemName: item,
  itemPrice: price
}
cart.push(itemObj)

//console.log(item + " has been added to your cart. ")
return `${item} has been added to your cart.`
}


// --------------FUNCTION 2- VIEW CART -------------------------


function viewCart(){
 // console.log(cart.length)
  let dTres = [];

  let partSen = [];
  let finSen;

  if(cart.length === 0){
    return "Your shopping cart is empty.";
  }

  for(let i = 0; i < cart.length; i++){
    //console.log( Object.values(cart))
      let vals = Object.values(cart[i]);
     
      dTres.push(vals[0],vals[1]);
      //console.log(dTres)

    if(cart.length === 1){
      return `In your cart, you have ${vals[0]} at $${vals[1]}.`;
    }
    if(cart.length > 1){
    partSen.push(` ${vals[0]} at $${vals[1]}`);  
    }
  }

    partSen.splice(partSen.length- 1, 0, "and");
    finSen = partSen.join(',');
    return `In your cart, you have${finSen.replace(/and,/g,' and')}.` ; 
}

// --------------FUNCTION 3- TOTAL -------------------------

function total(){
  let priceArr =[];
  for(let i = 0; i < cart.length; i++){
    let values = Object.values(cart[i]);
    priceArr.push(values[1]);
     //console.log(priceArr)

  }return priceArr.reduce((acc, curr) => acc + curr)
}


// --------------FUNCTION 4- REMOVE FROM CART-----------------

function removeFromCart(deleteMe){

for(let i = 0; i < cart.length; i++){

  if(cart[i]['itemName'] === deleteMe){
  cart.splice(i,1);
  return cart;

  }
 }return `That item is not in your cart.`
}


// --------------FUNCTION 5- PLACE ORDER-----------------
 function placeOrder(ccNum){
  if(ccNum === undefined){
    return `Sorry, we don't have a credit card on file for you.`
  }
  let fin = `Your total cost is $${total(cart)}, which will be charged to the card ${ccNum}.`
  cart.splice(0,cart.length)
  return fin
}

// Holy cow that felt great to do those!! progress!!!! i only got jammed up on one and that was syntax errors! huzzah!!