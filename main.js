


const menuEmail= document.querySelector(".navbar-email");
const menuMovile= document.querySelector(".menu");
const menuMobileCambio= document.querySelector(".mobile-menu");
const destopMenu= document.querySelector(".desktop-menu");
const destopCarrito= document.querySelector(".navbar-shopping-cart");
const destopProductos= document.querySelector(".product-detail");
const cardsContainer=document.querySelector(".cards-container");


menuEmail.addEventListener('click', togleShowDestopMenu);
menuMovile.addEventListener('click', togleShowMenu);
destopCarrito.addEventListener('click', togleShowProductos);

function togleShowDestopMenu() {

    const isCarritoClose=destopProductos.classList.contains('active');
   

    if(!isCarritoClose){

        destopProductos.classList.add('active');
    }
    
    destopMenu.classList.toggle('active');
}

function togleShowMenu() {
    const isCarritoClose=destopProductos.classList.contains('active');
    console.log(isCarritoClose);

    if(!isCarritoClose){

        destopProductos.classList.add('active');
    }
    menuMobileCambio.classList.toggle('active');
}

function togleShowProductos(){
    //destopProductos.classList.toggle('active');
    const ismenuMovilecambioClose=menuMobileCambio.classList.contains('active');
    const ismenuPequeClose=destopMenu.classList.contains('active');
   

    if(!ismenuMovilecambioClose){
        menuMobileCambio.classList.add('active');
    }

    if(!ismenuPequeClose){
        destopMenu.classList.add('active');
    }
        destopProductos.classList.toggle('active');

  
}

const productList=[];
productList.push({
    name:"bike",
    price: 130,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name:"moto",
    price: 4330,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name:"Laptop",
    price: 3130,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name:"Pc",
    price: 3108,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});


/* 
 for (var i = 0; i < productList.length;i++) {
     console.log(productList[i].name);
     console.log(productList[i].price);
     console.log(productList[i].image);
 }
*/
/*
<div class="cards-container">
    <div class="product-card">
      <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
      <div class="product-info">
        <div>
          <p>$120,00</p>
          <p>Bike</p>
        </div>
        <figure>
          <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
      </div>
    </div>
</div>*/
function renderProducts(arr){

    for(product of arr) {
        const productCard=document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg=document.createElement('img');
        productImg.setAttribute('src',product.image);
    
        const productInfo=document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv=document.createElement('div');
    
        const productPrice=document.createElement('p');
        productPrice.innerText= '$ '+ product.price;
    
        const productName=document.createElement('p');
        productName.innerText= product.name;
        
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure=document.createElement('figure');
    
        const productImageCart=document.createElement('img');
        productImageCart.setAttribute('src','./icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImageCart);
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);