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
                        <i style="font-weight:100" onclick="wishlistItems(${element.id})" class="fa-solid fa-heart"></i>
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
        autoplay: true,
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
            <div><span><i class="fa-regular fa-heart" onclick="wishlistItems(${element.id})"></i> <i
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

// ***************
const rangeInput = document.querySelectorAll(".range-input input"),
priceInput = document.querySelectorAll(".price-input input"),
range = document.querySelector(".slider .progress");
let priceGap = 1000;
priceInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);
        
        if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
            if(e.target.className === "input-min"){
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
            }else{
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});
rangeInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);
        if((maxVal - minVal) < priceGap){
            if(e.target.className === "range-min"){
                rangeInput[0].value = maxVal - priceGap
            }else{
                rangeInput[1].value = minVal + priceGap;
            }
        }else{
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});

// ************

let prods = 0;



async function search(inputData) {

     let searchItemName = document.getElementById("search-item-name");
     let inputItemName = document.getElementById("input-search-item");
    // let searchText1 = document.getElementById("myInput1");
    let searchText = inputData;
    let searchText1 = inputData;
    let items;
  
        items = searchText;
    
        items = searchText1;
        
    
    searchItemName.innerHTML=items;
    inputItemName.value=items;
    let itemsInlow = items.toLowerCase();
   
    let showResult = document.getElementById("show-result-div-sec");
    let showResultList = document.getElementById("show-result-div-sec-list");
    // let main= document.getElementsByTagName()
    let main = document.getElementById("main-section")
    let html = ``;
    let htmlList = ``;
    let prods= await searchInItems(itemsInlow);
   
    // location.href=("searchpage.html")
    let pagitantionDiv = document.getElementById("pegination-div-main-2");
    let pegiArray = [];
    let pegiArrayMain = [];
    let n = prods.length;
   localStorage
    if (items != "") {
        if (prods.length > 0) {
        
            for (let i = 0; i < prods.length; i++) {
               
                html += ` <div class="item02" id="item02-id"> <img class="labels-1" src="${prods[i].img}">
    <div class="lebels-c1">
        CUSTOM LEBELS
    </div>
    <div class="lebels-c2">
        -70%
    </div>
    <div class="lebels-c2 lebels-c3">
        HOT
    </div>
    <div class="item02-c1">
        <p><u>Eriksson</u></p>
        <p>model 2098</p>
    </div>
    <div class="item02-c2">
        <h1>${prods[i].name}</h1>
        <p>$${prods[i].price} <s>$3,299.00</s></p>
    </div>
    <div class="item02-c3">
        <div><input type="number" value="1">
            <input type="button" onclick="addToCart(${prods[i].id})"  value="ADD TO CART">
            <span><i class="fa-solid fa-cart-shopping shopping-cart-at630"></i></span>
        </div>
        <div><span><i class="fa-regular fa-heart" onclick="wishlistItems(${prods[i].id})"></i> <i
                    class="fa-sharp fa-solid fa-arrow-right-arrow-left"></i></span></div>
    </div>
    <div class="item02-c4">
        <p><i class="fa-solid fa-sack-dollar"></i>
            Buy Now </p>
        <p><i class="fa-regular fa-circle-question"></i> Question</p>
    </div>
</div>`

                
            

            }
            showResult.innerHTML = html;
// *****************

 for(let i=0;i<prods.length;i++){
    htmlList+= `
    <div class="item02-list" id="item02-list"> 
                            <div class="item02-list-image">
                                <img class="labels-1" src="${prods[i].img}">
                                <div class="lebels-c1">
                                    CUSTOM LEBELS
                                </div>
                                <div class="lebels-c2">
                                    -70%
                                </div>
                                <div class="lebels-c2 lebels-c3">
                                    HOT
                                </div>
                            </div>
                           
                           <div class="item02-list-details">
                            <div class="item02-c1">
                                <p>Brand:<u style="color:blue">Eriksson</u></p>
                                <p style="padding-left: 20px;">Model: 2098</p>
                            </div>

                            <div class="item02-c2">
                                <h1>${prods[i].name}</h1>
                                <!--  -->
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto architecto magnam ea qui culpa cum, quis rem voluptatibus eaque quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem libero deleniti qui nisi laborum cupiditate tempora iusto dolor iure magni? lorem20</p>
                                <p class="price-details">
                                     <span style="font-size: 30px; color: brown; font-weight: bold;">${prods[i].price}</span> <s style="font-size: 25px;">$3,299.00</s> <br><span style="font-weight: 900; opacity: 80%; font-size: 20px;">Ex Tax:$70.61</span></p>

                            </div>
                            <div class="item02-c3">
                                <div><input type="number" value="1">
                                    <input type="button" onclick="addToCart(${prods[i].id})" value="ADD TO CART" >
                                    <span><i class="fa-solid fa-cart-shopping shopping-cart-at630"></i></span>
                                </div>
                                <div style="padding-left: 20px;"><span><i class="fa-regular fa-heart" onclick="wishlistItems(${prods[i].id})"></i> <i
                                            class="fa-sharp fa-solid fa-arrow-right-arrow-left"></i></span></div>
                            </div>
                            <div class="item02-c4">
                                <p><i class="fa-solid fa-sack-dollar"></i>
                                    Buy Now </p>
                                <p style="padding-left: 30px;"><i class="fa-regular fa-circle-question"></i> Question</p>
                            </div>
                           </div>
                        </div>
    `
 }

 showResultList.innerHTML = htmlList;
// ************
console.log(pagitantionDiv)
let num = prods.length / 10;
num = Math.ceil(num)
console.log(Math.ceil(num));
for (i = 1; i <= num; i++) {
    pagitantionDiv.innerHTML +=
     `
<div class="pegination-div">
    <ul>
      <li><a href="#" onclick="peginationInSearch(this)">${i}</a></li>
    </ul>
</div>
`
}
main.style.display = "none";

pagitantionDiv.classList.add("show-pegination");

        }
        else{
            html = `<div style="font-size:25px"> No Result is Found </div>`
            showResult.innerHTML = html;
            main.style.display = "none"
        }
        
    }
    else {
        html = `<div style="font-size:25px"> No Result is Found </div>`
        showResult.innerHTML = html;
        main.style.display = "none"
    }

    showResultList.classList.add("show-list-result")

  
   
}


