async function readData() {
    const response = await fetch('./data/item.json');
    const data = await response.json();
    const response2 = await fetch('./data/mostView.json');
    const data2 = await response2.json();

    showFashion(data.fashion.fashionProducts);
    showMostView(data2.mostView);

    // showBlog (data3.blog2)
}

const showFashion = (arrayOfData) => {
    let html = `<div class="owl-carousel owl-theme" id="owlfour">`;
    let fashionContainer = document.getElementById("show-fashion");
    arrayOfData.forEach(element => {
        html += `<div class="item item-main-04">
        <div class="featured-products-card">
            <div class="image-container">
                <img loading="lazy" src="${element.img}" alt="">

              ${element.c_lebels ? ` <div class="lebels-c1 lebels-04-main-1">
                    2-3 days
                </div>` : ``}`;
                if (element.off.length > 0) {
                    html += `<div class="lebels-c2">
                   ${element.off}
                </div>`
                }

               html += `${element.hot ? ` <div class="lebels-c2 lebels-c3 lebels-04-main-2">
                    HOT
                </div>` : ``}



            </div>

            <div class="cart-container">
                <h2>${element.name}</h2>
                <p class="price">$${element.price} </p>
                <hr>
                <div class="add-to-cart-container">
                    <div>

                        <input type="button" onclick="addToCart(${element.id})" value="ADD TO CART">
                    </div>
                    <div class="heart-exchange-fashion">
                        <i style="font-weight:100" class="fa-solid fa-heart"></i>
                        <i class="fa-solid fa-arrow-right-arrow-left"></i>
                    </div>
                </div>


            </div>

        </div>


    </div>`
    });
    html += `</div>`;
    fashionContainer.innerHTML = html;

    $('#owlfour').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        autoplay:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1084: {
                items: 2
            },

            1220: {
                items: 3
            },


            1460: {
                items: 4
            }
            
        }

    });
}

const showMostView = (arrayOfData) => {
    let html = `<div class="owl-carousel owl-theme" id="owlnine">`;
    let mView = document.getElementById("mostView");
    arrayOfData.forEach(element => {
        html += `
 <div class="item-09">
                    <div class="item-c-09">
                        <div class="item-c1-09"><img src="${element.img}"></div>
                        <div class="item-c2-09">
                             <div>
                            <h1> <strong>${element.name}</strong><br>$${element.price}</h1>
                            
                            </div>
                            <p>
                          
                                <i class="fa-solid fa-cart-shopping fa-cart-shopping-item09 shopping-cart-at630"></i> <i
                                    class="fa-regular  fa-cart-heart-item09 fa-heart"></i> <i
                                    class="fa-sharp fa-solid fa-cart-arrow-item09 fa-arrow-right-arrow-left"></i>
                            </p>
                        </div>
                    </div>
                </div>`
    });
    html += `</div>`;
    mView.innerHTML = html;
    $('#owlnine.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        // autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            460: {
                items: 2
            },
            700: {
                items: 3
            },

            1220: {
                items: 4
            },

            1460: {
                items: 5

            },
        }

    });

}
async function readDataBlog(elem) {
    const response3 = await fetch('./data/blog.json');
    const data3 = await response3.json();
    switch (elem) {
        case "LATEST POST":
            showBlog(data3.LATEST_POST);
            // console.log(data4.FEATURED);
            break;
        case "MOST READ":
            showBlog(data3.MOST_READ);
            break;
    }
}

