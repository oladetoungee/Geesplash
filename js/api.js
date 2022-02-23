class UNSPLASH {
  constructor() {
    this.client_id = "ehvujvFwz-J0t9jR8afwI8oRLLO3BJBwIEObcT7Qz7E";
    this.client_secret = "0ot1X84jHmTIGEDV1MLYnVEoTK1W-y5ORv4ZAYEIY0k";
  }

  /* 
  ---------
  
  This is the Function used to
  get the African Photos and Searched Photos

  ---------
  */

  async getPhotos(searchKey) {
    
    const africanPhotosResponse = await fetch(
      `https://api.unsplash.com/search/photos/?client_id=${this.client_id}&query=africa`
    );
    const searchedPhotosResponse = await fetch(
      `https://api.unsplash.com/search/photos/?client_id=${this.client_id}&query=${searchKey}`
    );
    
    const africanPhotos = await africanPhotosResponse.json();
    const searchedPhotos = await searchedPhotosResponse.json();
    

    return {
      africanPhotos,
      searchedPhotos,
     
    };
  }

    /* 
  ---------
  
  This is the Function used to
  get the Zoomed Picture
  
  ---------
  */

  
  async getPhoto(photoId) {
 

    const photoResponse = await fetch(
      `https://api.unsplash.com/photos/${photoId}/?client_id=${this.client_id}`
    );

    const photo = await photoResponse.json();

    return {
      photo
    };
  }
}
