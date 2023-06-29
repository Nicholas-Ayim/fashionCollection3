



let productContainer = document.querySelector('.productContainer');
let news = document.querySelector(".news");

let newsContainer = document.createElement('div');
newsContainer.classList.add("grid_container");




newsContainer.innerHTML = `<div class="news_box">
                           <h1 class="header">NEW PRODUCTS</h1>
                           <li><a href="#">View all</a></li>
                           <li><a href="#">clothing</a></li>
                           <li><a href="#">Dress</a></li>
                           <li><a href="#">Shoes</a></li>
                           <li><a href="#">Activewear</a></li>
                           <li><a href="#">Tops</a></li>
                           <li><a href="#">Face + Body</a></li>
                           <li><a href="#">Accessories</a></li>
                           <li><a href="#">Skirts</a></li>
                           <li><a href="#">Shorts</a></li>
                           <li><a href="#">Lingerie and Nightwear</a></li>
                           
                            </div>

                           <div class="news_box">

                           <h1 class="header">TRENDING</h1>
                           <div class="trending"><img src="womenred5.jpeg"><span><a href="#">western</a></a></span></div>
                           <div class="trending"><img src="normalcloth.png"><span><a href="#">cargo pants</a></span></div>
                           <div class="trending"><img src="mencoat.jpeg"><span><a href="#">Denim skirts</a></span></div>
                           <div class="trending"><img src="menwomen1.webp"><span><a href="#">linen looks</a></span></div>
                           <div class="trending"><img src="normalcloth2.jpeg"><span><a href="#">ruffles</a></span></div>

                             
                           </div>

                           <div class="news_box">
                           <h1 class="header">BRAND DROPS</h1>

                           <div class="nest_brand">

                           <div><a href="#">
                           <img class="brand-image" src="womenred5.jpeg"></img>
                           <p>Star Girl</p>
                           </a>
                           </div>

                           <div><a href="#">
                           <img class="brand-image" src="africaman3.jpg">
                           <p>Senior Man</p>
                           </a>

                           </div>

                           <div><a href="#">
                           <img class="brand-image" src="normalcloth1.png">
                           <p>My style</p>
                           </a>
                           </div>

                           <div><a href="#">
                           <img class="brand-image" src="men1.jpg">
                           <p>Fresh boy</p>
                           </a>

                           </div>

                           
                           </div> 


                           </div>

                           <div class="news_box">
                           <h1 class="header">NEW EDITS</h1>

                             
                           <div class="gallery_edit">

                           <div><img class="galleries" src="shoe8.jpeg"></div>
                           <div><img class="galleries" src="shoe6.jpeg"></div>
                           <div><img class="galleries" src="shoe5.jpeg"></div>
                           <div><img class="galleries" src="shoe4.jpeg"></div>
                           <div><img class="galleries" src="shoe3.jpg"></div>
                           <div><img class="galleries" src="shoe2.jpeg"></div>
                           <div><img class="galleries" src="couple1.jpeg"></div>
                           <div><img class="galleries" src="couple2.jpg"></div>
                           <div><img class="galleries" src="couple3.jpg"></div>
                           <div><img class="galleries" src="couple5.jpg"></div>
                           <div><img class="galleries" src="couple6.jpg"></div>
                           <div><img class="galleries" src="women1.jpg"></div>
                           <div><img class="galleries" src="women2.jpg"></div>
                           <div><img class="galleries" src="women3.jpeg"></div>
                           <div><img class="galleries" src="women4.jpeg"></div>
                           <div><img class="galleries" src="women7.jpg"></div>
                           <div><img class="galleries" src="womenred.webp"></div>
                           <div><img class="galleries" src="womenred2.jpeg"></div>
                           <div><img class="galleries" src="womenred3.jpg"></div>
                           <div><img class="galleries" src="womenred5.jpeg"></div>
                           <div><img class="galleries" src="mencoat4.jpg"></div>
                           <div><img class="galleries" src="mencoat.jpeg"></div>
                           <div><img class="galleries" src="mencoat2.jpeg"></div>
                           <div><img class="galleries" src="men5.jpeg"></div>

                           </div>
                           </div>`;


                           

/*
//to be modified later
let gallery_edit = document.querySelector('.gallery_edit');
let galleries = document.createElement('img');
galleries.classList.add('galleries');

let images = [
         "shoe7.jpeg","shoe3.jpg","shoe1.jpeg","shoe2.jpeg"




];

for(let i = 0; i < images.length; i++){

}*/
news.onclick = () =>{
    productContainer.appendChild(newsContainer);
    news.classList.add('highlight');
    if(newsContainer.style.display === 'none' && productContainer.style.display ==="none"){
        newsContainer.style.display = "grid";
        productContainer.style.display = "grid";
    }
    else{
        newsContainer.style.display = "none";
        productContainer.style.display = "none";
        news.classList.remove('highlight');
    }

}


let notification = document.querySelector('.note_bar');
let flex_container = document.querySelector('.note_bar');

flex_container.innerHTML =  `<div class="note1">
                            <li>women</li>
                           </div>
                           
                           <div class="note2">
                            <h1>DONKOMI FRIDAY OOO🎈🛒🛒🎈</h1>
                           </div>
                           
                           <div class="note3">
                            <li>men</li>
                           </div>`;


let navbar = document.querySelector('.navbar3');
let shortcutAnchor = document.querySelector('.navbar3');

shortcutAnchor.innerHTML =  `<li><a href="#home">home ></a></li>
                             <li><a href="#home">women ></a></li>
                             <li><a href="#home">sale ></a></li> 
                             `;


let donkomi_container = document.querySelector('.donkomi_container');
let donkomi_content = document.querySelector('.donkomi_content');
let intialWords = document.querySelector('.initialWords');
let plus  = document.querySelector('.plus');

plus.innerHTML =`<i class="fa fa-caret-down"></i>`;


donkomi_content.appendChild(plus);
plus.onclick = () =>{
    if(intialWords.style.display === 'none'){
        intialWords.style.display ='flex';
        intialWords.innerHTML = `hundreds of styles from all your favourite ASOS brands right here in our sale. 
        With savings of up to 80%, what is not to love? From the latest activewear for less to super-cosy loungewear, 
        we have got the stuff to shake up your wardrobe in our women sale. 
        ASOS DESIGN has got you covered when it comes to discounted casual clothing, 
        from dresses in standout prints to basic cotton tees and perfect pairs of distressed jeans. 
        If you are hoping to find some new swimwear, there is plenty of better-than-half-price.
    `;
        donkomi_content.appendChild(intialWords);
        plus.innerHTML = `<i class="fa fa-caret-up"></i>`; // Change to caret-up icon
        


    }
    else{
        intialWords.style.display ='none';
        plus.innerHTML =`<i class="fa fa-caret-down"></i>`;

        
    }
}