const showBlog = (arrayOfData) => {
    let html = `<div class="owl-carousel owl-theme" id="owlthree">`;
    let blog = document.getElementById('from-our-blog-img');
    arrayOfData.forEach(element => {
        html += `<div class="item item-main-07">
<img src="${element.img}"> 
<div class="aug">
    2 <br> aug
</div>
<div class="main-07-admin"> <i class="fa-solid fa-user"></i><span>${element.name}</span>
    <i class="fa-solid fa-comment-dots"></i><span>${element.text}</span>
    <i class="fa-solid fa-eye"></i><span>${element.view}</span>

</div>
<div class="item-main-07-jurnal">
    <h1>
        Jouranl Blog is Here
    </h1>
    <p class="item-main-07-p1">${element.para}

    </p>
    <p>
        <a>
            Read More <i class="fa-solid fa-arrow-right"></i>
        </a>
    </p>
</div>
</div>`
    });
    html += `</div>`;
    blog.innerHTML = html;
    $('#owlthree.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            },

            1220: {
                items: 3
            },

            1460: {
                items: 3
            },
        }

    });
}
readDataBlog("LATEST POST");

readData();

async function readData2(elem) {
    const response4 = await fetch('./data/item.json');
    const data4 = await response4.json();

    // showFeature(data4.FEATURED);
    switch (elem) {
        case "FEATURED":
            showFeature(data4.feature.FEATURED);
            // console.log(data4.FEATURED);
            break;
        case "LATEST":
            showFeature(data4.feature.LATEST);
            break;
        case "BESTSELLERS":
            showFeature(data4.feature.BESTSELLERS);
            break;


        case "SPECIAL":
            showFeature(data4.feature.SPECIAL);
            break;

    }
}

const showFeature = (arrayOfData) => {
    let html = `<div class="owl-carousel owl-theme" id="owltwo">`;
    let blog = document.getElementById('show-feature');
    arrayOfData.forEach(element => {
        html += `<div class="item02"> <img class="labels-1" src="${element.img}">
         
        ${element.c_lebels ? `<div class="lebels-c1">
            CUSTOM LEBELS
        </div>` : ``}`;
        if (element.off.length > 0) {
            html += `<div class="lebels-c2">
           ${element.off}
        </div>`
        }
        html += `${element.hot ? `<div class="lebels-c2 lebels-c3">
            HOT
        </div>` : ``}

        <div class="item02-c1">
            <p><u>${element.brand}</u></p>
            <p>model ${element.modal_name}</p>
        </div>
        <div class="item02-c2">
            <h1>${element.name}</h1>
            <p>$${element.price}<s>$${element.price_cut}</s></p>
        </div>
        <div class="item02-c3">
            <div><input type="number" value="1">
                <input type="button" onclick="addToCart(${element.id})" value="ADD TO CART">
                <span><i class="fa-solid fa-cart-shopping shopping-cart-at630"></i></span>
            </div>
            <div><span><i class="fa-regular fa-heart"></i> <i
                        class="fa-sharp fa-solid fa-arrow-right-arrow-left"></i></span></div>
        </div>
        <div class="item02-c4">
            <p><i class="fa-solid fa-sack-dollar"></i>
                Buy Now </p>
            <p><i class="fa-regular fa-circle-question"></i> Question</p>
        </div>
    </div>`
    });
    html += `</div>`;
    blog.innerHTML = html;
    $('#owltwo.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            },

            1220: {
                items: 3
            },
            1336: {
                items: 4
            },

            1460: {
                items: 4
            },
            1560: {
                items: 4
            },
            1700: {
                items: 4
            },
        }

    });

}


readData2("FEATURED");



async function readData3(elem) {
    const response5 = await fetch('./data/buy.json');
    const data5 = await response5.json();

    // showBuy(data5.TOP_CATEGORIES);
    switch (elem) {
        case "TOP_CATEGORIES":
            showBuy(data5.TOP_CATEGORIES);
            // console.log(data4.FEATURED);
            break;
        case "ELECTRONICS":
            showBuy(data5.ELECTRONICS);
            break;
        case "BEAUTY":
            showBuy(data5.BEAUTY);
            break;


        case "FASHION":
            showBuy(data5.FASHION);
            break;

    }
}

