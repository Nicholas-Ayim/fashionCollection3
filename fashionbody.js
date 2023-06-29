let overView = document.querySelector('.overView');
let overViewItems = document.querySelector('.overView');


overView.innerHTML =`<div><a href="#">Popular: Clothing</a></div>
                     <div><a href="#">Popular: Shoes</a></div>
                     <div><a href="#">Popular: Accessories</a></div>
                     <div><a href="#">Popular: Face + Body</a></div>
                     <div><a href="#">Popular: Workout clothes</a></div>`;





let recomFunction = document.querySelector('.recomFunction');
let recomFlex = document.querySelector('.recomFunction');

recomFlex.innerHTML = `<div> 
                       <li class="sortClick">sort <i class="fa fa-caret-down"></i>
                       <ul class="sort">
                       <li class="recomHighlight">Recommended</li>
                       <li class="recomHighlight">Recommended</li>
                       <li class="recomHighlight">Recommended</li>
                       </ul>
                       </li>    
                      </div>
                      
                      <div>
                       <li class="sortClick">New Fashion  <i class="fa fa-caret-down"></i>
                       <ul class="sort">
                       <li class="recomHighlight">Recommended</li>
                       <li class="recomHighlight">Recommended</li>
                       <li class="recomHighlight">Recommended</li>
                       </ul>
                       </li>    
                      </div>


                      <div>
                       <li class="sortClick">Category  <i class="fa fa-caret-down"></i>
                       <ul class="sort">
                       <li class="recomHighlight">Recommended</li>
                       <li class="recomHighlight">Recommended</li>
                       <li class="recomHighlight">Recommended</li>
                       </ul>
                       </li>    
                      </div>


                      <div>
                       <li class="sortClick">Product Type <i class="fa fa-caret-down"></i>
                       <ul class="sort">
                       <li class="recomHighlight">Recommended</li>
                       <li class="recomHighlight">Recommended</li>
                       <li class="recomHighlight">Recommended</li>
                       </ul>
                       </li>    
                      </div>


                      <div>
                       <li class="sortClick">Color Brand  <i class="fa fa-caret-down"></i>
                       <ul class="sort">
                       <li class="recomHighlight">Recommended</li>
                       <li class="recomHighlight">Recommended</li>
                       <li class="recomHighlight">Recommended</li>
                       </ul>
                       </li>    
                      </div>


                      <div>
                       <li class="sortClick">Body + fit  <i class="fa fa-caret-down"></i>
                       <ul class="sort">
                       <li class="recomHighlight">Recommended</li>
                       <li class="recomHighlight">Recommended</li>
                       <li class="recomHighlight">Recommended</li>
                       </ul>
                       </li>    
                      </div>
                      


                      <div>
                       <li class="sortClick">size  <i class="fa fa-caret-down"></i>
                       <ul class="sort">
                       <li class="recomHighlight">Recommended</li>
                       <li class="recomHighlight">Recommended</li>
                       <li class="recomHighlight">Recommended</li>
                       </ul>
                       </li>    
                      </div>

                      <div>
                       <li class="sortClick">Price Range <i class="fa fa-caret-down"></i>
                       <ul class="sort">
                       <li class="recomHighlight">Recommended</li>
                       <li class="recomHighlight">Recommended</li>
                       <li class="recomHighlight">Recommended</li>
                       </ul>
                       </li>    
                      </div>
                      `

//click functions to be modified  with some unique functions
let sortClick = document.querySelector('.sortClick');

sortClick.addEventListener('click',function(){

    console.log("clicked here");
});

let costArray = [
    {
        cost20 : '$20.00',
        cost40 :'$40.00',
        cost60 : '$60.00',
        cost80 : '$80.00',
        cost100: '$100.00',
        cost1200: '$1200.00',
        cost1400: '$1400.00',
        cost1600: '$1600.00',  
        cost1600: '$1600.00',  
        cost1800: '$1800.00',
        cost2000: '$20000.00' 
    }
];

let recommendations = document.querySelector('.recommendations');
let recommendationsGrid = document.querySelector('.recommendations');


