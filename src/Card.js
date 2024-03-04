function createCard() {
    // Create the card HTML structure
    const cardHTML = `
      <div class="card" style="width: 18rem;">
        <img src="https://via.placeholder.com/150" class="card-img-top" alt="Card Image">
        <div class="card-body">
          <h5 class="card-title">Card Title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div class="card" style="width: 18rem;">
      <img src="https://via.placeholder.com/150" class="card-img-top" alt="Card Image">
      <div class="card-body">
        <h5 class="card-title">Card Title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    <div class="card" style="width: 18rem;">
        <img src="https://via.placeholder.com/150" class="card-img-top" alt="Card Image">
        <div class="card-body">
          <h5 class="card-title">Card Title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    `;
  
    // Insert the card HTML into a container
    document.getElementById('cardContainer').innerHTML = cardHTML;
  }
  
  // Export the function to make it accessible from other files
  export { createCard };