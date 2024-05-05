let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let discount = document.getElementById('discount');
let adsens = document.getElementById('adsens');
let total = document.getElementById('total');



function getTotal(){
if(price.value != ''){
    let resulte = (+price.value + +taxes.value + +adsens.value) - +discount.value;
    total.innerHTML = resulte;
     total.style.background = '#00dbde';
}else{
    total.style.background = '#fc00ff';
    total.innerHTML = "";
}};

let dataPro;
if (localStorage.product != null) {
    dataPro = JSON.parse(localStorage.product)
}else{
    dataPro = [];
}
function CreatProduct(){
let newPro = {
    title:title.value,
    price:price.value,
    taxes:taxes.value,
    discount:discount.value,
    adsens:adsens.value,
    total:total.innerHTML,
}
if(title.value != '' && price.value != ''){
    dataPro.push(newPro);
    localStorage.setItem('product' , JSON.stringify(dataPro));
}


clear()
ShowData()
}


function ShowData(){
       let screena = ``;
       for( let a = 0; a < dataPro.length ;a++ ){
             screena += `
             <tr>
             <td>${dataPro[a].title}</td>
             <td>${dataPro[a].price}</td>
             <td>${dataPro[a].taxes}</td>
             <td>${dataPro[a].discount}</td>
             <td>${dataPro[a].adsens}</td>
             <td>${dataPro[a].total}</td>
             <td><button onclick="deleAtime(${a})" class="Btn">Delete</button></td>
           </tr>
             `
       }
          document.getElementById('tbadt').innerHTML = screena;
    }


function deleAtime(a){

      dataPro.splice(a,1)
       localStorage.product = JSON.stringify(dataPro);
    ShowData()
}
ShowData()



function clear(){
    title.value ='';
    price.value ='';
taxes.value ='';
discount.value ='';
adsens.value ='';
total.innerHTML ='';
}

