const contactForm = document.querySelector(".contact-form");
let name    = document.getElementById("name");
let email   = document.getElementById("email");
let subject = document.getElementById("subject");
let message = document.getElementById("message");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let formData = {
    name: name.value,
    email: email.value,
    subject: subject.value,
    message: message.value
  }

//   $.ajax({
//     type: 'POST',
//     url: "/",
//     contentType: "application/json; charset=utf-8",
//     datatype: 'json',
//     data: formData,
//     success: function (response) {
//         console.log(response);
//     },
//     error: function(error) {
//         console.log("error");
//     }
//  });

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "/");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.onload = function() {
    console.log(xhr.responseText);
    if(xhr.responseText == "success") {
      alert("Email sent"); //this never fires
      name.value = "";
      email.value = "";
      subject.value = "";
      message.value = "";
    } else {
      alert("Something went wrong!"); //nor does this
    }

    console.log(xhr.statusText); //nor does this
    xhr.send(JSON.stringify(formData));
  }

});