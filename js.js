
// save loccal storge

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
//  console.log(datapro);
  cleardata();
  showDate()
}


//clear input

function cleardata()
{
   tiltle.value = '';
   price.value = '';
   taxes.value = '';
   ads.value = '';
   discunt.value = '';
   total.innerHTML='';
   count.value='';
   category.value=''; 
}

//read 

function showDate()
{
   let table = '';
   for (let i = 0 ; i < datapro.length;i++)
   {
      table += `
      <tr>
         <td>${i}</td>
         <td>${datapro[i].tiltle}</td>
         <td>${datapro[i].price}</td>
         <td>${datapro[i].taxes}</td>
         <td>${datapro[i].ads}</td>
         <td>${datapro[i].discunt}</td>
         <td>${datapro[i].category}</td>
         <td><button id="update">Update</button></td>
         <td><button  onclick="deletedata(${i})" id="delte"> delete</button></td>
      </tr>
      `
   }
   document.getElementById('tbody').innerHTML = table;
}
showDate()

function deletedata(i)
{
   datapro.splice(i,1)
   localStorage.product = JSON.stringify(datapro)
   showDate()
}