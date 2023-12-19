const sepetWrapper = document.getElementById("sepetWrapper")
const sepetMiktar = document.getElementById("sepetMiktar")



function satinAl(){
  const buttons = [...document.getElementsByClassName("product-item")]
  buttons.forEach((butonlar)=>{
    butonlar.addEventListener("click",function(){
     
       console.log(butonlar);

      const isim = butonlar.querySelector(".product-title").textContent
       
       const fiyat = butonlar.querySelector(".new-price").textContent
       
       const resim = butonlar.querySelector('img').src
        // const id = butonlar.querySelector(".id")
        //  console.log(id);
       

       const urun = {
        // "id":id,
        "isim":isim,

        "fiyat":fiyat,
        "resim":resim,
        "adet":1
       }
       console.log(urun);

       let urunler = JSON.parse(localStorage.getItem("sepet"))
       sepetMiktar.textContent = urunler ? urunler.length : 0;
       let ilgiliUrun = urunler.find(i => i.isim == urun.isim)
      

       if(ilgiliUrun == undefined){
        urunler.push(urun)
        
       }else if(ilgiliUrun){
        ilgiliUrun.adet +=1
       }


       localStorage.setItem("sepet",JSON.stringify(urunler))

       
    })
  })
  
  
}




// function startPage(){
//   const sepet = JSON.parse(localStorage.getItem('sepet'))

//   if(sepet){
//       for(let i of sepet){
//               sepeteEkle(i)
//       }
//   }else{
//       localStorage.setItem('sepet','[]')
//   }
// }

// startPage()


// function sepeteEkle(){
//   const sepetCard = document.createElement("tr");
//    sepetCard.classList.add("cart-item");
//   sepetCard.innerHTML =
//   `
//   <tr class="cart-item">
//   <td></td>
//   <td class="cart-image">
//       <img src="./img/erkekSwearshirt1:1.jpeg" alt="">
//       <i class="bi bi-x delete-cart"></i>
//   </td>
//   <td>Soluk efektli kare kesim kapüşonlu sweatshirt</td>
//   <td>890 TL</td>
//   <td class="product-quantity">1</td>
//   <td class="product-subtotal">890 TL</td>
// </tr>

    
//   `
//     ;
//        sepetWrapper.append(sepetCard)
// }





// ! Ürün Getir JS Start
function renderProducts(category, containerId) {
  const urunler = document.getElementById(containerId);


  fetch('products.json')
    .then(response => response.json())
    .then(products => {
     
      const filteredProducts = products.filter(product => product.category === category);
        console.log(filteredProducts)
     
      filteredProducts.forEach(element => {
        const card = document.createElement("div");
        card.classList.add("product-wrapper");
        card.innerHTML = `
          <div class="product-wrapper">
            <ul class="product-list">
              <li class="product-item id=${element.id}">
                <div class="product-image">
                  <a href="#">
                    <img src="${element.images[0]}" alt="" class="img1">
                    <img src="${element.images[2]}" alt="" class="img2">
                  </a>
                </div>
                <div class="product-info">
                  <a href="$" class="product-title">${element.name}</a>
                  <div class="product-prices">
                    <strong class="new-price text-black">${element.price}</strong>
                  </div>
                  <div class="product-links">
                    <button class="add-to-cart "> 
                      <i class="bi bi-basket-fill"></i>
                    </button>
                    <button>
                      <i class="bi bi-heart-fill"></i>
                    </button>
                    <a href="./urunDetay.html">
                      <i class="bi bi-eye-fill"></i>
                    </a>
                    <a href="#">
                      <i class="bi bi-share-fill"></i>
                    </a>
                  </div>
                </div>
              </li>
            </div>
        `;
        
        
        urunler.append(card);
        
        
      });
        satinAl();
    })
    .catch(error => console.error('JSON yükleme hatası:', error));
}


renderProducts("Sweatshirt", "products");
renderProducts("Ceket", "productsKadin");




// ! Ürün Getir JS End
  

//! Navbar sidebar start
const btnOpenSidebar = document.querySelector("#btn-menu");
const sidebar = document.querySelector("#sidebar");
const btnCloseSidebar = document.querySelector("#close-sidebar");
btnOpenSidebar.addEventListener("click", function () {
  sidebar.style.left = "0";
});

btnCloseSidebar.addEventListener("click", function () {
  sidebar.style.left = "-100%";
});

//! Navbar sidebar end


//! slider start
let slideIndex = 1;
showSlides(slideIndex);

setInterval(() => {
  showSlides((slideIndex += 1));
}, 4000);

function plusSlide(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  const slides = document.getElementsByClassName("slider-item");
  const dots = document.getElementsByClassName("slider-dot");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}

//! slider end


// let sepet = JSON.parse(localStorage.getItem('sepet'))
// console.log(sepet);
// sepetMiktar.textContent = sepet ? sepet.length : 0;