recommendationsGrid.innerHTML = `<div>
                                 <div class="imageGrid">
                                 <img src="mencoat4.jpg">
                                 </div>
                                 <p><a href="#">Flourence london plus wrap front satin midi dress with flutter
                                 sleeves in the sage</a></p>
                                 <a>${costArray[0].cost100}</a>                            
                                </div>

                                 <div>
                                 <div class="imageGrid">
                                 <img src="couple1.jpeg">
                                 </div>
                                 <p><a href="#">Flourence london plus wrap front satin midi dress with flutter
                                 sleeves in the sage</a></p>
                                 <a>${costArray[0].cost80}</a>                         
                                 </div>

                                 <div>
                                 <div class="imageGrid">
                                 <img src="men2.jpeg">
                                 </div>
                                 <p><a href="#">Flourence london plus wrap front satin midi dress with flutter
                                 sleeves in the sage</a></p>
                                 <a>${costArray[0].cost60}</a>   
                                 </div>

                                 <div>
                                 <div class="imageGrid">
                                 <img src="normalcloth1.png">
                                 </div>
                                 <p><a href="#">Flourence london plus wrap front satin midi dress with flutter
                                 sleeves in the sage</a></p>
                                 <a>${costArray[0].cost100}</a>   
                                 </div>

                                 <div>
                                 <div class="imageGrid">
                                 <img src="men5.jpeg">
                                 </div>
                                 <p><a href="#">Flourence london plus wrap front satin midi dress with flutter
                                 sleeves in the sage</a></p>
                                 <a>${costArray[0].cost1200}</a>   
                                 </div>


                                 <div>
                                 <div class="imageGrid">
                                 <img src="mencoat.jpeg">
                                 </div>
                                 <p><a href="#">Flourence london plus wrap front satin midi dress with flutter
                                 sleeves in the sage</a></p>
                                 <a>${costArray[0].cost1400}</a>                
                                 </div>

                                 <div>
                                 <div class="imageGrid">
                                 <img src="mencoat2.jpeg">
                                 </div>
                                 <p><a href="#">Flourence london plus wrap front satin midi dress with flutter
                                 sleeves in the sage</a></p>
                                 <a>${costArray[0].cost1600}</a>   
                                 </div>

                                 <div>
                                 <div class="imageGrid">
                                 <img src="mencoat4.jpg">
                                 </div>
                                 <p><a href="#">Flourence london plus wrap front satin midi dress with flutter
                                 sleeves in the sage</a></p>
                                 <a>${costArray[0].cost100}</a>   
                                 </div>


                                 <div>
                                 <div class="imageGrid">
                                 <img src="menwomen1.webp">
                                 </div>
                                 <p><a href="#">Flourence london plus wrap front satin midi dress with flutter
                                 sleeves in the sage</a></p>
                                 <a>${costArray[0].cost2000}</a>   
                                 </div>


                                 <div>
                                 <div class="imageGrid">
                                 <img src="normalcloth2.jpeg">
                                 </div>
                                 <p><a href="#">Flourence london plus wrap front satin midi dress with flutter
                                 sleeves in the sage</a></p>
                                 <a>${costArray[0].cost20}</a>   
                                 </div>


                                 <div>
                                 <div class="imageGrid">
                                 <img src="normalcloth.png">
                                 </div>
                                 <p><a href="#">Flourence london plus wrap front satin midi dress with flutter
                                 sleeves in the sage</a></p>
                                 <a>${costArray[0].cost100}</a>   
                                 </div>

                                 <div>
                                 <div class="imageGrid">
                                 <img src="normalcloth1.png">
                                 </div>
                                 <p><a href="#">Flourence london plus wrap front satin midi dress with flutter
                                 sleeves in the sage</a></p>
                                 <a>${costArray[0].cost2000}</a>         
                                 </div>



                                 <div>
                                 <div class="imageGrid">
                                 <img src="princess.jpg">
                                 </div>
                                 <p><a href="#">Flourence london plus wrap front satin midi dress with flutter
                                 sleeves in the sage</a></p>
                                 <a>${costArray[0].cost400}</a>    
                                 </div>

                                 <div>
                                  <div class="imageGrid">
                                 <img src="women1.jpg">
                                 </div>
                                 <p><a href="#">Flourence london plus wrap front satin midi dress with flutter
                                 sleeves in the sage</a></p>
                                 <a>${costArray[0].cost100}</a>   
                                 </div>

                                 <div>
                                 <div class="imageGrid">
                                 <img src="women2.jpg">
                                 </div>
                                 <p><a href="#">Flourence london plus wrap front satin midi dress with flutter
                                 sleeves in the sage</a></p>
                                 <a>${costArray[0].cost100}</a>   
                                 </div>

                                 <div>
                                 <div class="imageGrid">
                                 <img src="women3.jpeg">
                                 </div>
                                 <p><a href="#">Flourence london plus wrap front satin midi dress with flutter
                                 sleeves in the sage</a></p>
                                 <a>${costArray[0].cost140}</a>   
                                 </div>


                                 <div>
                                 <div class="imageGrid">
                                 <img src="women4.jpeg">
                                 </div>
                                 <p><a href="#">Flourence london plus wrap front satin midi dress with flutter
                                 sleeves in the sage</a></p>
                                 <a>${costArray[0].cost100}</a>   
                                 </div>

                                 <div>
                                 <div class="imageGrid">
                                 <img src="women6.jpg">
                                 </div>
                                 <p><a href="#">Flourence london plus wrap front satin midi dress with flutter
                                 sleeves in the sage</a></p>
                                 <a>${costArray[0].cost1200}</a>   
                                 </div>

                                 <div>
                                 <div class="imageGrid">
                                 <img src="women7.jpg">
                                 </div>
                                 <p><a href="#">Flourence london plus wrap front satin midi dress with flutter
                                 sleeves in the sage</a></p>
                                 <a>${costArray[0].cost100}</a>   
                                 </div>

                                 <div>
                                 <div class="imageGrid">
                                 <img src="women8.jpg">
                                 </div>
                                 <p><a href="#">Flourence london plus wrap front satin midi dress with flutter
                                 sleeves in the sage</a></p>
                                 <a>${costArray[0].cost100}</a>   
                                 </div>


                                 <div>
                                 <div class="imageGrid">
                                 <img src="women9.jpeg">
                                 </div>
                                 <p><a href="#">Flourence london plus wrap front satin midi dress with flutter
                                 sleeves in the sage</a></p>
                                 <a>${costArray[0].cost60}</a>   
                                 </div>

                                 <div>
                                 <div class="imageGrid">
                                 <img src="womenmen.jpg">
                                 </div>
                                 <p><a href="#">Flourence london plus wrap front satin midi dress with flutter
                                 sleeves in the sage</a></p>
                                 <a>${costArray[0].cost100}</a>   
                                 </div>

                                 <div>
                                 <div class="imageGrid">
                                 <img src="womenred.webp">
                                 </div>
                                 <p><a href="#">Flourence london plus wrap front satin midi dress with flutter
                                 sleeves in the sage</a></p>
                                 <a>${costArray[0].cost1400}</a>   
                                 </div>

                                 <div>
                                 <div class="imageGrid">
                                 <img src="womenred3.jpg">
                                 </div>
                                 <p><a href="#">Flourence london plus wrap front satin midi dress with flutter
                                 sleeves in the sage</a></p>
                                 <a>${costArray[0].cost40}</a>   
                                 </div>
                                `;
    
                    
