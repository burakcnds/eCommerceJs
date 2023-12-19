const sepetWrapper = document.getElementById("sepetWrapper")
const sepetMiktar = document.getElementById("sepetMiktar")


let sepet = JSON.parse(localStorage.getItem('sepet'))
 console.log(sepet);

function startPage(){
   

  if(sepet){
      for(let i of sepet){
              sepeteEkle(i)
              
      }
  }else{
      localStorage.setItem('sepet','[]')
  }
}

startPage()

function sepeteEkle(){
    
    sepetWrapper.innerHTML = '';
    sepet.forEach(product => {
        const fiyat = parseFloat(product.fiyat.replace(',', '.')); 
    const subtotal = fiyat * parseInt(product.adet);
  

        
        const sepetCard = document.createElement("tr");
   sepetCard.classList.add("cart-item");
  sepetCard.innerHTML =
  `
  <tr class="cart-item">
  <td></td>
  <td class="cart-image">
      <img src="${product.resim}" alt="">
      <i class="bi bi-x delete-cart" data-id="${product.isim}"></i>
  </td>
  <td>${product.isim}</td>
  <td>${product.fiyat}</td>
  <td class="product-quantity">${product.adet}</td>
  <td class="product-subtotal">${subtotal.toFixed(0) } TL</td>
</tr>

    
  `
    ;
       sepetWrapper.append(sepetCard)
    });

  
}


 
function sepetSil() {
  
    
    const btnSil = document.querySelectorAll(".delete-cart");

    btnSil.forEach((button) => {
        button.addEventListener("click", function (e) {
            const isim = e.target.dataset.id;
            // console.log(isim);
              
            const div = document.querySelector(".cart-item")
        //    console.log(div);
            let urunler = JSON.parse(localStorage.getItem('sepet'))
            // ilgiliUrun = urunler.find((urun)=> urun.isim == isim)
            // console.log(ilgiliUrun);
            let guncelHal = urunler.filter((urun)=> urun.isim != isim)
            console.log(guncelHal);
            
           
           localStorage.setItem('sepet',JSON.stringify(guncelHal))
           sepetGuncelle()
            div.remove()
           
           
            
            
            
        });
    });
}

sepetSil();

function sepetGuncelle(){
    sepetMiktar.textContent = sepet ? sepet.length : 0;
}
sepetGuncelle()