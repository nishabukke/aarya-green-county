//   tabs change

function activeTab(evt, id) {
           
    // Get all elements with class="tablinks" and remove the class "active"
     let tabactive = document.getElementsByClassName("TabButtonSelected");
     tabactive[0].className = tabactive[0].className.replace(" TabButtonSelected", "");

     document.getElementById(id).style.display = "block";
     evt.currentTarget.className += " TabButtonSelected";

     displaySection(evt,id)
 }
 
function displaySection(evt, id) {

     let tabactive = document.getElementsByClassName("tab-section");
     tabactive[0].className = tabactive[0].className.replace(" d-chart-show", "d-chart-n");
     // add below line of codes
     [...document.querySelectorAll('div.tab-section')].forEach(item => item.style.display='none')
     document.getElementById("Section" + id).style.display = "block";
     evt.currentTarget.className += " d-chart-show";

}


// Modal functions
function openModal() {
  document.getElementById("enquiryModal").style.display = "block";
}

function closeModal() {
  document.getElementById("enquiryModal").style.display = "none";
}

// Form submission (you can modify this to handle the form data as needed)
document.getElementById("enquiryForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  // Here you can add code to handle form submission
  // For example, collecting form data:
  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    propertyType: document.getElementById("propertyType").value,
    message: document.getElementById("message").value
  };
  
  console.log("Form submitted with data:", formData);
  // Add your form submission logic here (e.g., send to server)
  
  closeModal();
  this.reset(); // Reset form fields
});

// Close modal when clicking outside
window.onclick = function(event) {
  const modal = document.getElementById("enquiryModal");
  if (event.target == modal) {
    closeModal();
  }
}





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