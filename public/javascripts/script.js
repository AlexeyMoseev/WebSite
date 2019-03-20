document.getElementById('form').onsubmit = function(event) {
	event.preventDefault();
	var firstPassword = document.getElementById("password1").value
	var secondPassword = document.getElementById("password2").value
	var passwords = [firstPassword, secondPassword]

  var validPassword = passwords && passwords.length === 2 && passwords[0] === passwords[1];
	if (validPassword) {
		this.submit()
	} else {
		alert('Ошибка! Пароли не равны')
	}
}

var formTag = document.getElementById('form')
var oninputFunction = function(event) {
	var firstPassword = document.getElementById("password1").value
	var secondPassword = document.getElementById("password2").value
	var passwords = [firstPassword, secondPassword]

  var validPassword = passwords && passwords.length === 2 && passwords[0] === passwords[1];
	if (validPassword) {
		formTag.classList.remove('error');
	} else {
		formTag.classList.add('error');
	}
}
document.getElementById('password1').oninput = oninputFunction;
document.getElementById('password2').oninput = oninputFunction;