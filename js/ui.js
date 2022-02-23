class UI {
  constructor() {
    this.imagesContainer = document.querySelector(".images");
    this.placeholder = `
        <div class="images__item placeholder">
          <img
           
          />
          
          <div class="images__item-info">
            <h3 class="images__item-name placeholder__child">
              
            </h3>
            <p class="images__item-location placeholder__child"></p>
          </div>
        </div>
        `;
    this.alert = document.createElement("h1");
  }

  /* 
  ---------
  
 Dsiplay Placeholder Function

  ---------
  */

  displayPlaceholders() {
    let output = "";
    for (let i = 0; i < 10; i++) {
      output += this.placeholder;
    }
    document.querySelector(".images").innerHTML = output;
  }

  /* 
  ---------
  
 Dsiplay African Picture Placeholder
  
  ---------
  */
  displayPictures(user) {
    let formConChild = document.querySelector(".header__form-con")
      .lastElementChild;
    let form = document.querySelector(".header__form");
    if (formConChild.tagName === "H1") {
      form.style.display = "block";
      
      formConChild.replaceWith(form);
    }
    let output = "";

    user.forEach(function(u) {
      output += `
            <div class="images__item ${u.id}">
              <img
                src="${u.urls.regular}"
                style="width: 100%;"
                class="images__item-image"
              />
            
              
                <h3 class="images__item-name">
                  ${u.user.name}
                </h3>
                <p class="images__item-location">${u.user.location}</p>
              
            </div>
            `;
    });

    document.querySelector(".images").innerHTML = output;
  }

  /* 
  ---------
  
Searched Result Placeholder Function
  
  ---------
  */

  displaySearchedPlaceholders(searchKey) {
    let output = "";
    let formCon = document.querySelector(".header__form-con");
    let form = document.querySelector(".header__form");
    form.style.display = "none";
    formCon.appendChild(this.alert);
    for (let i = 0; i < 10; i++) {
      output += this.placeholder;
    }
    this.alert.innerHTML = `Searching For <span>"${searchKey}"</span>`;
    document.querySelector(".images").innerHTML = output;
  }

  /* 
  ---------
  
Search Result Function
  
  ---------
  */
  displayResults(searched, searchKey) {
    let doneAlert = document.createElement("h1");
    this.alert.replaceWith(doneAlert);
    if (searched.length === 0) {
      doneAlert.innerHTML = `No result for<span> "${searchKey}"</span>`;
      document.querySelector(".images").innerHTML = "";
    } else {
      let output = "";
      searched.forEach(function(u) {
        if (u.user.location === null) {
          output += `
             <div class="images__item ${u.id}">
               <img
                 src="${u.urls.regular}"
                 style="width: 100%;"
                 class="images__item-image"
               />
             
            
                 <h3 class="images__item-name">
                   ${u.user.name}
                 </h3>
                 <p class="images__item-location"></p>
             
             </div>
             `;
        } else {
          output += `
             <div class="images__item ${u.id}">
               <img
                 src="${u.urls.regular}"
                 style="width: 100%;"
                 class="images__item-image"
               />
                 <h3 class="images__item-name">
                   ${u.user.name}
                 </h3>
                 <p class="images__item-location">${u.user.location}</p>
             </div>
             `;
        }
      });
      doneAlert.innerHTML = `Search Result for <span>"${searchKey}"</span>`;
      document.querySelector(".images").innerHTML = output;
    }
  }

  /* 
  ---------
  
 Zoomed Photo Function
  
  ---------
  */

  zoomPhoto(picture) {
    if (picture.user.location === null) {
      document.querySelector(".modal-section").innerHTML = ` <div class="modal">
    <p class="modal__close">
      &times;
    </p>
    <div class="modal__body">
        <img class="modal__image" src="${picture.urls.regular}
        }"/>
      <div class="modal__info">
        <h3 class="modal__heading">
           ${picture.user.name} 
           
        </h3>
        
      </div>
    </div>
   
  </div>`;
    } else {
      document.querySelector(".modal-section").innerHTML = ` <div class="modal">
    <p class="modal__close">
      &times;
    </p>
    <div class="modal__body">
        <img class="modal__image" src="${picture.urls.regular}
        }"/>
      <div class="modal__info">
        <h3 class="modal__heading">
           ${picture.user.name} 
           
        </h3>
        <p class="modal__paragraph">
           ${picture.user.location}
        </p>
      </div>
    </div>
   
  </div>`;
    }
  }
}
