/* 
  ---------
  
 Class Initialized
  
  ---------
  */

const unsplash = new UNSPLASH();
const ui = new UI();

/* 
  ---------
  
  Display Placeholder on the Homepage
  
  ---------
  */

ui.displayPlaceholders();

/* 
  ---------
  
  African Pictures Gotten
  
  ---------
  */

unsplash.getPhotos().then(data => {
  ui.displayPictures(data.africanPhotos.results);
});

/* 
  ---------
  
  Search Event Listeners and its function
  
  ---------
  */

//Search Input
searchInput = document.querySelector(".header__form");
//Search Event Listeners

searchInput.addEventListener("submit", function searchPictures(e) {
  const searchKey = e.target.children[1].value;
  history.pushState(null, null, searchKey);
  ui.displaySearchedPlaceholders(searchKey);

  unsplash.getPhotos(searchKey).then(data => {
    ui.displayResults(data.searchedPhotos.results, searchKey);
  });
  e.target.children[1].value = "";
  e.preventDefault();
});

window.addEventListener("popstate", function(e) {
  unsplash.getPhotos().then(data => {
    ui.displayPictures(data.africanPhotos.results);
  });
});

/* 
  ---------
  
  Zoom Picture Event Listeners
  
  ---------
  */

pictures = document.querySelector(".images");

//Zoom Event Listeners
pictures.addEventListener("click", e => {
  if (e.target.classList.contains("images__item")) {
    let photoId = e.target.className.split(" ")[1];

    unsplash.getPhoto(photoId).then(data => {
      ui.zoomPhoto(data.photo);
    });
  } else if (e.target.parentElement.classList.contains("images__item")) {
    photoId = e.target.parentElement.className.split(" ")[1];
    unsplash.getPhoto(photoId).then(data => {
      ui.zoomPhoto(data.photo);
    });
  }
});

/* 
  ---------
  
 Close Zoom Event Listeners
  
  ---------
  */

modalContainer = document.querySelector(".modal-section");

//Close Zoom Event Listeners

modalContainer.addEventListener("click", e => {
  if (e.target.classList.contains("modal__close")) {
    modalContainer.innerHTML = "";
  }
});
