
function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    document.getElementById('nameError').innerHTML = '';
    document.getElementById('emailError').innerHTML = '';
    document.getElementById('passwordError').innerHTML = '';

    if (name.trim() === '') {
        document.getElementById('nameError').innerHTML = 'Name is required';
        return;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').innerHTML = 'Invalid email address';
        return;
    }

    if (password.length < 6) {
        document.getElementById('passwordError').innerHTML = 'Password must be at least 6 characters long';
        return;
    }


    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
   

    var newTab = window.open("display.html");

    newTab.onload = function () {
    newTab.document.getElementById('name').innerText = name;
    newTab.document.getElementById('email').innerText = email;
    newTab.document.getElementById('password').innerText = "******";
    };

}
