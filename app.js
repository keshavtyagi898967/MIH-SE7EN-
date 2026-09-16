let loginBtn = document.querySelector("#login_btn");
let signupbtn = document.querySelector("#signup_btn")
let loginBox = document.querySelector(".login-box");
let submitBtn = document.querySelector("#submitBtn");
let signupbox = document.querySelector(".signup-box");

loginBtn.addEventListener("click", () => {
    loginBox.style.display = "block";
});

signupbtn.addEventListener("click", () => {
    signupbox.style.display = "block";
})

login-submitBtn.addEventListener("click", () => {

    let id = document.querySelector("#userId").value;
    let pass = document.querySelector("#password").value;

    if (id === "keshav" && pass === "wiwi") {

        window.location.href = "index.html";

    } else {

        document.querySelector("#error").innerText =
            "Invalid ID or password";
    }
});