let count = document.querySelector('.count');
let next_button = document.querySelector('.next_button');
let firstNext = document.querySelector('#firstNext');
let firstNextGrid = document.querySelector('#firstNext');
let firstNext_container = document.querySelector('.firstNext_container');


let secondNext = document.querySelector('#secondNext');
let secondNextGrid = document.querySelector('#secondNext');
let secondNext_Container = document.querySelector('.secondNext_Container');

let thirdNext = document.querySelector('#thirdNext');
let thirdNextGrid = document.querySelector('#thirdNext');
let thirdNext_Container = document.querySelector('.thirdNext_Container');


firstNextGrid.innerHTML = `<div>
<div class="imageGrid">
<img src="mencoat4.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost100}</a>                            
</div>

<div>
<div class="imageGrid">
<img src="mencoat4.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost80}</a>                         
</div>

<div>
<div class="imageGrid">
<img src="mencoat4.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost60}</a>   
</div>

<div>
<div class="imageGrid">
<img src="mencoat4.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost100}</a>   
</div>

<div>
<div class="imageGrid">
<img src="mencoat4.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost1200}</a>   
</div>


<div>
<div class="imageGrid">
<img src="mencoat4.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost1400}</a>                
</div>

<div>
<div class="imageGrid">
<img src="mencoat4.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost1600}</a>   
</div>

<div>
<div class="imageGrid">
<img src="mencoat4.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost100}</a>   
</div>


<div>
<div class="imageGrid">
<img src="mencoat4.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost2000}</a>   
</div>


<div>
<div class="imageGrid">
<img src="mencoat4.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost20}</a>   
</div>


<div>
<div class="imageGrid">
<img src="mencoat4.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost100}</a>   
</div>

<div>
<div class="imageGrid">
<img src="mencoat4.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost2000}</a>         
</div>



<div>
<div class="imageGrid">
<img src="mencoat4.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost400}</a>    
</div>

<div>
 <div class="imageGrid">
<img src="mencoat4.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost100}</a>   
</div>

<div>
<div class="imageGrid">
<img src="mencoat4.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost100}</a>   
</div>

<div>
<div class="imageGrid">
<img src="mencoat4.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost140}</a>   
</div>


<div>
<div class="imageGrid">
<img src="mencoat4.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost100}</a>   
</div>

<div>
<div class="imageGrid">
<img src="mencoat4.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost1200}</a>   
</div>

<div>
<div class="imageGrid">
<img src="mencoat4.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost100}</a>   
</div>

<div>
<div class="imageGrid">
<img src="mencoat4.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost100}</a>   
</div>


<div>
<div class="imageGrid">
<img src="mencoat4.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost60}</a>   
</div>

<div>
<div class="imageGrid">
<img src="mencoat4.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost100}</a>   
</div>

<div>
<div class="imageGrid">
<img src="mencoat4.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost1400}</a>   
</div>

<div>
<div class="imageGrid">
<img src="mencoat4.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost40}</a>   
</div>
`;

