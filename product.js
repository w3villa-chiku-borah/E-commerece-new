async function getProductDetails(elem){
let ShowProduct = document.getElementById("main-product-section")
let nameProduct = document.getElementById("product-name")
let nameProduct2 = document.getElementById("product-name-2")
    const response = await fetch('./data/item.json');
    const obj = await response.json();
    let products = Object.values(obj).map((category) => {
        return Object.values(category);
    })
    products = products.flat().flat();
   
    

    let loggedUser = products?.find((user) => Number(user.id) == Number(elem));
  nameProduct.innerHTML=loggedUser.name;
  nameProduct2.innerHTML=loggedUser.name;
  ShowProduct.innerHTML=`
  <div class="container product-con">
      
  <div class="product-img-container">
      <div class="product-img-container-1">
         <div class="product-img-container-1-child">
          <img   onclick="changeImage(this)" src="${loggedUser.img2}" alt="">
          <img onclick="changeImage(this)" src="${loggedUser.img3}" alt="">
          <img onclick="changeImage(this)" src="${loggedUser.img4}" alt="">
          <img onclick="changeImage(this)" src="${loggedUser.img5}" alt="">
          <img onclick="changeImage(this)" src="${loggedUser.img6}" alt="">
          <img onclick="changeImage(this)" src="${loggedUser.img7}" alt="">
        
         </div>
      </div>
      <div class="product-img-container-2">
        
                  <div class="owl-carousel owl-theme" id="owlProduct">      
                      <div>
                          
                          <img id="image-in-big-screen" src="${loggedUser.img}" alt="">
                      
                      </div>
                      <div>
                          
                      <img src="${loggedUser.img2}" alt="">
                      
                      </div>
                      <div>
                          
                      <img src="${loggedUser.img3}" alt="">
                      
                      </div>
                      <div>
                          
                      <img src="${loggedUser.img4}" alt="">
                      
                      </div>
                      <div>
                          
                      <img src="${loggedUser.img5}" alt="">
                      
                      </div>
                      <div>
                          
                      <img src="${loggedUser.img6}" alt="">
                      
                      </div>
                      <div>
                          
                      <img src="${loggedUser.img7}" alt="">
                      
                      </div>
                  </div>
              
             
      </div>
      
      
      </div>
  <div class="product-details-container" >
      <div class="product-details-h myDIV">
          <button class="btn-h1 active-h1" onclick="desciptionRedBar(this)">DESCRIPTION</button>
          <button class="btn-h1" onclick="desciptionRedBar(this)">SPECIFICATION</button>
          <button class="btn-h1" onclick="desciptionRedBar(this)">REVIEW</button>
          <button class="btn-h1" onclick="desciptionRedBar(this)"> CUSTOM TABS</button>
      </div>
      <div class="product-description">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae nemo quia earum enim dignissimos debitis, explicabo quidem, dicta minima esse veniam veritatis officia at officiis non velit voluptatibus, repellendus eos.
              <span style="opacity: 50%;" id="points-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, nihil!</span>
               <span style="opacity: 50%;" id="points">...</span>
            
        
              <span id="moreText"> 
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cumque libero est, nobis, error quaerat exercitationem consequatur cum voluptates suscipit repellendus modi deleniti expedita dolor similique, praesentium soluta sequi. Dolor numquam, soluta autem recusandae qui sit harum voluptates quo aut.
              </span>
          </p>
         <div> <button  id="textButton" onclick="showMore()"><i class="fa-thin fa-sort-down"></i> Show More</button></div>
      </div>

    <div class="review-sec">
      <i class="fa-solid fa-star" style="color: #ffa702;"></i><i class="fa-solid fa-star" style="color: #ffa702;"></i><i class="fa-solid fa-star" style="color: #ffa702;"></i><i class="fa-light fa-star"></i><i class="fa-light fa-star"></i><a href="">Based on 1  reviews. </a> -<a href="">Write a Review</a>
    </div>
    <div class="price-and-model-sec">
      <div class="price-sec">
          <h2 style="opacity: 80%; font-weight: 900;"><s>$${loggedUser.price_cut}</s></h2>
           <h1 style="color: rgb(240, 6, 6); font-weight: 900;">$${loggedUser.price}</h1>
           <p>Ex Tax:$${loggedUser.price}</p>
           <p>price in reward points:400</p>
           <p>10 or more $69.04</p>
           <p>20 or more $69.41</p>
           <p>30 or more $51.04</p>
          
      </div>
      <div class="model-sec">
          <div class="model-details"><h1><i class="fa-solid fa-check"></i> IN STOCK</h1>
              <ul>
             <li>REwords Points</li>
             <li>Model Product 15</li>
             <li>Weight:12.50kg</li>
             <li >Dimensions:1.00cm  <i class="fa-solid fa-xmark"></i> 2.00cm <i class="fa-solid fa-xmark"></i> 3.00cm</li>
          </ul></div>
          <div class="model-image">
              <img src="${loggedUser.img}" alt="">
              <a href="#">${loggedUser.name}</a>
          </div>
      </div>
  
 </div>
 <div class="details-form">
 <div>
  <form action="">
      <label >Another Select <span style="color: red;">*</span></label>
         <select name="select1" id="select1" required>
           <option value="model1">--Please select-- </option>
           <option value="model1">model1</option>
           <option value="model2">model2</option>
           <option value="model3">model3</option>
      
         </select>
      <label >Select List<span style="color: red;">*</span></label>
         <select name="select1" id="select1" required>
           <option value="model1">--Please select-- </option>
           <option value="model1">model1</option>
           <option value="model2">model2</option>
           <option value="model3">model3</option>
      
         </select>

      </form>
 </div>

   <div class="radio-div">
      <p>Radio<Span style="color: red;"> *</Span></p>
      <button>Smaill(+$7.86)</button>
      <button>medium(+$15.86)</button>
      <button>large(+$32.86)</button>
  </div>
<div class="details-color">
<p>Single choice (With image) <span style="color: red;">*</span></p>
<div class="color-box">
<div style="background-color: red;"></div>
<div style="background-color: rgb(166, 255, 0);"></div>
<div style="background-color: rgb(55, 55, 173);"></div>
<div style="background-color: rgb(255, 217, 0);"></div>

</div>
<div class="input-form">
<form style="padding-bottom: 20px;" action="">
<label> Text <span style="color: red;">*</span></label>
<input type="text" placeholder="test" required>


<label> Textarea<span style="color: red;">*</span></label>
<textarea  placeholder="textarea" rows="4" cols="50"></textarea>
</textarea>


<label class="file-uplode"> File<span style="color: red;">*</span></label>

<input id="f02" type="file" placeholder="UPLODE FILE" />
<label id="f03" for="f02"> <i class="fa-solid fa-arrow-up-from-bracket"></i> UPLODE FILE </label>

<label> Date<span style="color: red;">*</span></label>
<div><input type="date" class="date-input"> <i style="color: blue;" class="fa-sharp fa-solid fa-calendar-days"></i></div>



<label> Time<span style="color: red;">*</span></label>
<div><input type="time" class="time-input"> <i style="color: blue;" class="fa-sharp fa-solid fa-calendar-days"></i></div>
<label> Date and Time<span style="color: red;">*</span></label>
<div><input type="datetime-local" class="date-time-input"> <i style="color: blue;" class="fa-sharp fa-solid fa-calendar-days"></i></div>

</form>

</div>
</div>
<div class="class-atc-q">


<div class="quantity">
<div class="quantity-input">
  <input type="text" name="name" id="text-input" value="1" />
  <div class="button-container">
      <button class="up-btn" type="button" name="button" onclick="numAdd()">
          <i class="fa-sharp fa-regular fa-chevron-up"></i>
      </button>
      <button class="up-btn" type="button" name="button" onclick="numRemove()">
          <i class="fa-sharp fa-regular fa-chevron-down"></i>
      </button>
  </div>
</div>
</div>
<button class="cart-button" onclick="addToCart(${loggedUser.id})"><i class="fa-solid fa-cart-shopping"></i><span>Add To Cart</span> </button>
<button class="buy-button"><i class="fa-regular fa-circle-dollar"></i> <span>buy now</span></button>
<button class="question-button" onclick="triggerModalView()"><i class="fa-regular fa-circle-question"></i></button>

</div>

<div class="wishlist-compare">
<i  style="color: red;" class="fa-regular fa-heart"></i> <span>Add to Wishlist</span>   <i style="color: blue;" class="fa-solid fa-code-compare"></i> <span>Compare The Product</span>
</div>

<div class="info-quantity">
<i class="fa-sharp fa-solid fa-circle-info"></i> This product has a minimum quantity of 2
</div>


<div class="social-space">
<div> <i class="fa-brands fa-facebook-f"></i></div>
<div> <i class="fa-brands fa-twitter"></i></div>
<div> <i class="fa-brands fa-pinterest-p"></i></div>
<div><i class="fa-regular fa-envelope"></i></div>
<div>+7</div>

</div>
 </div>
 </div>
 </div>
  `



  $('#owlProduct.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        400: {
            items: 1
        },
        600: {
            items: 1
        },
        800: {
            items: 1
        },
        1000: {
            items: 1
        },

        1220: {
            items: 1
        },

        1460: {
            items: 1
        },
    }

});

}


function numAdd(){
    let dIValue=document.getElementById("text-input");
    let Value=dIValue.value;
    Value = Number(Value)+1;
    dIValue.value=Value;
}
function numRemove(){
    let dIValue=document.getElementById("text-input");
    let Value=dIValue.value;
    Value = Number(Value)-1;
    dIValue.value=Value;

    if(Value===0 || Value<=0){
        dIValue.value=0;

    }
}





// *********on change image**********

function changeImage(elem){
    let image = elem.src;
    let imageInBigScreen =document.getElementById("image-in-big-screen")
  
    let temp = imageInBigScreen.src;

    imageInBigScreen.src =image;
    // elem.src=temp;
}