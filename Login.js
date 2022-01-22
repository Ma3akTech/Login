// multi login fitur by MA3AKTECH
var users = [
    { username: 'Ma3akTech', password: '01270868225' },
];
function startlog(){var username = document.getElementById('username').value;var password = document.getElementById('password').value;for (var i = 0;i < users.length;i++){if(username == users[i].username && password == users[i].password){document.querySelector('.wendyloginwrap').classList.add('hidden');break}else{document.getElementById('akses').innerHTML = 'اسم المستخدم أو كلمة المرور خاطئة!'}}}
const show = () =>{var password = document.querySelector('#password');var sandi = document.querySelector('.icon1');var sandidua = document.querySelector('.icon2');if (password.type === 'password'){password.type = 'text';sandidua.style.opacity = '1';sandi.style.opacity = '0';}else{password.type = 'password';sandidua.style.opacity = '0';sandi.style.opacity = '1';}};
