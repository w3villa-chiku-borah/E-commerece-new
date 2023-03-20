var LoginForm = document.getElementById("LoginForm");
var RegForm = document.getElementById("RegForm");
var Indicator = document.getElementById("Indicator");

function register(){
    RegForm.style.transform = "translatex(0px)";
    LoginForm.style.transform = "translatex(0px)";
    Indicator.style.transform = "translatex(100px)";
    
}

function login(){
    RegForm.style.transform = "translatex(300px)";
    LoginForm.style.transform = "translatex(300px)";
    Indicator.style.transform = "translatex(0px)";
}

function signup(){
    let username = document.getElementById("Username");
    let email = document.getElementById("Email");
    let password = document.getElementById("Password");
    let userNameValue = username.value.trim();
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();
    console.log(1)
    if(userNameValue.length>0 && emailValue.length>0 && passwordValue.length>0)
    {
        let myInfo = {
                Uname : userNameValue,
                email :emailValue,
                password : passwordValue,
                islogin :false,
        }
        let array = JSON.parse(localStorage.getItem('myInfo'))
        console.log(typeof array)
        if(array==undefined || array==null || !array.length ){
            array=[myInfo];
        }else{
            array.push(myInfo)
        }
        let myInfo_string=JSON.stringify(array);
        // console.log(myInfo_array)
        localStorage.setItem("myInfo",myInfo_string);
        // let myInfo_intoObj = JSON.parse(localStorage.getItem("myInfo"));
        // console.log(myInfo_intoObj);
        Swal.fire(
            'Good job!',
            'You are Register',
            'success'
          )
    }
    // console.log(localStorage)
}
function logInButton(){
    let array = JSON.parse(localStorage.getItem('myInfo'));
 
    let password = document.getElementById("passwordInLogin");
    let username = document.getElementById("unameInLogin");
    let userNameValue = username.value.trim();
    let passwordValue = password.value.trim();
    let i =0;
    for(i=0;i<array.length;i++){
        if(array[i].Uname== userNameValue && array[i].password== passwordValue ){
            array[i].islogin=true;
            let myInfo_string=JSON.stringify(array);
            localStorage.setItem("myInfo",myInfo_string)
            Swal.fire(
                'Good job!',
                'You are Login',
                'success'
              ).then(() => {
                window.location.href = "../index.html";
              })
              break;
        }
    }
}

isLoggedIn()