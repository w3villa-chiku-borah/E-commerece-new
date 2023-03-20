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

                        <input type="button" value="ADD TO CART">
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
                <input type="button" value="ADD TO CART">
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
     if(searchText.value.length==0){
        console.log("chiku");
        main.style.display = "block"
        showResult.innerHTML=``;
      
    }
    if(items!=""){
    if(prods.length>0 ){
      prods.forEach(element =>{
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

                    <input type="button" value="ADD TO CART">
                </div>
                <div> 
            
                    <i style="font-weight:100" class="fa-solid fa-heart" onclick="showLove(this)"></i>
                 
                    <i class="fa-solid fa-arrow-right-arrow-left"></i>
                </div>
            </div>


        </div>

    </div>`

    showResult.innerHTML=html;
    main.style.display = "none"
      })
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

    const response = await fetch('./data/item.json');
    const obj= await response.json();

  let products = Object.values(obj).map((category) => {
    return Object.values(category);
})
let html = ``;
//  console.log(products);
products = products.flat().flat();
products.forEach(element =>{
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

                <input type="button" value="ADD TO CART">
            </div>
            <div> 
        
                <i style="font-weight:100" class="fa-solid fa-heart" onclick="showLove(this)"></i>
             
                <i class="fa-solid fa-arrow-right-arrow-left"></i>
            </div>
        </div>


    </div>

</div>`
})
html+=`
<div class="pegination">
<nav aria-label="Page navigation example">
<ul class="pagination">
  <li class="page-item"><a class="page-link" href="#">Previous</a></li>
  <li class="page-item"><a class="page-link" href="#">1</a></li>
  <li class="page-item"><a class="page-link" href="#">2</a></li>
  <li class="page-item"><a class="page-link" href="#">3</a></li>
  <li class="page-item"><a class="page-link" href="#">Next</a></li>
</ul>
</nav>
</div>`;

showResult.innerHTML=html;
main.style.display = "none";
}
