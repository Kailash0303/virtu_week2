
document.querySelector(".cta-button").addEventListener("click", function () {
    document.getElementById("gallery").scrollIntoView({ behavior: "smooth" });
  });
  
  document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const feedback = document.getElementById("feedback");
  
    if (!name || !email) {
      feedback.textContent = "Please fill in all fields.";
      feedback.style.color = "red";
    } else {
      feedback.textContent = "Your message has been sent successfully. Thank you!";
      feedback.style.color = "green";
  
      // Clear form fields
      document.getElementById("contact-form").reset();
    }
  });
  