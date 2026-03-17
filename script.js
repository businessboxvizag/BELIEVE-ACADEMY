const scriptURL = "https://script.google.com/macros/s/AKfycbz0MHLP3Mkwu1zLRTRU_g9THeu8lbghtES-0w5Ao1Hqa12yarwTpqpJOztpBmLsdoXU/exec";

const form = document.getElementById("enquiryForm");

form.addEventListener("submit", e => {

e.preventDefault();

const data = {
studentName: form.studentName.value,
phone: form.phone.value,
message: form.message.value
};

fetch(scriptURL,{
method:"POST",
body:JSON.stringify(data)
})
.then(()=>{
alert("Enquiry submitted");
form.reset();
});

});