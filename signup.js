let usersignupdetails = []
if (localStorage.userdetails) {
    let getback = JSON.parse(localStorage.userdetails)
    usersignupdetails=getback
}

const Signup = () => {
    let input1 = document.getElementById("firstname");
    let input2 = document.getElementById("lastname");
    let input3 = document.getElementById("email");
    let input4 = document.getElementById("password");
    let input5 = document.getElementById("phone");
    let input6 = document.getElementById("box");
    
    if (input1.value == "" || input2.value == "" || input3.value == "" || input4.value == "" || input5.value == "" || input6.checked == "") {
        alert("Please fill all the details");
    } else if (input5.value?.length !== 11) {
        alert("Please Input a Valid Number")
    } else {
        let obj = {
            firstname: input1.value,
            lastname: input2.value,
            email: input3.value,
            password: input4.value,
            phone: input5.value,
            isPinSet: false,
            pin: '',
            accNo: Number(phone.value),
            balance: 100000
        }
        usersignupdetails.push(obj);
        console.table(usersignupdetails);
        localStorage.setItem("userdetails", JSON.stringify(usersignupdetails));
        window.location.href = "Signin.html";
        
    }
}