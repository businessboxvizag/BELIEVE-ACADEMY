document.addEventListener("DOMContentLoaded", function(){

  const popup = document.getElementById("popup");

  // SHOW POPUP FIRST TIME
  if(popup){
    popup.style.display = "flex";
  }

  // FORM (unchanged)
  const form = document.getElementById("enquiryForm");

  if(form){
    form.addEventListener("submit", function(e) {
      e.preventDefault();

      const formData = new FormData(form);

      fetch("https://script.google.com/macros/s/AKfycbzYSMqsa60fHph-ZD9KJhNw0kYn_4tY4zc4vCxgnm-Agn1aRtZLFlwx1QfJxYU6qDKd/exec", {
        method: "POST",
        body: formData
      })
      .then(res => res.text())
      .then(() => {
        alert("Enquiry submitted successfully!");
        form.reset();
      })
      .catch(() => {
        alert("Something went wrong!");
      });

    });
  }

});

// CLOSE + REOPEN AFTER 30s
function closePopup(){
  const popup = document.getElementById("popup");
  popup.style.display = "none";

  // REOPEN AFTER 30 SECONDS
  setTimeout(() => {
    popup.style.display = "flex";
  }, 20000); // 30000 ms = 30 sec
}
