let submenu = document.querySelector('.submenu');
let container = document.querySelector('.container');

let dropContent = document.createElement('div');
dropContent.classList.add("drop");
dropContent.innerHTML = `<ul class="signup">
                        <li><a href="#">sign In</a></li>
                        <li><a href="#">log In</a></li>
                        </ul>
                        <hr>
                        <div class="grid-profile">
                        <div>
                        <i class="fa fa-user"></i><a href="#">  My Account</a>
                        </div>
                        <hr>
                        <div>
                        <i class="fas fa-shopping-cart"></i><a href="#">  My Order</a>
                        </div>
                        <hr>
                        <div>
                        <i class="fa fa-phone"></i><a href="#">  My Returns</a>
                        </div>
                        <hr>
                        <div>
                        <i class="fa fa-info"></i><a href="#">  Returns information</a>
                        </div>
                        <hr>
                        <div>
                        <i class="fa fa-address-book"></i><a href="#">  contact Preferences</a>
                        </div> 
                                               
                        </div>`;
                        container.appendChild(dropContent);


submenu.onclick = () =>{
  if(dropContent.style.display === "none" && container.style.display === "none"){
    dropContent.style.display = "block";
    container.style.display = "block";


  }
  else{
    dropContent.style.display = "none";
    container.style.display = "none";

  }
}


let navbar2 = document.querySelector('.navbar2');

let productList = document.createElement('div');
productList.classList.add('productlist');

productList.innerHTML = `<li class="slanted-border">Sale</li>
                         <li class="news">New in</li>
                         <li class="clothing">clothing</li>
                         <li class="dress">Dresses</li>
                         <li class="summer" >summer</li>
                         <li class="shoes">shoes</li>
                         <li class="plus size">plus size</li>
                         <li class="accessories">accessories</li>
                         <li class="activewear">activewear</li>
                         <li class="brands">brands</li>
                         <li class="face_body">face + body</li>
                         <li class="marketplace">marketplace</li>
                         <li class="slanted-border">outlet</li>
                         
                         `;
navbar2.appendChild(productList);