const showBuy = (arrayOfData) => {
    let html = `<div class="owl-carousel owl-theme" id="owlFirst">`;
    let blog = document.getElementById("buy-img-container");
    arrayOfData.forEach(element => {
        html += `<div class="item">
        <div class="item-c">${element.type}</div><img src="${element.img}">
    </div>
`
    });
    html += `</div>`;
    blog.innerHTML = html;
    $('#owlFirst.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            },

            1220: {
                items: 4
            },

            1440: {
                items: 5
            },
        }

    });

}
readData3("TOP_CATEGORIES");

let prods=0 ;
async function search(){
    let searchText = document.getElementById("myInput");
    let items=searchText.value;
    let itemsInlow = items.toLowerCase();
    let showResult= document.getElementById("show-result-div-sec");
    // let main= document.getElementsByTagName()
    let main= document.getElementById("main-section")
    let html = ``;
     prods = await searchInItems(itemsInlow);
     let pagitantionDiv =document.getElementById("pegination-div-main");
     let pegiArray=[];
     let pegiArrayMain=[];
     let n = prods.length;
     
    if(items!=""){
        if(prods.length>0 ){
        console.log("hmo")
        for(let i =0;i<prods.length;i++){
        html+= ` 
        <div class="featured-products-card show-result-div-sec" >
        <div class="image-container">
            <img loading="lazy" src="${prods[i].img}" alt="">
        </div>

        <div class="cart-container cart-container-show">
            <h2>${prods[i].name}</h2>
            <p class="price">$${prods[i].price} </p>
            <hr>
            <div class="add-to-cart-container show-result-cart">
                <div>

                    <input type="button" onclick="addToCart(${prods[i].id})" value="ADD TO CART">
                </div>
                <div> 
            
                    <i style="font-weight:100" class="fa-solid fa-heart" onclick="showLove(this)"></i>
                 
                    <i class="fa-solid fa-arrow-right-arrow-left"></i>
                </div>
            </div>


        </div>
    </div>`

    showResult.innerHTML=html;

pagitantionDiv.innerHTML =`
<div class="pegination-div">
        <ul>
          <li><a href="#" onclick="peginationInSearch(this)">1</a></li>
          <li><a href="#" onclick="peginationInSearch(this)">2</a></li>
          <li><a href="#" onclick="peginationInSearch(this)">3</a></li>
          <li><a href="#" onclick="peginationInSearch(this)">4</a></li>
          <li><a href="#" onclick="peginationInSearch(this)">5</a></li>
        
        </ul>
    </div>
`
console.log(pagitantionDiv)
main.style.display = "none";
pagitantionDiv.classList.add("show-pegination");


    if(i>=10){
        break;
    }
      }
    }
    else {
        html = `<div> No Result is Found </div>`
        showResult.innerHTML=html;
    main.style.display = "none"
    }
    
}

//    showResult.innerHTML=html;
//     main.style.display = "none"
    console.log(prods)

 }

 async function searchInItems(elem){
    const response = await fetch('./data/item.json');
    const obj= await response.json();

  let products = Object.values(obj).map((category) => {
    return Object.values(category);
})
     itemsFound =[]; 
    //  console.log(products);
    products = products.flat().flat();
   
    for(let i =0;i< products.length;i++){
        let itemName = products[i].name;
        itemName = itemName.toLowerCase();
       if(itemName.includes(elem)){
        itemsFound.push(products[i]);
       }
    }
    return itemsFound;
    
}
async function seeAllProduct(){
    let showResult= document.getElementById("show-result-div-sec");
    let main= document.getElementById("main-section")
    let showSearchItemSec = document.getElementById("show-search-items");
    const response = await fetch('./data/item.json');
    const obj= await response.json();
    let pagitantionDiv =document.getElementById("pegination-div-main");
     let pegiArray=[];
     let pegiArrayMain=[];

  let products = Object.values(obj).map((category) => {
    return Object.values(category);
})
let html = ``;

products = products.flat().flat();
// pegiArrayMain = products.slice(0,9)
let chunk = 10;
for(let i =0;i<products.length;i+=chunk){
if(products.length<10){
    pegiArrayMain=products;
}
else{
    pegiArrayMain.push(products.slice(i,chunk+i));
}
}
 
pegiArray.push(pegiArrayMain[0]);
pegiArray=pegiArray.flat();

pegiArray.forEach((element,indx) =>{
    html+= ` 
    <div class="featured-products-card show-result-div-sec" >
    <div class="image-container">
        <img loading="lazy" src="${element.img}" alt="">
    </div>

    <div class="cart-container cart-container-show">
        <h2>${element.name}</h2>
        <p class="price">$${element.price} </p>
        <hr>
        <div class="add-to-cart-container show-result-cart">
            <div>

                <input type="button" onclick="addToCart(${element.id})" value="ADD TO CART">
            </div>
            <div> 
        
                <i style="font-weight:100" class="fa-solid fa-heart" onclick="showLove()"></i>
             
                <i class="fa-solid fa-arrow-right-arrow-left"></i>
            </div>
        </div>


    </div>

</div>`
 
})
showResult.innerHTML=html;
pagitantionDiv.innerHTML =`
<div class="pegination-div">
        <ul>
          <li><a href="#" onclick="pegination(this)">1</a></li>
          <li><a href="#" onclick="pegination(this)">2</a></li>
          <li><a href="#" onclick="pegination(this)">3</a></li>
          <li><a href="#" onclick="pegination(this)">4</a></li>
          <li><a href="#" onclick="pegination(this)">5</a></li>
        
        </ul>
    </div>
`
main.style.display = "none";

pagitantionDiv.classList.add("show-pegination");
}
 async function pegination(elem){
    console.log("hellooo..")
    let showResult= document.getElementById("show-result-div-sec");
    let main= document.getElementById("main-section")
    let showSearchItemSec = document.getElementById("show-search-items");
    const response = await fetch('./data/item.json');
    const obj= await response.json();
    let pagitantionDiv =document.getElementById("pegination-div-main");
     let pegiArray=[];
     let pegiArrayMain=[];

  let products = Object.values(obj).map((category) => {
    return Object.values(category);
})
let html = ``;

products = products.flat().flat();
// pegiArrayMain = products.slice(0,9)
let chunk = 10;
for(let i =0;i<products.length;i+=chunk){
if(products.length<10){
    pegiArrayMain=products;
}
else{
    pegiArrayMain.push(products.slice(i,chunk+i));
}
}
let value=Number(elem.innerText);
let value2=value;
value=value-1
let len=pegiArrayMain.length;
console.log(len)
pegiArray.push(pegiArrayMain[value]);
pegiArray=pegiArray.flat();
console.log(pegiArray)

pegiArray.forEach((element,indx) =>{
    html+= ` 
    <div class="featured-products-card show-result-div-sec" >
    <div class="image-container">
        <img loading="lazy" src="${element.img}" alt="">
    </div>

    <div class="cart-container cart-container-show">
        <h2>${element.name}</h2>
        <p class="price">$${element.price} </p>
        <hr>
        <div class="add-to-cart-container show-result-cart">
            <div>

                <input type="button" onclick="addToCart(${element.id})" value="ADD TO CART">
            </div>
            <div> 
        
                <i style="font-weight:100" class="fa-solid fa-heart" onclick="showLove(this)"></i>
             
                <i class="fa-solid fa-arrow-right-arrow-left"></i>
            </div>
        </div>


    </div>

</div>`

 
})
showResult.innerHTML=html;
main.style.display = "none";
pagitantionDiv.classList.add("show-pegination");
}

 async function peginationInSearch(elem){
    let searchText = document.getElementById("myInput");
    let items=searchText.value;
    let itemsInlow = items.toLowerCase();
    let showResult= document.getElementById("show-result-div-sec");
    // let main= document.getElementsByTagName()
    let main= document.getElementById("main-section")
    let html = ``;
    products = await searchInItems(itemsInlow);
     let pagitantionDiv =document.getElementById("pegination-div-main");
     let pegiArray=[];
     let pegiArrayMain=[];
     let pegiArrayMain2=[];
     let n = prods.length;
     let chunk =10;
     for(let i =0;i< products.length;i+=chunk){
        if(products.length<10){
            pegiArrayMain2=products;
        }
        else{
            pegiArrayMain.push(products.slice(i,chunk+i));
        }
        };
    let value=Number(elem.innerText);
    let value2=value;
    value=value-1
    let len=pegiArrayMain.length;
    console.log(len)
    pegiArray.push(pegiArrayMain[value]);
    pegiArray=pegiArray.flat();
    console.log(pegiArray)
    if(products.length<10){
       
        pegiArrayMain2.forEach((element,indx) =>{
        html+= ` 
        <div class="featured-products-card show-result-div-sec" >
        <div class="image-container">
            <img loading="lazy" src="${element.img}" alt="">
        </div>
    
        <div class="cart-container cart-container-show">
            <h2>${element.name}</h2>
            <p class="price">$${element.price} </p>
            <hr>
            <div class="add-to-cart-container show-result-cart">
                <div>
    
                    <input type="button" onclick="addToCart(${element.id})" value="ADD TO CART">
                </div>
                <div> 
            
                    <i style="font-weight:100" class="fa-solid fa-heart" onclick="showLove(this)"></i>
                 
                    <i class="fa-solid fa-arrow-right-arrow-left"></i>
                </div>
            </div>
    
    
        </div>
    
    </div>`
    
     
    })

    showResult.innerHTML=html;

pagitantionDiv.innerHTML =`
<div class="pegination-div">
        <ul>
          <li><a href="#" onclick="peginationInSearch(this)">1</a></li>
          <li><a href="#" onclick="peginationInSearch(this)">2</a></li>
          <li><a href="#" onclick="peginationInSearch(this)">3</a></li>
          <li><a href="#" onclick="peginationInSearch(this)">4</a></li>
          <li><a href="#" onclick="peginationInSearch(this)">5</a></li>
        
        </ul>
    </div>
`
console.log(pagitantionDiv)
main.style.display = "none";
pagitantionDiv.classList.add("show-pegination");

      }
    
    else {
        
        pegiArray.forEach((element,indx) =>{
            html+= ` 
            <div class="featured-products-card show-result-div-sec" >
            <div class="image-container">
                <img loading="lazy" src="${element.img}" alt="">
            </div>
        
            <div class="cart-container cart-container-show">
                <h2>${element.name}</h2>
                <p class="price">$${element.price} </p>
                <hr>
                <div class="add-to-cart-container show-result-cart">
                    <div>
        
                        <input type="button" onclick="addToCart(${element.id})" value="ADD TO CART">
                    </div>
                    <div> 
                
                        <i style="font-weight:100" class="fa-solid fa-heart" onclick="showLove(this)"></i>
                     
                        <i class="fa-solid fa-arrow-right-arrow-left"></i>
                    </div>
                </div>
        
        
            </div>
        
        </div>`
        
         
        })
    
        showResult.innerHTML=html;
    
    pagitantionDiv.innerHTML =`
    <div class="pegination-div">
            <ul>
              <li><a href="#" onclick="peginationInSearch(this)">1</a></li>
              <li><a href="#" onclick="peginationInSearch(this)">2</a></li>
              <li><a href="#" onclick="peginationInSearch(this)">3</a></li>
              <li><a href="#" onclick="peginationInSearch(this)">4</a></li>
              <li><a href="#" onclick="peginationInSearch(this)">5</a></li>
            
            </ul>
        </div>
    `
    main.style.display = "none";
    pagitantionDiv.classList.add("show-pegination");
    
    }
    
}  
const itemIncart= JSON.parse(localStorage.getItem('cart')) || [];
async function addToCart(elem){
    const response = await fetch('./data/item.json');
    const obj= await response.json();
  let products = Object.values(obj).map((category) => {
    return Object.values(category);
})
products = products.flat().flat();
console.log(products);
console.log(elem);
console.log(itemIncart);

let loggedUser = products?.find((user) => Number(user.id) == Number(elem));
let flag= false;
for(let i= 0 ;i<itemIncart.length;i++){
    if(itemIncart[i].id==loggedUser.id){
   flag=true;
    }
}

if(!flag){
itemIncart.push(loggedUser);
Swal.fire(
    'Good job!',
    'Item is added to cart',
    'success'
  )
}
else{
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Items is already in cart</a>'
      })
}

  let itemIncartInLocal=JSON.stringify(itemIncart);
  localStorage.setItem("cart",itemIncartInLocal);
  numOfItems();
}