function onGrid(){
    let showResult = document.getElementById("show-result-div-sec");
    let showResultList = document.getElementById("show-result-div-sec-list");
    showResult.classList.remove("show-list-none")
    showResultList.classList.add("show-list-none")
}
function onList(){
    let showResult = document.getElementById("show-result-div-sec");
    let showResultList = document.getElementById("show-result-div-sec-list");
    
        showResultList.classList.add("show-list-block");
        showResultList.classList.remove("show-list-none");
    

    showResult.classList.add("show-list-none");
}


async function searchInItems(elem) {
    const response = await fetch('./data/item.json');
    const obj = await response.json();

    let products = Object.values(obj).map((category) => {
        return Object.values(category);
    })
    itemsFound = [];
    //  console.log(products);
    products = products.flat().flat();

    for (let i = 0; i < products.length; i++) {
        let itemName = products[i].name;
        itemName = itemName.toLowerCase();
        if (itemName.includes(elem)) {
            itemsFound.push(products[i]);
        }
    }
    return itemsFound;

}
async function seeAllProduct() {
    let showResult = document.getElementById("show-result-div-sec");
    let main = document.getElementById("main-section")
    let showSearchItemSec = document.getElementById("show-search-items");
    const response = await fetch('./data/item.json');
    const obj = await response.json();
    let pagitantionDiv = document.getElementById("pegination-div-main");
    let pegiArray = [];
    let pegiArrayMain = [];

    let products = Object.values(obj).map((category) => {
        return Object.values(category);
    })
    let html = ``;

    products = products.flat().flat();
    // pegiArrayMain = products.slice(0,9)
    let chunk = 10;
    for (let i = 0; i < products.length; i += chunk) {
        if (products.length < 10) {
            pegiArrayMain = products;
        }
        else {
            pegiArrayMain.push(products.slice(i, chunk + i));
        }
    }

    pegiArray.push(pegiArrayMain[0]);
    pegiArray = pegiArray.flat();

    pegiArray.forEach((element, indx) => {
        html += ` 
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
        
                <i style="font-weight:100" class="fa-solid fa-heart" onclick="wishlistItems(${element.id})"></i>
             
                <i class="fa-solid fa-arrow-right-arrow-left"></i>
            </div>
        </div>


    </div>

</div>`

    })
    showResult.innerHTML = html;
    let num = products.length / 10;
    num = Math.ceil(num)
    console.log(Math.ceil(num));
    for (i = 1; i <= num; i++) {
        pagitantionDiv.innerHTML += `
<div class="pegination-div">
        <ul>
          <li><a href="#" onclick="pegination(this)">${i}</a></li>
        </ul>
    </div>
`
    }
    main.style.display = "none";

    pagitantionDiv.classList.add("show-pegination");
}
async function pegination(elem) {
    console.log("hellooo..")
    let showResult = document.getElementById("show-result-div-sec");
    let main = document.getElementById("main-section")
    let showSearchItemSec = document.getElementById("show-search-items");
    const response = await fetch('./data/item.json');
    const obj = await response.json();
    let pagitantionDiv = document.getElementById("pegination-div-main");
    let pegiArray = [];
    let pegiArrayMain = [];

    let products = Object.values(obj).map((category) => {
        return Object.values(category);
    })
    let html = ``;

    products = products.flat().flat();
    // pegiArrayMain = products.slice(0,9)
    let chunk = 10;
    for (let i = 0; i < products.length; i += chunk) {
        if (products.length < 10) {
            pegiArrayMain = products;
        }
        else {
            pegiArrayMain.push(products.slice(i, chunk + i));
        }
    }

    let value = Number(elem.innerText);
    let value2 = value;
    value = value - 1
    let len = pegiArrayMain.length;
    console.log(len)
    pegiArray.push(pegiArrayMain[value]);
    pegiArray = pegiArray.flat();
    console.log(pegiArray)

    pegiArray.forEach((element, indx) => {
        html += ` 
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
        
                <i style="font-weight:100" class="fa-solid fa-heart" onclick="wishlistItems(${element.id})"></i>
             
                <i class="fa-solid fa-arrow-right-arrow-left"></i>
            </div>
        </div>


    </div>

</div>`


    })
    showResult.innerHTML = html;
    main.style.display = "none";
    pagitantionDiv.classList.add("show-pegination");
}

