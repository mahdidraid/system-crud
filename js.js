
// save loccal storge
//clear input
//read
//count
//deleete
//update
//search
//clean data

let tiltle = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discunt = document.getElementById('discount');
let count = document.getElementById('count');
let total = document.getElementById('total');
let category= document.getElementById('category');
let sub = document.getElementById('sub');

// console.log(tiltle,price,taxes,ads,discunt,count,total,category,sub)

//get total
function getTotal()
{
     if(price.value != '')
     {
        let result = (+  price.value + +taxes.value + +ads.value) - +discunt.value;

        total.innerHTML = result;
        total.style.background = "#040";
     }
      else
      {
         total.innerHTML = " "; 
         total.style.background = "#a00d02";
      }
     
}



//// creat produact
let datapro ;
if(localStorage.product != null)
{
   datapro = JSON.parse(localStorage.product)
}
else{
   datapro=[];
}


sub.onclick = function(){
   let newpro ={
      tiltle:tiltle.value,
      price:price.value,
      taxes:taxes.value,
      ads:ads.value,
      discunt:discunt.value,
      total:total.innerHTML,
      count:count.value,
      category:category.value
   }
 datapro.push(newpro);
 localStorage.setItem('product',JSON.stringify(datapro))
 console.log(datapro);
}