function cartItems(){
    let showResult= document.getElementById("show-result-div-sec");
    let html =``;
    let jurnalDiv = document.getElementsByClassName("bg-grey")[0];
    let pagitantionDiv =document.getElementById("pegination-div-main");

    let main= document.getElementById("main-section");
            
    if(itemIncart.length>0 ){
        console.log("hmo")
        for(let i =0;i<itemIncart.length;i++){
        html+= ` 
        <div class="featured-products-card show-result-div-sec" >
        <div class="image-container">
            <img loading="lazy" src="${itemIncart[i].img}" alt="">
        </div>

        <div class="cart-container cart-container-show">
            <h2>${itemIncart[i].name}</h2>
            <p class="price">$${itemIncart[i].price} </p>
            <hr>
            <div class="add-to-cart-container show-result-cart">
                <div>

                    <input type="button" onclick="removeToCart(${itemIncart[i].id})" value="Remove From CART">
                </div>
                <div> 
            
                    <i style="font-weight:100" class="fa-solid fa-heart" onclick="showLove(this)"></i>
                 
                    <i class="fa-solid fa-arrow-right-arrow-left"></i>
                </div>
            </div>


        </div>
    </div>`

    showResult.innerHTML=html;
    main.style.display = "none";
        }
    }
    else {

        html = `<div> No item in Cart </div>`
        showResult.innerHTML=html;
    main.style.display = "none";
    }
    pagitantionDiv.style.display="none";
    jurnalDiv.style.display="none";
    numOfItems();
}