async function peginationInSearch(elem) {
    let itemName=getParameterByName();
   
  
    let items;
  
        items = itemName;
    
        items = itemName;
        
        
        
        let itemsInlow = items.toLowerCase();
        let showResult = document.getElementById("show-result-div-sec");
        // let main= document.getElementsByTagName()
        let main = document.getElementById("main-section")
        let html = ``;
        products = await searchInItems(itemsInlow);
        
        let pagitantionDiv = document.getElementById("pegination-div-main-2");
        let pegiArray = [];
        let pegiArrayMain = [];
        let pegiArrayMain2 = [];
        let n = prods.length;
        let chunk = 10;
        for (let i = 0; i < products.length; i += chunk) {
            if (products.length < 10) {
            console.log("chiku")
            pegiArrayMain = products;
        }
        else {
            pegiArrayMain.push(products.slice(i, chunk + i));
            let value = Number(elem.innerText);
            let value2 = value;
            value = value - 1
            let len = pegiArrayMain.length;
            pegiArray.push(pegiArrayMain[value]);
            pegiArray = pegiArray.flat();
            console.log(pegiArray)
        
            pegiArray.forEach((element, indx) => {
                html +=  ` <div class="item02" id="item02-id"> <img class="labels-1" src="${element.img}">
                <div class="lebels-c1">
                    CUSTOM LEBELS
                </div>
                <div class="lebels-c2">
                    -70%
                </div>
                <div class="lebels-c2 lebels-c3">
                    HOT
                </div>
                <div class="item02-c1">
                    <p><u>Eriksson</u></p>
                    <p>model 2098</p>
                </div>
                <div class="item02-c2">
                    <h1>${element.name}</h1>
                    <p>$${element.price} <s>$3,299.00</s></p>
                </div>
                <div class="item02-c3">
                    <div><input type="number" value="1">
                        <input type="button" onclick="addToCart(${element.id})"  value="ADD TO CART">
                        <span><i class="fa-solid fa-cart-shopping shopping-cart-at630"></i></span>
                    </div>
                    <div><span><i class="fa-regular fa-heart" onclick="wishlistItems(${element.id})"></i> <i
                                class="fa-sharp fa-solid fa-arrow-right-arrow-left"></i></span></div>
                </div>
                <div class="item02-c4">
                    <p><i class="fa-solid fa-sack-dollar"></i>
                        Buy Now </p>
                    <p><i class="fa-regular fa-circle-question"></i> Question</p>
                </div>
            </div>`
            
                                
        
            })
            showResult.innerHTML = html;
            main.style.display = "none";
            pagitantionDiv.classList.add("show-pegination");
        }
    }


}
const itemIncart = JSON.parse(localStorage.getItem('cart')) || [];
async function addToCart(elem) {
    const response = await fetch('./data/item.json');
    const obj = await response.json();
    let products = Object.values(obj).map((category) => {
        return Object.values(category);
    })
    products = products.flat().flat();
    console.log(products);
    console.log(elem);
    

    let loggedUser = products?.find((user) => Number(user.id) == Number(elem));
    let flag = false;
    for (let i = 0; i < itemIncart.length; i++) {
        if (itemIncart[i].id == loggedUser.id) {
            flag = true;
        }
    }

    if (!flag) {
        itemIncart.push(loggedUser);
        Swal.fire(
            'Item is added to cart',
            'success'
        )
    }
    else {
        Swal.fire({
            icon: 'error',

            text: 'Items is already in cart',

        })
    }

    let itemIncartInLocal = JSON.stringify(itemIncart);
    localStorage.setItem("cart", itemIncartInLocal);
    numOfItems();
    totalPrice();
    console.log(itemIncart);
}


