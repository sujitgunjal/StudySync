// Smooth Scroll
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Auto Counter Animation
document.addEventListener("DOMContentLoaded", function() {
    const counters = document.querySelectorAll(".stat strong");

    counters.forEach(counter => {
        let target = +counter.parentElement.getAttribute("data-count");
        let count = 0;

        let updateCount = () => {
            if (count < target) {
                count += Math.ceil(target / 100);
                counter.innerText = count;
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
});

// Back to Top Button
const topBtn = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
    topBtn.style.display = window.scrollY > 200 ? "block" : "none";
});

topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


document.addEventListener("DOMContentLoaded", () => {
    const leftBtn = document.querySelector(".left-btn");
    const rightBtn = document.querySelector(".right-btn");
    const cardsContainer = document.querySelector(".cards-container");
  
    // Select original cards (excluding clones)
    const originalCards = Array.from(cardsContainer.querySelectorAll(".card"));
    const originalCount = originalCards.length;
  
    // Clone original cards and append them to the end
    originalCards.forEach(card => {
      const clone = card.cloneNode(true);
      clone.classList.add("clone");
      cardsContainer.appendChild(clone);
    });
  
    // Clone original cards and prepend (in reverse order)
    originalCards.slice().reverse().forEach(card => {
      const clone = card.cloneNode(true);
      clone.classList.add("clone");
      cardsContainer.insertBefore(clone, cardsContainer.firstChild);
    });
  
    // Determine the width of one card and the width of the original region
    let cardWidth = originalCards[0].offsetWidth;
    const regionWidth = originalCount * cardWidth;
  
    // Set initial scroll position to the start of the original cards (the middle region)
    cardsContainer.scrollLeft = regionWidth;
  
    // Amount to scroll on each button click
    const scrollAmount = 300;
  
    // Helper for positive modulo
    function mod(n, m) {
      return ((n % m) + m) % m;
    }
  
    // Right button: update effective position (relative to the original region) using modulo arithmetic
    rightBtn.addEventListener("click", () => {
      // Recalculate card width (in case of window resize)
      cardWidth = originalCards[0].offsetWidth;
      const regionWidth = originalCount * cardWidth;
      let currentEffective = cardsContainer.scrollLeft - regionWidth; // Effective position in [0, regionWidth)
      let newEffective = mod(currentEffective + scrollAmount, regionWidth);
      let newScrollLeft = regionWidth + newEffective;
      cardsContainer.scrollTo({ left: newScrollLeft, behavior: "smooth" });
    });
  
    // Left button: similar logic for moving left
    leftBtn.addEventListener("click", () => {
      cardWidth = originalCards[0].offsetWidth;
      const regionWidth = originalCount * cardWidth;
      let currentEffective = cardsContainer.scrollLeft - regionWidth;
      let newEffective = mod(currentEffective - scrollAmount, regionWidth);
      let newScrollLeft = regionWidth + newEffective;
      cardsContainer.scrollTo({ left: newScrollLeft, behavior: "smooth" });
    });
  });
  
  