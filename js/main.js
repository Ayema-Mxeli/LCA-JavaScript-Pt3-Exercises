let toggleNavStatus = false;

// LOGIN VALIDATION
function validateLogin() {

    event.preventDefault();

    let username = document.getElementById("uname").value;
    let password = document.getElementById("pwd").value;
    let modal = document.querySelector(".modal");

    if (username === "admin" && password === "password123") {

        window.location.href = "index.html";

    } else {

        console.log("Invalid credentials");
        modal.style.display = "block";

    }
}

// DISMISS MODAL
function dismissModal() {

    document.querySelector(".modal").style.display = "none";

}

// TOGGLE NAVIGATION
function toggleNav() {

    let sidebar = document.querySelector(".nav-sidebar");

    if (toggleNavStatus === false) {

        sidebar.style.width = "250px";
        toggleNavStatus = true;

    } else {

        sidebar.style.width = "0";
        toggleNavStatus = false;

    }
} 