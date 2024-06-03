function openTab(evt, tabName) {
    var i, tabContent, tabLinks;
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    tabLinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
    
    if (localStorage.getItem(username)) {
        document.getElementById('registerMessage').innerText = 'Username already exists!';
    } else {
        localStorage.setItem(username, password);
        document.getElementById('registerMessage').innerText = 'User registered successfully!';
    }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    
    const storedPassword = localStorage.getItem(username);
    
    if (storedPassword === password) {
        document.getElementById('loginMessage').innerText = 'Login successful!';
        setTimeout(() => {
            window.location.href = 'secured.html';
        }, 1000);
    } else {
        document.getElementById('loginMessage').innerText = 'Invalid username or password!';
    }
});

// Default to the login tab
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".tab-link").click();
});