function cartItems() {

    let showResult = document.getElementById("cart-n-wishlist-header");
    let html = ``;
    console.log(showResult)
    let main = document.getElementById("search-main");

    if (itemIncart.length > 0) {
        for (let i = 0; i < itemIncart.length; i++) {
            html += ` 
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
            
                    <i style="font-weight:100" class="fa-solid fa-heart" onclick="wishlistItems(${itemIncart[i].id})"></i>
                 
                    <i class="fa-solid fa-arrow-right-arrow-left"></i>
                </div>
            </div>


        </div>
    </div>`
          let html2=
            showResult.innerHTML = html;
          
            main.style.display = "none";
        }
    }
    else {

        html = `<div class="no-item"> No item in Cart </div>`
        showResult.innerHTML = html;
        main.style.display = "none";
    }
    numOfItems();
    totalPrice()
    cartDiv.style.display = "block";
   
}

function removeToCart(elem) {
    let cartDiv = document.getElementsByClassName("cart-n-wishlist-header")[0];
    let cartdivP = document.getElementsByClassName("cartdivP")[0];

    for (let i = 0; i < itemIncart.length; i++) {
        if (elem == itemIncart[i].id) {
            itemIncart.splice(i, 1)
        }
    }
    let itemIncartInLocal = JSON.stringify(itemIncart);
    localStorage.setItem("cart", itemIncartInLocal);

    let showResult = document.getElementById("cart-n-wishlist-header");
    let html = ``;

    let main = document.getElementById("search-main");

    if (itemIncart.length > 0) {
        console.log("hmo")
        for (let i = 0; i < itemIncart.length; i++) {
            html += ` 
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
            
                    <i style="font-weight:100" class="fa-solid fa-heart"onclick="wishlistItems(${itemIncart[i].id})"></i>
                   
                    <i class="fa-solid fa-arrow-right-arrow-left"></i>
                </div>
            </div>


        </div>
    </div>`

            showResult.innerHTML = html;
            main.style.display = "none";
        }
    }
    else {

        html = `<div class="no-item" > no item in Cart </div>`
        showResult.innerHTML = html;
        main.style.display = "none";
    }
    numOfItems();
    totalPrice()
    cartDiv.style.display = "block";
   
}

function numOfItems() {
    let numOfItems = document.getElementsByClassName("cartItems-child")[0];
    let numOfItemsAtO = document.getElementsByClassName("itms-num-at-0")[0];
    
    let n = itemIncart.length;
    numOfItems.innerHTML = n;
    numOfItemsAtO.innerHTML = n;
    
}
numOfItems();
function totalPrice() {
    let totalPrice = document.getElementsByClassName("total-price")[0];
    let price = 0;
    for (let i = 0; i < itemIncart.length; i++) {
        price += Number(itemIncart[i].price);
    }
  
    totalPrice.innerHTML = price.toFixed(2);
    
}
totalPrice();

 
function reload() {
    numOfItems();
    totalPrice();
 
}
const itemInWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

