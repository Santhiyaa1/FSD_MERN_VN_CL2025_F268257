function placeOrder(callback){
setTimeout(()=>{
    console.log("Order placed")
    if(callback){
        callback();
    }
},2000);
}

function cookFood(callback){
    setTimeout(()=>{
        console.log("Food cooking");
        if(callback){
            callback();
        }
        
    },1500);
}

function deliverFood() {
  setTimeout(() => {
    console.log("Food delivered");
  }, 1500); 
}

placeOrder(() => {
  cookFood(() => {
    deliverFood();
  });
});