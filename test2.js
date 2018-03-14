var cart  = [ { itemName: 'Shnneb1', itemPrice: 67 },
  { itemName: 'Shnneb2', itemPrice: 39 } ]

function noArgument(name){
  if (name === undefined) {
      console.log("No argument passed");
    return "No argument passed"
  } else {
    console.log(name);
    return name
  }
}

noArgument("jjj")
