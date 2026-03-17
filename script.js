const scriptURL = "https://script.google.com/macros/s/AKfycbzYSMqsa60fHph-ZD9KJhNw0kYn_4tY4zc4vCxgnm-Agn1aRtZLFlwx1QfJxYU6qDKd/exec";

const form = document.getElementById("enquiryForm");

form.addEventListener("submit", function(e) {

  e.preventDefault();

  const formData = new FormData(form);   // ✅ IMPORTANT CHANGE

  fetch(scriptURL, {
    method: "POST",
    body: formData                      // ✅ NO headers, NO JSON
  })
  .then(response => response.text())
  .then(data => {
    alert("Enquiry submitted successfully!");
    form.reset();
  })
  .catch(error => {
    console.error("Error!", error);
    alert("Something went wrong!");
  });

});