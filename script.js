// ================= MODAL =================

const modal = document.getElementById("modal");

const openButtons = document.querySelectorAll(".open-modal");

const closeBtn = document.getElementById("close-btn");

const planetName = document.getElementById("planet-name");

const planetDescription = document.getElementById("planet-description");

const planetDistance = document.getElementById("planet-distance");

const planetMoons = document.getElementById("planet-moons");

const modalImage = document.getElementById("modal-image");

// ================= OPEN MODAL =================

openButtons.forEach(button => {

  button.addEventListener("click", () => {

    modal.classList.add("active");

    planetName.textContent = button.dataset.planet;

    planetDescription.textContent = button.dataset.description;

    planetDistance.textContent = button.dataset.distance;

    planetMoons.textContent = button.dataset.moons;

    // CHANGE IMAGE DYNAMICALLY

    const planet = button.dataset.planet.toLowerCase();

    modalImage.src = `assets/images/${planet}.jpg`;

  });

});

// ================= CLOSE MODAL =================

closeBtn.addEventListener("click", () => {

  modal.classList.remove("active");

});

// CLOSE USING ESC KEY

document.addEventListener("keydown", (e) => {

  if(e.key === "Escape"){

    modal.classList.remove("active");

  }

});

// CLOSE ON OUTSIDE CLICK

window.addEventListener("click", (e) => {

  if(e.target === modal){

    modal.classList.remove("active");

  }

});

// ================= TABS =================

const tabButtons = document.querySelectorAll(".tab-btn");

const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(button => {

  button.addEventListener("click", () => {

    const tab = button.dataset.tab;

    tabButtons.forEach(btn => {

      btn.classList.remove("active");

    });

    button.classList.add("active");

    tabContents.forEach(content => {

      content.classList.remove("active");

    });

    document.getElementById(tab).classList.add("active");

  });

});

// ================= ACCORDION =================

const accordionButtons = document.querySelectorAll(".accordion-btn");

accordionButtons.forEach(button => {

  button.addEventListener("click", () => {

    const content = button.nextElementSibling;

    if(content.style.maxHeight){

      content.style.maxHeight = null;

    }

    else{

      content.style.maxHeight = content.scrollHeight + "px";

    }
 

  });

});