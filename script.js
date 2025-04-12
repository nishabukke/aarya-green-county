//   tabs change

const tabs = document.querySelectorAll('.spec-tab');
const contentBoxes = document.querySelectorAll('.spec-content');

// Function to show one content box and hide others
function showContent(targetId) {
  contentBoxes.forEach(box => {
    box.classList.remove('active');
  });

  const targetBox = document.getElementById(targetId);
  if (targetBox) {
    targetBox.classList.add('active');
  }
}

// Event listener for tab hover
tabs.forEach(tab => {
  tab.addEventListener('mouseenter', () => {
    const targetId = tab.getAttribute('data-target');
    showContent(targetId);
  });
});

// Optional: Hide content when not hovering over tab or content
document.body.addEventListener('mousemove', (e) => {
  const isOverTab = [...tabs].some(tab => tab.contains(e.target));
  const isOverContent = [...contentBoxes].some(box => box.contains(e.target));

  if (!isOverTab && !isOverContent) {
    // Uncomment this if you want to hide all on mouse leave
    // contentBoxes.forEach(box => box.classList.remove('active'));
  }
});


document.getElementById("enquiryForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value
  };

  console.log("Form submitted with data:", formData);

  // Reset form and close modal
  this.reset();
  const modal = bootstrap.Modal.getInstance(document.getElementById('enquiryModal'));
  modal.hide();
});





  function openGallery() {
    document.getElementById("myGallery").style.display = "block";
  }
  
  function closeGallery() {
    document.getElementById("myGallery").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }