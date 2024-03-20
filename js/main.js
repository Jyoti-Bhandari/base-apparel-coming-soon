const form = document.querySelector(".container form");
const email = document.querySelector(".container form input[type=email]");

form.addEventListener("submit", function (e) {
    // console.log(e);
    // e.preventDefault() called to prevent the default behavior of form submission, which is to reload the page
    e.preventDefault();
    let emailValue = email.value;
    // console.log(emailValue);
    if (validateEmail(emailValue)) {
        // console.log("This is a valid email");
        form.classList.remove("error");
    }
    else {
        // console.log("This is not a valid email");
        form.classList.add("error");
    }
});


// regex expression function
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