function removeToCart(elem){
    for(let i =0;i<itemIncart.length;i++){
        if(elem==itemIncart[i].id){
            itemIncart.splice(i,1)
        }
    }
    let itemIncartInLocal=JSON.stringify(itemIncart);
    localStorage.setItem("cart",itemIncartInLocal);

    let showResult= document.getElementById("show-result-div-sec");
    let html =``;
    let pagitantionDiv =document.getElementById("pegination-div-main");

    let main= document.getElementById("main-section");
            
    if(itemIncart.length>0 ){
        console.log("hmo")
        for(let i =0;i<itemIncart.length;i++){
        html+= ` 
        <div class="featured-products-card show-result-div-sec" >
        <div class="image-container">
            <img loading="lazy" src="${itemIncart[i].img}" alt="">
        </div>

        <div class="cart-container cart-container-show">
            <h2>${itemIncart[i].name}</h2>
            <p class="price">$${itemIncart[i].price} </p>
            <hr>
            <div class="add-to-cart-container show-result-cart">
                <div>

                    <input type="button" onclick="removeToCart(${itemIncart[i].id})" value="Remove From CART">
                </div>
                <div> 
            
                    <i style="font-weight:100" class="fa-solid fa-heart" onclick="showLove(this)"></i>
                 
                    <i class="fa-solid fa-arrow-right-arrow-left"></i>
                </div>
            </div>


        </div>
    </div>`

    showResult.innerHTML=html;
    main.style.display = "none";
        }
    }
    else {

        html = `<div> No item in Cart </div>`
        showResult.innerHTML=html;
    main.style.display = "none";
    }
    pagitantionDiv.style.display="none";
    numOfItems();
}
function numOfItems(){
   let numOfItems = document.getElementsByClassName("cartItems-child")[0];

   let n=itemIncart.length;
   numOfItems.innerHTML=n;
}
numOfItems();