secondNextGrid.innerHTML = `<div>
<div class="imageGrid">
<img src="men1.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost100}</a>                            
</div>

<div>
<div class="imageGrid">
<img src="mencoat4.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost80}</a>                         
</div>

<div>
<div class="imageGrid">
<img src="mencoat4.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost60}</a>   
</div>

<div>
<div class="imageGrid">
<img src="mencoat4.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost100}</a>   
</div>

<div>
<div class="imageGrid">
<img src="mencoat4.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost1200}</a>   
</div>


<div>
<div class="imageGrid">
<img src="mencoat4.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost1400}</a>                
</div>

<div>
<div class="imageGrid">
<img src="mencoat4.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost1600}</a>   
</div>

<div>
<div class="imageGrid">
<img src="mencoat4.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost100}</a>   
</div>


<div>
<div class="imageGrid">
<img src="mencoat4.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost2000}</a>   
</div>


<div>
<div class="imageGrid">
<img src="mencoat4.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost20}</a>   
</div>


<div>
<div class="imageGrid">
<img src="mencoat4.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost100}</a>   
</div>

<div>
<div class="imageGrid">
<img src="mencoat4.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost2000}</a>         
</div>



<div>
<div class="imageGrid">
<img src="mencoat4.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost400}</a>    
</div>

<div>
 <div class="imageGrid">
<img src="mencoat4.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost100}</a>   
</div>

<div>
<div class="imageGrid">
<img src="mencoat4.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost100}</a>   
</div>

<div>
<div class="imageGrid">
<img src="mencoat4.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost140}</a>   
</div>


<div>
<div class="imageGrid">
<img src="mencoat4.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost100}</a>   
</div>

<div>
<div class="imageGrid">
<img src="mencoat4.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost1200}</a>   
</div>

<div>
<div class="imageGrid">
<img src="mencoat4.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost100}</a>   
</div>

<div>
<div class="imageGrid">
<img src="mencoat4.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost100}</a>   
</div>


<div>
<div class="imageGrid">
<img src="mencoat4.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost60}</a>   
</div>

<div>
<div class="imageGrid">
<img src="mencoat4.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost100}</a>   
</div>

<div>
<div class="imageGrid">
<img src="mencoat4.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost1400}</a>   
</div>

<div>
<div class="imageGrid">
<img src="mencoat4.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost40}</a>   
</div>`;

