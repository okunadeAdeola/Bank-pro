// var retrievedobj = JSON.parse(localStorage.getItem('userdetails'));
// console.log(retrievedobj);

// const Login = () => {
//     let email = document.getElementById("email")
//     let password = document.getElementById("password")

//     let userFound = false

//     for (let index = 0; index < retrievedobj?.length; index++) {
//         if (retrievedobj[index].email == email.value && retrievedobj[index].password == password.value) {
//             userFound = true; localStorage.setItem('user_index', index);    localStorage.setItem('user_index', index)
//             break;
//         }

//     }


//     if (userFound) {
//         alert('User Found')
//         window.location.href = "setpin.html"
//     } else {
//         alert('Invalid Credentials or Account Has Not Been Registered')
//     }

//     document.getElementById('email').value = ''
//     document.getElementById('password').value = ''

// }
const Login = () => {
    var retrievedobj = JSON.parse(localStorage.getItem('userdetails'));
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    let userFound = false;
    let currentUser = null;

    for (let index = 0; index < retrievedobj?.length; index++) {
        if (retrievedobj[index].email == email.value && retrievedobj[index].password == password.value) {
            userFound = true;
            currentUser = retrievedobj[index];
            localStorage.setItem('user_index', index);  // Save user index to localStorage
            break;
        }
    }

    if (userFound) {
        alert('User Found');
        // Check if the user has already set their PIN
        if (currentUser.isPinSet) {
            window.location.href = "dashboard.html";  // Redirect to home if PIN is already set
        } else {
            window.location.href = "setpin.html";  // Redirect to set PIN page if PIN is not set
        }
    } else {
        alert('Invalid Credentials or Account Has Not Been Registered');
    }

    // Clear input fields
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
}
