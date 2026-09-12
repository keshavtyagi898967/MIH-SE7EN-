let loginBtn = document.querySelector("#login_btn");
let loginBox = document.querySelector(".login-box");
let submitBtn = document.querySelector("#submitBtn");

loginBtn.addEventListener("click", () => {
    console.log("working btn")
    loginBox.style.display = "block";
});

submitBtn.addEventListener("click", () => {

    let id = document.querySelector("#userId").value;
    let pass = document.querySelector("#password").value;

    if (id === "keshav" && pass === "wiwi") {

        window.location.href = "index.html";

    } else {

        document.querySelector("#error").innerText =
            "Invalid ID or password";
    }
});