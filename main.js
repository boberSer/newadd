const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

burger.addEventListener('click', () => {
    menu.classList.toggle('disp')        
});

const burgertwo = document.querySelector('#burgertwo');
const menutwo = document.querySelector('#menutwo');

burgertwo.addEventListener('click', () => {
    menutwo.classList.toggle('disp')        
});

const scrollController = {
    disabledScroll() {
        document.body.style.cssText = 'overflow: hidden';
    }
}

scrollController.disabledScroll();

let signupФамилия = document.querySelector("#signupФамилия");
let signupИмя = document.querySelector("#signupИмя");
let signupОтчество = document.querySelector("#signupОтчество");
let signupEmail = document.querySelector("#signupEmail");
let signupПароль = document.querySelector("#signupПароль");

let users = {};

function User(signupФамилия, signupИмя, signupОтчество, signupEmail, signupПароль) {
    this.signupФамилия = signupФамилия;
    this.signupИмя = signupИмя;
    this.signupОтчество = signupОтчество;
    this.signupEmail = signupEmail;
    this.signupПароль = signupПароль;

}

function createId(users) {
    return Object.keys(users).length;
}

regreg.addEventListener("click", () => {
    const familyUser = signupФамилия.value;
    const nameUser = signupИмя.value;
    const otchUser = signupОтчество.value;
    const emailUser = signupEmail.value;
    const passwordUser = signupПароль.value;

    const user = new User(familyUser, nameUser, otchUser, emailUser, passwordUser);

    const userId = 'User' + createId(users);
    users[userId] = user;

    console.log(users);
})

let vhodEmail = document.getElementById('vhodEmail');
let vhodPassword = document.getElementById('vhodPassword');

let vhodusers = {};

function User2(vhodEmail, vhodPassword) {
    this.vhodEmail = vhodEmail;
    this.vhodPassword = vhodPassword;
}

function createId(vhodusers) {
    return Object.keys(vhodusers).length;
}

regvhod.addEventListener("click", () => {
    const EmailUser = vhodEmail.value;
    const PasswordUser = vhodPassword.value;

    const vhoduser = new User2(vhodEmail, vhodPassword);

    const vhoduserId = 'User' + createId(vhodusers);
    vhodusers[vhoduserId] = vhoduser;

    console.log(vhodusers);
})

var email = document.getElementById("signupEmail");
var password = document.getElementById("signupПароль");
var name1 = document.getElementById("signupИмя");
var family = document.getElementById("signupФамилия");
var othestvo = document.getElementById("signupОтчество");

function store() {
    localStorage.setItem('email', email.value);
    localStorage.setItem('password', password.value);
    localStorage.setItem('name', name1.value);
    localStorage.setItem('family', family.value);
    localStorage.setItem('othestvo', othestvo.value);
}

function check() {
    var storedEmail = localStorage.getItem("email");
    var storedPassword = localStorage.getItem("password");

    var useremail = document.getElementById('vhodEmail');
    var userPassword = document.getElementById('vhodPassword');


    if(useremail.value !== storedEmail || userPassword.value !== storedPassword) {
        alert('Вы незарегестрированы');
    }else {
        alert('Вы зарегестрированы')
    }
}

let list = document.querySelectorAll('.list .item');
list.forEach(item => {
    item.addEventListener('click', function(event) {
        if(event.target.classList.contains('add')){
            document.getElementById('example').style.display='none'
            alert("Succes")
            var itemNew = item.cloneNode(true);
            let checkIsset = false;

            let listCart = document.querySelectorAll('.cart .item');
            listCart.forEach(cart => {
                if(cart.getAttribute('data-key') == itemNew.getAttribute('data-key')) {
                    checkIsset = true;
                    cart.classList.add('danger');
                    setTimeout(function(){
                        cart.classList.remove('danger');
                    }, 1000)
                }
            })
            
            if(checkIsset == false){
                document.querySelector('.listCart').appendChild(itemNew);
            }

            
        }
    })
})
 

function Remove($key) {
    let listCart = document.querySelectorAll('.cart .item');
    listCart.forEach(item => {
        if(item.getAttribute('data-key') == $key) {
            document.getElementById('example').style.display='block'
            item.remove();
            return;
        }
    })
}



