const LOGIN_URL = "https://dummyjson.com/auth/login"

function getTheUserDetails(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    console.log(username, password);
    if(!(username.length >2 && password.length>8)){
        alert("Please either enter more length credentials or you have not entered password more than 8 characters");
    }else{
    return {username: username, password: password}
    }
}

async function loginTheUser(e){

    e.preventDefault()
    const requestObj =  getTheUserDetails();
    let res = await fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    
    username: 'kminchelle',
    password: '0lelplR',
    // expiresInMins: 60, // optional
  })
});

   let data = await res.json();
        localStorage.setItem("token",data.token);
        window.location.href="index.html";
    if(localStorage.getItem("token")){
    
    }
}


const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", loginTheUser);