async function wishlistItems(elem) {
    const response = await fetch('./data/item.json');
    const obj = await response.json();
    let products = Object.values(obj).map((category) => {
        return Object.values(category);
    })
    products = products.flat().flat();

    let loggedUser = products?.find((user) => Number(user.id) == Number(elem));
    let flag = false;
    for (let i = 0; i < itemInWishlist.length; i++) {
        if (itemInWishlist[i].id == loggedUser.id) {
            flag = true;
        }
    }

    if (!flag) {
        itemInWishlist.push(loggedUser);
        Swal.fire(
            'Item is added to wishlist',
            'success'
        )
    }
    else {
        Swal.fire({
            icon: 'error',
            text: 'Items is already in wishlist',
        })
    }

    let itemInWishListInLocal = JSON.stringify(itemInWishlist);
    localStorage.setItem("wishlist", itemInWishListInLocal);
}

function wishlistIcon() {
    let cartDiv = document.getElementsByClassName("cart-n-wishlist-header")[0];
    let cartdivP = document.getElementsByClassName("cartdivP")[0];
    let showResult = document.getElementById("cart-n-wishlist-header");
    let html = ``;
    
    let main = document.getElementById("search-main");



    if (itemInWishlist.length > 0) {
        console.log("hmo")
        for (let i = 0; i < itemInWishlist.length; i++) {
            html += ` 
        <div class="featured-products-card show-result-div-sec" >
        <div class="image-container">
            <img loading="lazy" src="${itemInWishlist[i].img}" alt="">
        </div>

        <div class="cart-container cart-container-show">
            <h2>${itemInWishlist[i].name}</h2>
            <p class="price">$${itemInWishlist[i].price} </p>
            <hr>
            <div class="add-to-cart-container show-result-cart">
                <div>

                    <input type="button" onclick="addToCart(${itemInWishlist[i].id})" value="Add to CART">
                </div>
                <div> 
            
                <i class="fa-solid fa-trash-can" onclick="removeWishlistItems(${itemInWishlist[i].id})"></i>
                    <i class="fa-solid fa-arrow-right-arrow-left"></i>
                </div>
            </div>


        </div>
    </div>`

            showResult.innerHTML = html;
            main.style.display = "none";
        }
    }
    else {

        html = `<div class="no-item"> No item in WishList </div>`
        showResult.innerHTML = html;
        main.style.display = "none";
    }
    cartDiv.style.display = "block";
   
}

function removeWishlistItems(elem) {
    for (let i = 0; i < itemInWishlist.length; i++) {
        if (elem == itemInWishlist[i].id) {
            itemInWishlist.splice(i, 1)
        }
    }
    let itemInWishlistInLocal = JSON.stringify(itemInWishlist);
    localStorage.setItem("wishlist", itemInWishlistInLocal);

    let showResult = document.getElementById("cart-n-wishlist-header");
    let html = ``;
    
    let main = document.getElementById("search-main");

    if (itemInWishlist.length > 0) {
        console.log("hmo")
        for (let i = 0; i < itemInWishlist.length; i++) {
            html += ` 
        <div class="featured-products-card show-result-div-sec" >
        <div class="image-container">
            <img loading="lazy" src="${itemInWishlist[i].img}" alt="">
        </div>

        <div class="cart-container cart-container-show">
            <h2>${itemInWishlist[i].name}</h2>
            <p class="price">$${itemInWishlist[i].price} </p>
            <hr>
            <div class="add-to-cart-container show-result-cart">
                <div>

                    <input type="button" onclick="addToCart(${itemInWishlist[i].id})" value="Add to CART">
                </div>
                <div> 
                <i class="fa-solid fa-trash-can" onclick="removeWishlistItems(${itemInWishlist[i].id})"></i>
                    <i class="fa-solid fa-arrow-right-arrow-left"></i>
                </div>
            </div>


        </div>
    </div>`

            showResult.innerHTML = html;
            main.style.display = "none";
        }
    }
    else {

        html = `<div class="no-item"> No item in Wishlist </div>`
        showResult.innerHTML = html;
        main.style.display = "none";
    }
    showResult.classList.add("min-hight-class")
}
function comeSearch() {
   
    let searchButton = document.getElementById('search-id');
  console.log("hi")
    searchButton.classList.toggle("search-id");
  
}


function handleSearchPageQuery(elem){
    let inputData = document.getElementById("myInput").value;
    let inputData1 = document.getElementById("myInput1").value;
    let inputData2 = document.getElementById("input-search-item").value;
 
    if(elem=="inComputer"){
        location.href=(`searchpage.html?search=${inputData}`)

    }
    else if(elem=="inComputerSearch"){
        location.href=(`searchpage.html?search=${inputData2}`)

    }
    else{
        location.href=(`searchpage.html?search=${inputData1}`)
    
    }
}