thirdNextGrid.innerHTML = `<div>
<div class="imageGrid">
<img src="img13.jpeg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost100}</a>                            
</div>

<div>
<div class="imageGrid">
<img src="mencoat4.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost80}</a>                         
</div>

<div>
<div class="imageGrid">
<img src="mencoat4.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost60}</a>   
</div>

<div>
<div class="imageGrid">
<img src="mencoat4.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost100}</a>   
</div>

<div>
<div class="imageGrid">
<img src="mencoat4.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost1200}</a>   
</div>


<div>
<div class="imageGrid">
<img src="mencoat4.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost1400}</a>                
</div>

<div>
<div class="imageGrid">
<img src="mencoat4.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost1600}</a>   
</div>

<div>
<div class="imageGrid">
<img src="mencoat4.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost100}</a>   
</div>


<div>
<div class="imageGrid">
<img src="mencoat4.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost2000}</a>   
</div>


<div>
<div class="imageGrid">
<img src="mencoat4.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost20}</a>   
</div>


<div>
<div class="imageGrid">
<img src="mencoat4.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost100}</a>   
</div>

<div>
<div class="imageGrid">
<img src="mencoat4.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost2000}</a>         
</div>



<div>
<div class="imageGrid">
<img src="mencoat4.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost400}</a>    
</div>

<div>
 <div class="imageGrid">
<img src="mencoat4.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost100}</a>   
</div>

<div>
<div class="imageGrid">
<img src="mencoat4.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost100}</a>   
</div>

<div>
<div class="imageGrid">
<img src="mencoat4.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost140}</a>   
</div>


<div>
<div class="imageGrid">
<img src="mencoat4.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost100}</a>   
</div>

<div>
<div class="imageGrid">
<img src="mencoat4.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost1200}</a>   
</div>

<div>
<div class="imageGrid">
<img src="mencoat4.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost100}</a>   
</div>

<div>
<div class="imageGrid">
<img src="mencoat4.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost100}</a>   
</div>


<div>
<div class="imageGrid">
<img src="mencoat4.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost60}</a>   
</div>

<div>
<div class="imageGrid">
<img src="mencoat4.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost100}</a>   
</div>

<div>
<div class="imageGrid">
<img src="mencoat4.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost1400}</a>   
</div>

<div>
<div class="imageGrid">
<img src="mencoat4.jpg">
</div>
<p><a href="#">Flourence london plus wrap front satin midi dress with flutter
sleeves in the sage</a></p>
<a>${costArray[0].cost40}</a>   
</div>`;




let num = 24;
next_button.onclick = () =>{
    if(num === 24){
    window.location.href="#firstNext";
    count.innerHTML = "<span>"+num+"/216"+"</span>";
    recommendationsGrid.style.display = 'none';
    next_button.style.display = "flex";
    firstNext.style.display = "flex";
    num = num + 24;
    count.innerHTML = "<span>"+num+"/216"+"</span>";
    }
    if( num === 48){
    count.innerHTML = "<span>"+num+"/216"+"</span>";
    num = num + 24;

    next_button.style.display = "flex";
     /*firstNext_container.appendChild(firstNext);
     firstNext_container.style.display = "flex";*/
     firstNext.style.display = "flex";
     firstNext_container.appendChild(firstNext);
     next_button.style.display = "flex";
        }
        if( num === 72){
    count.innerHTML = "<span>"+num+"/216"+"</span>";
    num = num + 24;

    next_button.style.display = "flex";
     /*firstNext_container.appendChild(firstNext);
     firstNext_container.style.display = "flex";*/
     secondNext.style.display = "flex";
     next_button.style.display = "flex";

    }
    else{
        if( num === 96){
    count.innerHTML = "<span>"+num+"/216"+"</span>";
    num = num + 24;

    next_button.style.display = "flex";
     /*firstNext_container.appendChild(firstNext);
     firstNext_container.style.display = "flex";*/
     thirdNext.style.display = "flex";
     next_button.style.display = "flex";

        }
    }
}

