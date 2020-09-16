module.exports = {
  success,
  fail,
  repair,
  get,
};


function repair(item) {

  item = {
    ...item,
    durability: 100,
    
  }

  return { ...item };
}



function success(item) {

 
  item = {
    ...item,
    enhancement: item.enhancement + 1 
  }

  if (item.enhancement > 20 ) {
    item.enhancement = 20
  }


  return { ...item };
}


function fail(item) {

  item = {
    ...item,
  }
  
  item.enhancement < 15 ? item.durability -= 5 : item.durability -= 10 

  if (item.enhancement > 16) {
    item.enhancement -= 1
  }

  // if (item.enhancement < 15) {
  //   item.durability -= 5
  // } else if (item.enhancement > 15) {
  //   item.durability -= 10
  // }


  return { ...item };
}


function get(item) {
  return { ...item };
}
